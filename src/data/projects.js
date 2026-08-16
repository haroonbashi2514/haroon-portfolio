// Central project metadata. Each project maps to a demo component under src/demos/.
// Tags are kept factual — technologies actually used in the real systems.

export const projects = [
  {
    id: 'rag',
    number: '01',
    title: 'RAG Platform',

    description:
      'A document-based knowledge platform where users create a project, upload documents, set token limits, generate a shareable chatbot link, and ask questions grounded only in the uploaded content.',

    tags: [
      'React',
      'Vite',
      'Python',
      'Flask',
      'text-embedding-3-small',
      'PostgreSQL',
      'pgvector',
      'GPT-4.1',
      'RAG',
    ],

    built:
      'Built a document-based RAG platform that allows users to create isolated projects, upload documents, configure token limits, and generate a chatbot link restricted to that project’s knowledge base.',

    how:
      'The system processes uploaded documents, splits them into smaller chunks, generates embeddings using OpenAI text-embedding-3-small, stores the vectors in PostgreSQL with pgvector, retrieves relevant content for each question, and uses GPT-4.1 to generate a grounded response.',

    architecture: [
      'Document Upload',
      'Chunking',
      'Embeddings',
      'PostgreSQL + pgvector',
      'Semantic Retrieval',
      'GPT-4.1',
      'Grounded Answer',
  ],

  demo: 'rag',

  github: 'https://github.com/haroonbashi2514/enterprise-rag-platform',
},
  {
    id: 'voice',
    number: '02',
    title: 'AI Voice Agent',

    description:
      'A real-time voice agent for inbound customer care and outbound cold calling, with an admin panel for leads, live transcripts, call information, and call monitoring.',

    tags: [
      'React',
      'Python',
      'Twilio',
      'WebSockets',
      'Deepgram Nova-3',
      'GPT-4o mini',
      'Cartesia Sonic-3',
    ],

    built:
      'Built a bidirectional voice agent that handles both incoming and outgoing calls, with an admin interface for managing leads and monitoring active calls and live transcripts.',

    how:
      'Twilio handles inbound and outbound telephony while WebSockets stream audio and real-time events. Deepgram Nova-3 handles speech-to-text, GPT-4o mini generates responses, and Cartesia Sonic-3 converts them back to speech. Responses are streamed through the pipeline to achieve sub-second response latency in the implemented system.',

    architecture: [
      'Twilio',
      'WebSocket Streaming',
      'Deepgram Nova-3',
      'GPT-4o mini',
      'Cartesia Sonic-3',
      'Live Transcript',
      'Admin Panel',
    ],

    highlights: [
      'Inbound + Outbound Calls',
      '<1s Response Latency',
      'Real-time Streaming',
    ],

    demo: 'voice',

    github: 'https://github.com/haroonbashi2514/ai-voice-agent',
},
  {
    id: 'teaching-robot',
    number: '03',
    title: 'AI Teaching Robot',

    description:
      'A classroom-assistance system that automates attendance, conducts AI-assisted teaching sessions, answers student questions, and monitors selected classroom events.',

    tags: [
      'Python',
      'Computer Vision',
      'Face Recognition',
      'Object Detection',
      'LLM',
      'React',
      'CSV',
    ],

    built:
      'Built the software layer for an interactive teaching robot with autonomous attendance, two AI interaction modes, syllabus-based teaching, classroom event detection, and a teacher-facing interface.',

    how:
      'Computer vision detects and recognizes student faces against registered data and automatically scans the classroom every hour. Attendance is recorded and exported as CSV for teachers. The robot supports a general Q&A mode and a controlled teaching mode where teachers define session timings, breaks, and syllabus content. Teaching mode restricts responses to the uploaded syllabus while still handling relevant student questions.',

    architecture: [
      'Camera',
      'Face Detection',
      'Face Recognition',
      'Attendance Engine',
      'CSV Export',
      'General Mode',
      'Teaching Mode',
      'Syllabus Context',
      'Object Detection',
      'Classroom Monitoring',
    ],

    highlights: [
      'Automatic Hourly Attendance',
      '<1.5s Response Latency',
      'Syllabus-Based Teaching',
      'Classroom Event Detection',
    ],

    demo: 'teaching-robot',

    github: 'https://github.com/haroonbashi2514/AI-Teaching-Robot',
},
  {
  id: 'lms',
  number: '04',
  title: 'AI-integrated LMS',

  description:
    'A Moodle-based learning platform extended with AI workflows for role-play, course-grounded assessment generation, and voice-based learning interactions.',

  tags: [
    'Moodle',
    'RAG',
    'LLM',
    'Voice Agent',
    'AI Role-play',
  ],

  built:
    'Extended Moodle with AI capabilities that allow administrators to create courses, generate assessments from course content, and configure role-based AI simulations for learners.',

  how:
    'Administrators create courses and assign role-play scenarios such as sales executive versus customer. Course content is used as context for RAG-based assessment generation, while the integrated voice agent enables conversational role-play and practice within the learning workflow.',

  architecture: [
    'Moodle LMS',
    'Course Content',
    'RAG',
    'Assessment Generation',
    'AI Role-play',
    'Voice Agent',
    'LLM',
  ],

  highlights: [
    'Moodle-based LMS',
    'AI Role-play',
    'Course-grounded Assessments',
    'Voice-based Learning',
  ],

  demo: 'lms',

  github: 'https://github.com/haroonbashi2514/ai-integrated-LMS',
},
];

export const currentlyBuilding = [
  {
    id: 'slm',
    name: 'Small Language Model',
    status: '15% — In development',
    progress: 15,
    description:
      'Building a small language model from scratch for domain-specific applications such as law and healthcare. Early-stage research and training architecture work.',
    milestones: [
      { label: 'Tokenizer', done: true },
      { label: 'Dataset Pipeline', done: true },
      { label: 'Training Architecture', done: false },
      { label: 'Pretraining', done: false },
      { label: 'Evaluation', done: false },
      { label: 'Domain Adaptation', done: false },
      { label: 'Deployment', done: false },
    ],
  },
  {
    id: 'agent-world',
    name: 'AI Agent World',
    status: '21% — In development',
    progress: 21,
    description:
      'A simulation world built with Unreal Engine 5 where AI agents interact, make decisions, and operate inside a simulated environment. Experimental and actively being explored.',
    milestones: [
      { label: 'World Setup', done: true },
      { label: 'Agent Framework', done: false },
      { label: 'Decision Logic', done: false },
      { label: 'Interaction System', done: false },
      { label: 'Statistics', done: false },
    ],
  },
];

export const experience = [
  {
    org: 'Tetrax AI Labs',
    role: 'AI Developer Intern',
    period: 'June 2025 - June 2026',
    desc:
      'Worked as an AI Developer Intern during my studies on AI engineering and full-stack product development. Built and shipped AI-powered applications across RAG, conversational AI, voice systems, and learning platforms, working from implementation through deployment.',
  },
  {
    org: 'Web Epic Technologies',
    role: 'Machine Learning Intern',
    period: 'May 2025 - June 2025',
    desc:
      'Completed a 1-month machine learning internship and built a resume screening application using machine learning to analyze and classify candidate resumes.',
  },
];

export const profile = {
  name: 'Haroon Al Rashith',
  role: 'AI Engineer • Python Developer • Gen AI Developer • AI/ML Developer',
  email: 'haroonbashi2514@example.com',
  linkedin: 'https://www.linkedin.com/in/haroon-bashi',
  github: 'https://github.com/haroonbashi2514',
  phone: '+91 94862 52626',
};
