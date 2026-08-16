import { useEffect, useRef, useState } from 'react';

const navigationItems = [
  { id: 'camera', label: 'Live Camera' },
  { id: 'attendance', label: 'Attendance' },
  { id: 'syllabus', label: 'Syllabus & AI' },
  { id: 'classroom', label: 'Classroom Brain' },
  { id: 'behavior', label: 'Behavior' },
];

export default function TeachingRobotDemo() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [cameraState, setCameraState] = useState('idle');
  const [activePage, setActivePage] = useState('camera');
  const [teachingMode, setTeachingMode] = useState(false);

  const startCamera = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraState('denied');
      return;
    }

    try {
      setCameraState('requesting');

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      streamRef.current = stream;
      setCameraState('active');
    } catch (error) {
      console.error('Camera permission error:', error);
      setCameraState('denied');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop();
      });

      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setCameraState('idle');
  };

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  useEffect(() => {
    if (
      cameraState === 'active' &&
      videoRef.current &&
      streamRef.current
    ) {
      videoRef.current.srcObject = streamRef.current;

      videoRef.current.play().catch((error) => {
        console.error('Video playback error:', error);
      });
    }
  }, [cameraState]);

  const renderCamera = () => {
    return (
      <>
        <div className="zoro-demo__page-header">
          <div>
            <h3>Live Camera</h3>
            <p>Real-time classroom vision preview</p>
          </div>

          <div className="zoro-demo__page-actions">
            {cameraState === 'active' && (
              <button
                className="zoro-demo__small-button"
                onClick={stopCamera}
              >
                Stop Camera
              </button>
            )}
          </div>
        </div>

        <div className="zoro-demo__camera">
          {cameraState === 'active' ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="zoro-demo__video"
            />
          ) : (
            <div className="zoro-demo__camera-empty">
              <div className="zoro-demo__camera-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 10l4.5-3v10L15 14" />
                  <rect
                    x="3"
                    y="6"
                    width="12"
                    height="12"
                    rx="2"
                  />
                </svg>
              </div>

              <p className="zoro-demo__camera-title">
                Live Camera
              </p>

              <p className="zoro-demo__camera-text">
                Allow camera access to preview the classroom vision system.
              </p>

              <button
                className="zoro-demo__primary-button"
                onClick={startCamera}
                disabled={cameraState === 'requesting'}
              >
                {cameraState === 'requesting'
                  ? 'Requesting...'
                  : 'Enable Camera'}
              </button>

              {cameraState === 'denied' && (
                <p className="zoro-demo__camera-error">
                  Camera access was unavailable.
                </p>
              )}
            </div>
          )}

          {cameraState === 'active' && (
            <div className="zoro-demo__camera-overlay">
              <div className="zoro-demo__live-indicator">
                <span />
                LIVE
              </div>

              <div className="zoro-demo__face-status">
                <span>Face Match</span>
                <strong>✕ Not Matched</strong>
              </div>
            </div>
          )}
        </div>

        <div className="zoro-demo__status-row">
          <div>
            <span>Camera</span>
            <strong>
              {cameraState === 'active' ? 'Active' : 'Inactive'}
            </strong>
          </div>

          <div>
            <span>Face Recognition</span>
            <strong>Demo Mode</strong>
          </div>

          <div>
            <span>Vision</span>
            <strong>
              {cameraState === 'active' ? 'Monitoring' : 'Standby'}
            </strong>
          </div>
        </div>
      </>
    );
  };

  const renderPlaceholder = (title, description) => {
    return (
      <div className="zoro-demo__placeholder">
        <span className="zoro-demo__placeholder-label">
          Portfolio Demo
        </span>

        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    );
  };

  const renderContent = () => {
    switch (activePage) {
      case 'camera':
        return renderCamera();

      case 'attendance':
  return (
    <div className="zoro-demo__attendance">
      <div className="zoro-demo__page-header">
        <div>
          <h3>Attendance</h3>
          <p>Automatic classroom attendance</p>
        </div>

        <div className="zoro-demo__attendance-time">
          Last scan · 10:00 AM
        </div>
      </div>

      <div className="zoro-demo__attendance-summary">
        <div>
          <span>Present</span>
          <strong>28</strong>
        </div>

        <div>
          <span>Absent</span>
          <strong>4</strong>
        </div>

        <div>
          <span>Total</span>
          <strong>32</strong>
        </div>
      </div>

      <div className="zoro-demo__attendance-table">
        <div className="zoro-demo__attendance-row zoro-demo__attendance-row--head">
          <span>Student</span>
          <span>Status</span>
          <span>Time</span>
        </div>

        {[
  ['Rahul', 'Present', '10:00 AM'],
  ['Aisha', 'Present', '10:00 AM'],
  ['Karthik', 'Absent', '—'],
  ['Harish', 'Present', '10:00 AM'],
  ['Meera', 'Present', '10:00 AM'],
  ['Arjun', 'Present', '10:00 AM'],
  ['Nisha', 'Present', '10:00 AM'],
  ['Vishal', 'Absent', '—'],
  ['Sneha', 'Present', '10:00 AM'],
  ['Adithya', 'Present', '10:00 AM'],
  ['Divya', 'Present', '10:00 AM'],
  ['Rohan', 'Present', '10:00 AM'],
  ['Ananya', 'Present', '10:00 AM'],
  ['Kiran', 'Absent', '—'],
  ['Sanjay', 'Present', '10:00 AM'],
  ['Pooja', 'Present', '10:00 AM'],
  ['Naveen', 'Present', '10:00 AM'],
  ['Priya', 'Present', '10:00 AM'],
  ['Ajay', 'Present', '10:00 AM'],
  ['Keerthi', 'Present', '10:00 AM'],
  ['Manoj', 'Absent', '—'],
  ['Sowmya', 'Present', '10:00 AM'],
  ['Varun', 'Present', '10:00 AM'],
  ['Lavanya', 'Present', '10:00 AM'],
  ['Rahul K', 'Present', '10:00 AM'],
  ['Deepak', 'Present', '10:00 AM'],
  ['Harini', 'Absent', '—'],
  ['Akash', 'Present', '10:00 AM'],
  ['Reshma', 'Present', '10:00 AM'],
  ['Surya', 'Present', '10:00 AM'],
  ['Divya S', 'Present', '10:00 AM'],
  ['Mohan', 'Present', '10:00 AM'],
].map(([name, status, time]) => (
          <div
            key={name}
            className="zoro-demo__attendance-row"
          >
            <span>{name}</span>

            <span
              className={
                status === 'Present'
                  ? 'zoro-demo__attendance-present'
                  : 'zoro-demo__attendance-absent'
              }
            >
              {status}
            </span>

            <span>{time}</span>
          </div>
        ))}
      </div>
    </div>
  );

      case 'syllabus':
  return (
    <div className="zoro-demo__syllabus">
      <div className="zoro-demo__page-header">
        <div>
          <h3>Syllabus & AI</h3>
          <p>Configure the robot's classroom interaction mode</p>
        </div>
      </div>

      <div className="zoro-demo__mode-card">
        <div>
          <span className="zoro-demo__section-label">Interaction Mode</span>

          <div className="zoro-demo__mode-toggle">
            <button
              className={!teachingMode ? 'active' : ''}
              onClick={() => setTeachingMode(false)}
            >
              General
            </button>

            <button
              className={teachingMode ? 'active' : ''}
              onClick={() => setTeachingMode(true)}
            >
              Teaching
            </button>
          </div>
        </div>

        <div className="zoro-demo__mode-status">
          <span />
          {teachingMode ? 'Teaching Mode Active' : 'General Mode Active'}
        </div>
      </div>

      <div className="zoro-demo__syllabus-grid">
        <div className="zoro-demo__syllabus-card">
          <span className="zoro-demo__section-label">
            {teachingMode ? 'Teaching Session' : 'General Mode'}
          </span>

          {teachingMode ? (
            <>
              <div className="zoro-demo__field">
                <span>Session</span>
                <strong>Python Fundamentals</strong>
              </div>

              <div className="zoro-demo__field">
                <span>Duration</span>
                <strong>45 min</strong>
              </div>

              <div className="zoro-demo__field">
                <span>Break</span>
                <strong>5 min</strong>
              </div>
            </>
          ) : (
            <p className="zoro-demo__mode-description">
              General mode allows the robot to respond to student
              questions without restricting the interaction to a
              specific lesson.
            </p>
          )}
        </div>

        <div className="zoro-demo__syllabus-card">
          <span className="zoro-demo__section-label">
            Syllabus
          </span>

          {teachingMode ? (
            <div className="zoro-demo__syllabus-list">
              <span>Python Fundamentals</span>
              <span>Variables & Data Types</span>
              <span>Functions</span>
              <span>Loops</span>
              <span>Object-Oriented Programming</span>
            </div>
          ) : (
            <p className="zoro-demo__mode-description">
              No syllabus restriction is active in General Mode.
            </p>
          )}
        </div>
      </div>
    </div>
  );

      case 'classroom':
  return (
    <div className="zoro-demo__classroom">
      <div className="zoro-demo__page-header">
        <div>
          <h3>Classroom Brain</h3>
          <p>Classroom awareness and monitoring</p>
        </div>

        <div className="zoro-demo__mode-status">
          <span />
          Monitoring
        </div>
      </div>

      <div className="zoro-demo__classroom-summary">
        <div>
          <span>Mode</span>
          <strong>Teaching</strong>
        </div>

        <div>
          <span>Students</span>
          <strong>32</strong>
        </div>

        <div>
          <span>Present</span>
          <strong>28</strong>
        </div>

        <div>
          <span>Session</span>
          <strong>Python Basics</strong>
        </div>
      </div>

      <div className="zoro-demo__classroom-grid">
        <div className="zoro-demo__classroom-card">
          <span className="zoro-demo__section-label">
            Detection Systems
          </span>

          <div className="zoro-demo__detection-row">
            <span>Object Detection</span>
            <strong>Active</strong>
          </div>

          <div className="zoro-demo__detection-row">
            <span>Mobile Detection</span>
            <strong>Active</strong>
          </div>

          <div className="zoro-demo__detection-row">
            <span>Face Recognition</span>
            <strong>Active</strong>
          </div>

          <div className="zoro-demo__detection-row">
            <span>Behavior Monitoring</span>
            <strong>Active</strong>
          </div>
        </div>

        <div className="zoro-demo__classroom-card">
          <span className="zoro-demo__section-label">
            Classroom Events
          </span>

          <div className="zoro-demo__event">
            <span className="zoro-demo__event-dot" />
            Student detected
            <small>10:02 AM</small>
          </div>

          <div className="zoro-demo__event">
            <span className="zoro-demo__event-dot zoro-demo__event-dot--warning" />
            Mobile phone detected
            <small>10:04 AM</small>
          </div>

          <div className="zoro-demo__event">
            <span className="zoro-demo__event-dot" />
            Attendance scan completed
            <small>10:00 AM</small>
          </div>

          <div className="zoro-demo__event">
            <span className="zoro-demo__event-dot" />
            No intervention required
            <small>10:05 AM</small>
          </div>
        </div>
      </div>
    </div>
  );

      case 'behavior':
  return (
    <div className="zoro-demo__behavior">
      <div className="zoro-demo__page-header">
        <div>
          <h3>Behavior</h3>
          <p>Selected classroom behavior monitoring</p>
        </div>

        <div className="zoro-demo__mode-status">
          <span />
          Monitoring
        </div>
      </div>

      <div className="zoro-demo__behavior-summary">
        <div>
          <span>Events Today</span>
          <strong>7</strong>
        </div>

        <div>
          <span>Warnings</span>
          <strong>2</strong>
        </div>

        <div>
          <span>Interventions</span>
          <strong>1</strong>
        </div>

        <div>
          <span>Status</span>
          <strong>Normal</strong>
        </div>
      </div>

      <div className="zoro-demo__behavior-card">
        <span className="zoro-demo__section-label">
          Recent Events
        </span>

        <div className="zoro-demo__behavior-row">
          <div className="zoro-demo__behavior-indicator zoro-demo__behavior-indicator--warning" />

          <div>
            <strong>Mobile phone detected</strong>
            <span>Student #18 · 10:04 AM</span>
          </div>

          <small>Warning</small>
        </div>

        <div className="zoro-demo__behavior-row">
          <div className="zoro-demo__behavior-indicator zoro-demo__behavior-indicator--warning" />

          <div>
            <strong>Cussing detected</strong>
            <span>Student #07 · 09:48 AM</span>
          </div>

          <small>Warning</small>
        </div>

        <div className="zoro-demo__behavior-row">
          <div className="zoro-demo__behavior-indicator" />

          <div>
            <strong>Object detected</strong>
            <span>Classroom · 09:42 AM</span>
          </div>

          <small>Recorded</small>
        </div>

        <div className="zoro-demo__behavior-row">
          <div className="zoro-demo__behavior-indicator" />

          <div>
            <strong>Classroom scan completed</strong>
            <span>32 students · 09:00 AM</span>
          </div>

          <small>Recorded</small>
        </div>

        <div className="zoro-demo__behavior-row">
          <div className="zoro-demo__behavior-indicator" />

          <div>
            <strong>No intervention required</strong>
            <span>Classroom · 08:55 AM</span>
          </div>

          <small>Normal</small>
        </div>
      </div>
    </div>
  );

      default:
        return renderCamera();
    }
  };

  return (
    <div className="zoro-demo">
      <aside className="zoro-demo__sidebar">
        <div className="zoro-demo__brand">
          <img
    src={`${import.meta.env.BASE_URL}logo.png`}
    alt="ZORO"
    className="zoro-demo__brand-photo"
  />

          <div>
            <strong>ZORO</strong>
            <span>2026 · Classroom AI</span>
          </div>
        </div>

        <div className="zoro-demo__connection">
          <span className="zoro-demo__connection-dot" />
          <strong>
            {cameraState === 'active' ? 'DEMO ACTIVE' : 'DEMO MODE'}
          </strong>
        </div>

        <div className="zoro-demo__nav-label">
          Navigation
        </div>

        <nav className="zoro-demo__nav">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              className={`zoro-demo__nav-item ${
                activePage === item.id
                  ? 'zoro-demo__nav-item--active'
                  : ''
              }`}
              onClick={() => setActivePage(item.id)}
            >
              <span className="zoro-demo__nav-icon">
                {item.id === 'camera' && '◉'}
                {item.id === 'attendance' && '♧'}
                {item.id === 'syllabus' && '□'}
                {item.id === 'classroom' && '⌁'}
                {item.id === 'behavior' && '◌'}
              </span>

              {item.label}
            </button>
          ))}
        </nav>

        <div className="zoro-demo__side-section">
          <span className="zoro-demo__nav-label">
            Voice Agent
          </span>

          <div className="zoro-demo__voice-status">
            <span />
            Voice Idle
          </div>
        </div>

        <div className="zoro-demo__side-section">
          <span className="zoro-demo__nav-label">
            System
          </span>

          <div className="zoro-demo__system-item">
            Configuration
          </div>
        </div>
      </aside>

      <main className="zoro-demo__content">
        {renderContent()}
      </main>
    </div>
  );
}