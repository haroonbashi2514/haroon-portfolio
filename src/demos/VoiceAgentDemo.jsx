import { useEffect, useRef, useState } from 'react';

import {
  haroonKnowledgeEntries,
  haroonFallback,
} from '../data/haroonKnowledge';

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getAnswer(text) {
  const query = normalizeText(text);

  const entry = haroonKnowledgeEntries.find((item) =>
    item.keywords.some((keyword) =>
      query.includes(normalizeText(keyword))
    )
  );

  return entry ? entry.answer : haroonFallback;
}

export default function VoiceAgentDemo() {
  const [state, setState] = useState('idle');
  const [lastQuestion, setLastQuestion] = useState('');
  const [lastAnswer, setLastAnswer] = useState('');
  const [supported, setSupported] = useState(true);
  const [conversationActive, setConversationActive] = useState(false);

  const recognitionRef = useRef(null);
  const conversationActiveRef = useRef(false);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      handleUserInput(text);
    };

    recognition.onend = () => {
      setState((current) =>
        current === 'listening' ? 'idle' : current
      );
    };

    recognition.onerror = () => {
      setState('idle');
    };

    recognitionRef.current = recognition;

    return () => {
      try {
        recognition.abort();
      } catch {
        // Ignore cleanup errors.
      }
    };
  }, []);

  const speak = (text) => {
  if (!('speechSynthesis' in window)) {
    setState('idle');

    if (conversationActiveRef.current) {
      startListening();
    }

    return;
  }

  window.speechSynthesis.cancel();

  setState('speaking');

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.onend = () => {
    if (conversationActiveRef.current) {
      setState('idle');

      window.setTimeout(() => {
        if (conversationActiveRef.current) {
          startListening();
        }
      }, 250);
    } else {
      setState('idle');
    }
  };

  utterance.onerror = () => {
    setState('idle');

    if (conversationActiveRef.current) {
      startListening();
    }
  };

  window.speechSynthesis.speak(utterance);
};

  const handleUserInput = (text) => {
    setLastQuestion(text);
    setState('speaking');

    const answer = getAnswer(text);

    setTimeout(() => {
      setLastAnswer(answer);
      speak(answer);
    }, 350);
  };

  const startListening = () => {
  if (!recognitionRef.current || state === 'speaking') {
    return;
  }

  try {
    recognitionRef.current.start();
    setState('listening');
  } catch {
    setState('idle');
  }
};

  const startConversation = () => {
    conversationActiveRef.current = true;
    setConversationActive(true);
    startListening();
};

  const stopListening = () => {
  conversationActiveRef.current = false;
  setConversationActive(false);

  try {
    recognitionRef.current?.stop();
  } catch {
    // Ignore cleanup errors.
  }

  window.speechSynthesis?.cancel();
  setState('idle');
};

  const clearConversation = () => {
  conversationActiveRef.current = false;
  setConversationActive(false);

  window.speechSynthesis?.cancel();

  try {
    recognitionRef.current?.abort();
  } catch {
    // Ignore cleanup errors.
  }

  setLastQuestion('');
  setLastAnswer('');
  setState('idle');
};

  const orbClass =
    state === 'listening'
      ? 'voice__orb voice__orb--listening'
      : state === 'speaking'
        ? 'voice__orb voice__orb--speaking'
        : 'voice__orb';

  const statusText =
    state === 'listening'
      ? 'Listening'
      : state === 'speaking'
        ? 'Speaking'
        : 'Tap to talk';

  return (
    <div className="voice">
      <div className="voice__main">

        <div className={orbClass} aria-hidden="true">
          <div className="voice__orb-core">
            <svg
              className="voice__orb-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="22" />
            </svg>
          </div>
        </div>

        <p
          className={`voice__status ${
            state !== 'idle'
              ? 'voice__status--active'
              : ''
          }`}
        >
          {statusText}
        </p>

        <p className="voice__hint">
          Ask me about Haroon, his experience,
          projects, or technical background.
        </p>

        {lastQuestion && (
          <div className="voice__exchange">
            <div className="voice__question">
              <span>You</span>
              <p>{lastQuestion}</p>
            </div>

            {lastAnswer && (
              <div className="voice__answer">
                <span>Haroon's AI</span>
                <p>{lastAnswer}</p>
              </div>
            )}
          </div>
        )}

        <div className="voice__controls">
          {conversationActive ? (
  <button
    className="voice__btn voice__btn--active"
    onClick={stopListening}
  >
    Stop conversation
  </button>
) : (
  <button
    className="voice__btn"
    onClick={startConversation}
    disabled={!supported}
  >
    Start conversation
  </button>
)}

          {(lastQuestion || lastAnswer) && (
            <button
              className="voice__btn"
              onClick={clearConversation}
            >
              Clear
            </button>
          )}
        </div>

        {!supported && (
          <p className="voice__browser-note">
            Voice input is not available in this browser.
          </p>
        )}

      </div>
    </div>
  );
}