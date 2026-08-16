import { useEffect, useRef, useState } from 'react';

import {
  haroonKnowledgeEntries,
  haroonFallback,
} from '../data/haroonKnowledge';

const suggestions = [
  "Who is Haroon?",
  "Tell me about his experience",
  "Tell me about the RAG platform",
  "What did he build during his ML internship?",
];

const statusSteps = [
  'Retrieving relevant content...',
  'Matching knowledge...',
  'Preparing response...',
];

const normalizeText = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const findAnswer = (text) => {
  const query = normalizeText(text);

  const entry = haroonKnowledgeEntries.find((item) =>
    item.keywords.some((keyword) =>
      query.includes(normalizeText(keyword))
    )
  );

  if (entry) {
    return {
      answer: entry.answer,
      source: entry.source,
    };
  }

  return {
    answer: haroonFallback,
    source: null,
  };
};

export default function RagDemo() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, status]);

  const ask = (text) => {
    if (!text.trim() || busy) return;

    const userMessage = {
      role: 'user',
      text: text.trim(),
    };

    setMessages((current) => [...current, userMessage]);
    setInput('');
    setBusy(true);
    setStatus(statusSteps[0]);

    let step = 0;

    const interval = window.setInterval(() => {
      step += 1;

      if (step < statusSteps.length) {
        setStatus(statusSteps[step]);
      } else {
        window.clearInterval(interval);
      }
    }, 400);

    window.setTimeout(() => {
      window.clearInterval(interval);

      const result = findAnswer(text);

      setMessages((current) => [
        ...current,
        {
          role: 'bot',
          text: result.answer,
          source: result.source,
        },
      ]);

      setStatus('');
      setBusy(false);
    }, 1300);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ask(input);
  };

  return (
    <div className="rag">
      <aside className="rag__sidebar">
        <p className="rag__sidebar-label">Knowledge Base</p>

        <div className="rag__kb">
          <div className="rag__kb-icon" aria-hidden="true" />

          <div>
            <div className="rag__kb-name">
              Haroon Profile
              </div>
              <div className="rag__kb-meta">
                1 page · demo
                </div>
          </div>
        </div>

        <div className="rag__sidebar-section">
          <p className="rag__suggestion-label">Token Balance</p>

          <div className="rag__stat">
            <strong>8,420</strong>
            <span>remaining</span>
          </div>
        </div>

        <div className="rag__sidebar-section">
          <p className="rag__suggestion-label">Chat Link</p>

          <div className="rag__link-status">
            <span className="rag__status-dot" />
            Active
          </div>
        </div>

        <div className="rag__suggestions">
          <p className="rag__suggestion-label">Try asking</p>

          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              className="rag__suggestion"
              onClick={() => ask(suggestion)}
              disabled={busy}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </aside>

      <section className="rag__chat">
        <div className="rag__chat-header">
          <div>
            <p className="rag__chat-title">
              Haroon Profile
            </p>

            <p className="rag__chat-subtitle">
              Ask questions about the uploaded knowledge
            </p>
          </div>

          <span className="rag__chat-ready">
            Ready
          </span>
        </div>

        <div className="rag__messages" ref={scrollRef}>
          {messages.length === 0 && (
            <div className="rag__empty">
              <div className="rag__empty-title">
                Ask the knowledge base
              </div>

              <p className="rag__empty-text">
                Questions are answered from the preloaded
                Haroon_Bashi_Profile.pdf document.
              </p>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`rag__msg rag__msg--${message.role}`}
            >
              <div>{message.text}</div>

              {message.source && (
                <span className="rag__source">
                  Source: {message.source}
                </span>
              )}
            </div>
          ))}
        </div>

        {status && (
          <div className="rag__status">
            <span className="rag__status-dot" />
            {status}
          </div>
        )}

        <form
          className="rag__input"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about Haroon's background, projects..."
            aria-label="Ask a question"
            disabled={busy}
          />

          <button
            type="submit"
            disabled={busy || !input.trim()}
          >
            {busy ? '...' : 'Send'}
          </button>
        </form>
      </section>
    </div>
  );
}