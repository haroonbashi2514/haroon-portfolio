import { useState } from 'react';

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'courses', label: 'My Courses' },
  { id: 'catalog', label: 'Course Catalog' },
  { id: 'roleplay', label: 'AI Role-plays' },
  { id: 'assessments', label: 'AI Assessments' },
  { id: 'progress', label: 'Progress' },
];

export default function LmsDemo() {
  const [activePage, setActivePage] = useState('dashboard');
  const [roleplayStarted, setRoleplayStarted] = useState(false);
  const [roleplayInput, setRoleplayInput] = useState('');
  const [roleplayMessages, setRoleplayMessages] = useState([]);
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [assessmentIndex, setAssessmentIndex] = useState(0);
  const [assessmentSelected, setAssessmentSelected] = useState('');
  const [assessmentScore, setAssessmentScore] = useState(0);
  const [assessmentFinished, setAssessmentFinished] = useState(false);
  const renderPlaceholder = (title, description) => (
    <div className="lms-demo__placeholder">
      <span className="lms-demo__eyebrow">Portfolio Demo</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );

  const startRoleplay = () => {
  setRoleplayStarted(true);

  setRoleplayMessages([
    {
      role: 'ai',
      text:
        "I understand your concern. Your competitor is offering a lower price. Why should I choose your solution instead?",
    },
  ]);
};

const sendRoleplayMessage = () => {
  const message = roleplayInput.trim();

  if (!message || !roleplayStarted) {
    return;
  }

  setRoleplayMessages((current) => [
    ...current,
    {
      role: 'user',
      text: message,
    },
    {
      role: 'ai',
      text:
        "That's a fair point. Can you explain how your solution delivers value beyond the initial price?",
    },
  ]);

  setRoleplayInput('');
};

const assessmentQuestions = [
  {
    question:
      'What is the most effective first step when handling a customer objection?',
    options: [
      'Immediately offer a discount',
      "Understand the customer's concern",
      'End the conversation',
      'Ignore the objection',
    ],
    answer: "Understand the customer's concern",
  },
  {
    question:
      'What should a sales professional focus on before presenting a solution?',
    options: [
      'The competitor',
      'The customer’s actual needs',
      'The lowest possible price',
      'Ending the conversation quickly',
    ],
    answer: 'The customer’s actual needs',
  },
  {
    question:
      'Which approach best supports effective workplace communication?',
    options: [
      'Avoid asking questions',
      'Listen and clarify the requirement',
      'Speak continuously',
      'Assume the requirement',
    ],
    answer: 'Listen and clarify the requirement',
  },
  {
    question:
      'What is a useful response when a customer compares your product with a cheaper alternative?',
    options: [
      'Immediately criticize the competitor',
      'End the discussion',
      'Explain the value and differences',
      'Offer the maximum discount',
    ],
    answer: 'Explain the value and differences',
  },
  {
    question:
      'What is the purpose of an AI role-play in a learning environment?',
    options: [
      'Replace every instructor',
      'Provide realistic practice scenarios',
      'Remove the need for assessment',
      'Automatically pass learners',
    ],
    answer: 'Provide realistic practice scenarios',
  },
];

const startAssessment = () => {
  setAssessmentStarted(true);
  setAssessmentIndex(0);
  setAssessmentSelected('');
  setAssessmentScore(0);
  setAssessmentFinished(false);
};

const submitAssessmentAnswer = () => {
  if (!assessmentSelected) {
    return;
  }

  const currentQuestion = assessmentQuestions[assessmentIndex];

  const newScore =
    assessmentSelected === currentQuestion.answer
      ? assessmentScore + 1
      : assessmentScore;

  setAssessmentScore(newScore);

  if (assessmentIndex === assessmentQuestions.length - 1) {
    setAssessmentFinished(true);
    return;
  }

  setAssessmentIndex((current) => current + 1);
  setAssessmentSelected('');
};

const resetAssessment = () => {
  setAssessmentStarted(false);
  setAssessmentIndex(0);
  setAssessmentSelected('');
  setAssessmentScore(0);
  setAssessmentFinished(false);
};

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <div className="lms-demo__page">
            <div className="lms-demo__page-header">
              <div>
                <h2>Dashboard</h2>
                <p>Your learning overview</p>
              </div>

              <span className="lms-demo__status">
                Learning Active
              </span>
            </div>

            <div className="lms-demo__stats">
              <div>
                <span>Course Completion</span>
                <strong>68%</strong>
              </div>

              <div>
                <span>Assessment Average</span>
                <strong>87%</strong>
              </div>

              <div>
                <span>Learning Time</span>
                <strong>3h 20m</strong>
              </div>
            </div>

            <div className="lms-demo__dashboard-grid">
              <section className="lms-demo__card">
                <span className="lms-demo__section-label">
                  Continue Learning
                </span>

                <div className="lms-demo__course">
                  <div>
                    <strong>Workplace Communication</strong>
                    <span>Module 4 of 6</span>
                  </div>

                  <b>72%</b>
                </div>

                <div className="lms-demo__progress">
                  <span style={{ width: '72%' }} />
                </div>
              </section>

              <section className="lms-demo__card">
                <span className="lms-demo__section-label">
                  AI Features
                </span>

                <div className="lms-demo__feature-row">
                  <span>AI Role-play</span>
                  <strong>Available</strong>
                </div>

                <div className="lms-demo__feature-row">
                  <span>AI Assessments</span>
                  <strong>Available</strong>
                </div>

                <div className="lms-demo__feature-row">
                  <span>RAG Learning</span>
                  <strong>Active</strong>
                </div>
              </section>
            </div>
          </div>
        );

      case 'courses':
  return (
    <div className="lms-demo__courses">
      <div className="lms-demo__page-header">
        <div>
          <h2>My Courses</h2>
          <p>Your assigned learning programs</p>
        </div>

        <span className="lms-demo__status">
          3 Courses
        </span>
      </div>

      <div className="lms-demo__course-list">
        {[
          {
            title: 'Workplace Communication',
            module: 'Module 4 of 6',
            progress: 72,
            activity: 'Today',
            completed: false,
          },
          {
            title: 'Sales Excellence Program',
            module: 'Module 2 of 5',
            progress: 58,
            activity: 'Yesterday',
            completed: false,
          },
          {
            title: 'Professional Ethics',
            module: 'Module 5 of 5',
            progress: 100,
            activity: 'Completed',
            completed: true,
          },
        ].map((course) => (
          <div
            key={course.title}
            className="lms-demo__course-card"
          >
            <div className="lms-demo__course-top">
              <div>
                <h3>{course.title}</h3>
                <p>{course.module}</p>
              </div>

              <strong>{course.progress}%</strong>
            </div>

            <div className="lms-demo__course-progress">
              <span
                style={{
                  width: `${course.progress}%`,
                }}
              />
            </div>

            <div className="lms-demo__course-bottom">
              <span>
                {course.completed
                  ? 'Completed'
                  : `Last activity · ${course.activity}`}
              </span>

              {!course.completed && (
                <button
                  className="lms-demo__continue-button"
                  onClick={() =>
                    alert(
                      `${course.title} · ${course.module}`
                    )
                  }
                >
                  Continue
                </button>
              )}

              {course.completed && (
                <span className="lms-demo__completed">
                  ✓ Completed
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

      case 'catalog':
  return (
    <div className="lms-demo__catalog">
      <div className="lms-demo__page-header">
        <div>
          <h2>Course Catalog</h2>
          <p>Explore available learning programs</p>
        </div>

        <span className="lms-demo__status">
          6 Courses
        </span>
      </div>

      <div className="lms-demo__catalog-list">
        {[
          {
            title: 'Workplace Communication',
            category: 'Communication',
            level: 'Intermediate',
            duration: '4h 20m',
            enrolled: true,
          },
          {
            title: 'Sales Excellence Program',
            category: 'Sales',
            level: 'Advanced',
            duration: '5h 10m',
            enrolled: true,
          },
          {
            title: 'Professional Ethics',
            category: 'Compliance',
            level: 'Beginner',
            duration: '2h 30m',
            enrolled: true,
          },
          {
            title: 'Leadership Essentials',
            category: 'Leadership',
            level: 'Intermediate',
            duration: '3h 45m',
            enrolled: false,
          },
          {
            title: 'Customer Experience',
            category: 'Customer Care',
            level: 'Intermediate',
            duration: '3h 10m',
            enrolled: false,
          },
          {
            title: 'AI for Business',
            category: 'Technology',
            level: 'Beginner',
            duration: '2h 50m',
            enrolled: false,
          },
        ].map((course) => (
          <div
            key={course.title}
            className="lms-demo__catalog-card"
          >
            <div className="lms-demo__catalog-icon">
              {course.title.charAt(0)}
            </div>

            <div className="lms-demo__catalog-info">
              <h3>{course.title}</h3>

              <div className="lms-demo__catalog-meta">
                <span>{course.category}</span>
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>
            </div>

            {course.enrolled ? (
              <span className="lms-demo__catalog-enrolled">
                Enrolled
              </span>
            ) : (
              <button
                className="lms-demo__catalog-button"
                type="button"
              >
                View Course
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );

      case 'roleplay':
  return (
    <div className="lms-demo__roleplay">
      <div className="lms-demo__page-header">
        <div>
          <h2>AI Role-play</h2>
          <p>Practice realistic customer conversations</p>
        </div>

        <span className="lms-demo__status">
          AI Scenario
        </span>
      </div>

      {!roleplayStarted ? (
        <>
          <div className="lms-demo__roleplay-config">
            <div className="lms-demo__roleplay-field">
              <span>Scenario</span>
              <strong>Budget Objection Handling</strong>
            </div>

            <div className="lms-demo__roleplay-field">
              <span>Your Role</span>
              <strong>Sales Executive</strong>
            </div>

            <div className="lms-demo__roleplay-field">
              <span>AI Role</span>
              <strong>Customer</strong>
            </div>

            <div className="lms-demo__roleplay-field">
              <span>Objective</span>
              <strong>Handle a customer price objection</strong>
            </div>
          </div>

          <div className="lms-demo__roleplay-start">
            <div>
              <span className="lms-demo__section-label">
                AI Customer
              </span>

              <p>
                "I think your competitor offers something
                similar for less. Why should I pay more?"
              </p>
            </div>

            <button
              className="lms-demo__roleplay-button"
              onClick={startRoleplay}
            >
              Start Role-play
            </button>
          </div>
        </>
      ) : (
        <div className="lms-demo__conversation">
          <div className="lms-demo__conversation-header">
            <div>
              <span className="lms-demo__section-label">
                Live Scenario
              </span>

              <strong>
                Sales Executive vs Customer
              </strong>
            </div>

            <button
              className="lms-demo__conversation-reset"
              onClick={() => {
                setRoleplayStarted(false);
                setRoleplayMessages([]);
                setRoleplayInput('');
              }}
            >
              End
            </button>
          </div>

          <div className="lms-demo__messages">
            {roleplayMessages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`lms-demo__message lms-demo__message--${message.role}`}
              >
                <span>
                  {message.role === 'ai'
                    ? 'AI Customer'
                    : 'You'}
                </span>

                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <form
            className="lms-demo__message-input"
            onSubmit={(event) => {
              event.preventDefault();
              sendRoleplayMessage();
            }}
          >
            <input
              type="text"
              value={roleplayInput}
              onChange={(event) =>
                setRoleplayInput(event.target.value)
              }
              placeholder="Respond to the customer..."
            />

            <button
              type="submit"
              disabled={!roleplayInput.trim()}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );

      case 'assessments': {
  const currentQuestion =
    assessmentQuestions[assessmentIndex];

  if (!assessmentStarted) {
    return (
      <div className="lms-demo__assessment">
        <div className="lms-demo__page-header">
          <div>
            <h2>AI Assessment</h2>
            <p>
              Course-grounded assessment generated from
              learning content
            </p>
          </div>

          <span className="lms-demo__status">
            RAG Generated
          </span>
        </div>

        <div className="lms-demo__assessment-intro">
          <div>
            <span className="lms-demo__section-label">
              Course
            </span>

            <strong>
              Workplace Communication
            </strong>

            <p>
              This assessment is generated from the
              selected course content using RAG.
            </p>
          </div>

          <div className="lms-demo__assessment-meta">
            <div>
              <span>Questions</span>
              <strong>5</strong>
            </div>

            <div>
              <span>Source</span>
              <strong>Course Content</strong>
            </div>
          </div>

          <button
            className="lms-demo__assessment-button"
            onClick={startAssessment}
          >
            Start Assessment
          </button>
        </div>
      </div>
    );
  }

  if (assessmentFinished) {
    const percentage = Math.round(
      (assessmentScore / assessmentQuestions.length) * 100
    );

    return (
      <div className="lms-demo__assessment lms-demo__assessment--result">
        <div className="lms-demo__page-header">
          <div>
            <h2>Assessment Complete</h2>
            <p>
              Your result from the generated assessment
            </p>
          </div>

          <span className="lms-demo__status">
            Completed
          </span>
        </div>

        <div className="lms-demo__assessment-result">
          <span>Your Score</span>

          <strong>{percentage}%</strong>

          <p>
            {assessmentScore} of{' '}
            {assessmentQuestions.length} answers correct.
          </p>

          <button
            className="lms-demo__assessment-button"
            onClick={resetAssessment}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="lms-demo__assessment">
      <div className="lms-demo__page-header">
        <div>
          <h2>AI Assessment</h2>
          <p>
            Workplace Communication · Course-grounded
          </p>
        </div>

        <span className="lms-demo__assessment-count">
          Question {assessmentIndex + 1} /{' '}
          {assessmentQuestions.length}
        </span>
      </div>

      <div className="lms-demo__question-card">
        <span className="lms-demo__section-label">
          Question {assessmentIndex + 1}
        </span>

        <h3>{currentQuestion.question}</h3>

        <div className="lms-demo__options">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              className={`lms-demo__option ${
                assessmentSelected === option
                  ? 'lms-demo__option--selected'
                  : ''
              }`}
              onClick={() =>
                setAssessmentSelected(option)
              }
            >
              <span>
                {String.fromCharCode(
                  65 +
                    currentQuestion.options.indexOf(option)
                )}
              </span>

              {option}
            </button>
          ))}
        </div>

        <button
          className="lms-demo__assessment-button"
          onClick={submitAssessmentAnswer}
          disabled={!assessmentSelected}
        >
          {assessmentIndex ===
          assessmentQuestions.length - 1
            ? 'Finish Assessment'
            : 'Next Question'}
        </button>
      </div>
    </div>
  );
}

      case 'progress':
  return (
    <div className="lms-demo__progress-page">
      <div className="lms-demo__page-header">
        <div>
          <h2>Progress</h2>
          <p>Your learning performance and activity</p>
        </div>

        <span className="lms-demo__status">
          Learning Overview
        </span>
      </div>

      <div className="lms-demo__progress-stats">
        <div>
          <span>Overall Completion</span>
          <strong>68%</strong>
        </div>

        <div>
          <span>Assessment Average</span>
          <strong>87%</strong>
        </div>

        <div>
          <span>AI Role-play Sessions</span>
          <strong>6</strong>
        </div>

        <div>
          <span>Learning Time</span>
          <strong>3h 20m</strong>
        </div>
      </div>

      <div className="lms-demo__progress-grid">
        <section className="lms-demo__progress-card">
          <span className="lms-demo__section-label">
            Course Progress
          </span>

          <div className="lms-demo__progress-course">
            <div>
              <strong>Workplace Communication</strong>
              <span>72% complete</span>
            </div>

            <b>72%</b>
          </div>

          <div className="lms-demo__progress-bar">
            <span style={{ width: '72%' }} />
          </div>

          <div className="lms-demo__progress-course">
            <div>
              <strong>Sales Excellence Program</strong>
              <span>58% complete</span>
            </div>

            <b>58%</b>
          </div>

          <div className="lms-demo__progress-bar">
            <span style={{ width: '58%' }} />
          </div>

          <div className="lms-demo__progress-course">
            <div>
              <strong>Professional Ethics</strong>
              <span>100% complete</span>
            </div>

            <b>100%</b>
          </div>

          <div className="lms-demo__progress-bar">
            <span style={{ width: '100%' }} />
          </div>
        </section>

        <section className="lms-demo__progress-card">
          <span className="lms-demo__section-label">
            Recent Activity
          </span>

          <div className="lms-demo__activity">
            <div>
              <span className="lms-demo__activity-dot" />
              <div>
                <strong>Assessment completed</strong>
                <span>Workplace Communication</span>
              </div>
              <small>10:20 AM</small>
            </div>

            <div>
              <span className="lms-demo__activity-dot" />
              <div>
                <strong>AI Role-play completed</strong>
                <span>Budget Objection Handling</span>
              </div>
              <small>09:45 AM</small>
            </div>

            <div>
              <span className="lms-demo__activity-dot" />
              <div>
                <strong>Course module completed</strong>
                <span>Workplace Communication · Module 3</span>
              </div>
              <small>Yesterday</small>
            </div>

            <div>
              <span className="lms-demo__activity-dot" />
              <div>
                <strong>Course started</strong>
                <span>Professional Ethics</span>
              </div>
              <small>2 days ago</small>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

      default:
        return null;
    }
  };

  return (
    <div className="lms-demo">
      <aside className="lms-demo__sidebar">
        <div className="lms-demo__brand">
          <img
            src="/logo.png"
            alt="Se-ah LMS"
            className="lms-demo__avatar"
          />

          <div>
            <strong>Se-ah LMS</strong>
            <span>AI-integrated learning</span>
          </div>
        </div>

        <div className="lms-demo__profile">
          <img
            src="/haroon-profile.jpeg"
            alt=""
            className="lms-demo__profile-avatar"
          />

          <div>
            <strong>Haroon Al Rashith A</strong>
            <span>Learner</span>
          </div>
        </div>

        <span className="lms-demo__nav-label">
          Learning
        </span>

        <nav className="lms-demo__nav">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              className={`lms-demo__nav-item ${
                activePage === item.id
                  ? 'lms-demo__nav-item--active'
                  : ''
              }`}
              onClick={() => setActivePage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="lms-demo__sidebar-footer">
          <span>Portfolio Demo</span>
          <strong>Stateless mode</strong>
        </div>
      </aside>

      <main className="lms-demo__content">
        {renderContent()}
      </main>
    </div>
  );
}