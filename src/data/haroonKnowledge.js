// Shared public portfolio knowledge.
// This file is the single source of truth for the RAG demo
// and the Voice Agent demo.
//
// Keep public information accurate and recruiter-safe.
// Do not add private information, credentials, or sensitive data.

export const haroonKnowledge = {
  identity: {
    name: 'Haroon Al Rashith A',
    role: 'AI Engineer + Full-Stack Developer',
    graduation: 'June 2026',
  },

  education: {
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    status: 'Recently graduated in June 2026',
  },

  experience: [
    {
      company: 'Tetrax AI Labs',
      role: 'Part-time AI Engineer / Software Developer',
      duration: 'Approximately 2 years 8 months',
      context:
        'Worked part-time with Tetrax AI Labs during college, contributing to real-world client applications and AI/software product development.',
    },
    {
      company: 'Web Epic Technologies',
      role: 'Machine Learning Intern',
      duration: '1 month',
      context:
        'Worked on machine learning development and built a resume screening application using machine learning techniques.',
    },
  ],

  technicalProfile: {
    primaryProfile: 'AI Engineer + Full-Stack Developer',

    technologies: [
      'Python',
      'FastAPI',
      'React.js',
      'Node.js',
      'REST APIs',
      'PostgreSQL',
      'MongoDB',
      'AWS',
    ],

    areas: [
      'LLM technologies',
      'Generative AI',
      'Full-stack application development',
      'Backend and API development',
      'Database architecture',
      'AI integrations',
      'Application deployment',
      'Machine Learning',
    ],
  },

  projects: [
    {
      id: 'rag',
      name: 'Enterprise RAG Platform',

      description:
        'A full-stack RAG application for document-based knowledge retrieval and LLM-powered question answering.',

      capabilities: [
        'PDF support',
        'DOCX support',
        'SCORM support',
        'Semantic search',
        'LLM-powered question answering',
        'Backend APIs',
        'Vector-search pipeline',
        'Document processing',
        'AI-powered retrieval',
      ],

      stack: [
        'React',
        'Vite',
        'Python',
        'Flask',
        'text-embedding-3-small',
        'PostgreSQL',
        'pgvector',
        'GPT-4.1',
      ],

      workflow:
        'Users create a project, upload documents, assign token limits, generate a shareable chatbot link, and ask questions restricted to the uploaded content.',

      achievement:
        'The platform participated in the LearnX Awards in Australia and received two Gold Awards: Best Chatbot and AI Technology, for a Learning & Development project.',
    },

    {
      id: 'voice',
      name: 'AI Voice Agent',

      description:
        'A full-stack conversational AI system for inbound customer care and outbound cold calling.',

      capabilities: [
        'Inbound calls',
        'Outbound calls',
        'Voice interaction',
        'Speech-to-text',
        'LLM processing',
        'Text-to-speech',
        'Backend services',
        'Frontend interface',
        'APIs',
        'Conversational workflows',
        'Live transcripts',
        'Lead management',
      ],

      stack: [
        'React',
        'Python',
        'Twilio',
        'WebSockets',
        'Deepgram Nova-3',
        'GPT-4o mini',
        'Cartesia Sonic-3',
      ],

      performance:
        'The implemented streaming pipeline achieved sub-second response latency.',

      workflow:
        'Twilio handles telephony, WebSockets stream real-time audio and events, Deepgram Nova-3 performs speech-to-text, GPT-4o mini generates the response, and Cartesia Sonic-3 converts the response back into speech.',
    },

    {
      id: 'teaching-robot',
      name: 'AI Classroom Teaching Robot',

      description:
        'A robotics, AI and full-stack system designed to support classroom teaching, attendance and personalized learning assistance.',

      capabilities: [
        'Raspberry Pi',
        'Python',
        'RAG',
        'Computer vision',
        'Face recognition',
        'Object detection',
        'Voice interaction',
        'Automated attendance',
        'Personalized learning assistance',
        'Real-time knowledge retrieval',
        'Teacher dashboard',
        'Classroom management',
      ],

      attendance:
        'The system can automatically scan for attendance every hour using computer vision and face recognition, compare detected faces against registered student data, and record attendance without manual intervention.',

      attendanceOutput:
        'Attendance data can be exported as CSV for teachers to download.',

      teachingModes: [
        'General mode',
        'Teaching mode',
      ],

      generalMode:
        'General mode allows the robot to answer student questions more broadly.',

      teachingMode:
        'Teaching mode is a controlled teaching workflow where teachers configure session timing and breaks, provide a syllabus, and allow the robot to conduct classes and answer questions related to the supplied syllabus.',

      classroomMonitoring: [
        'Object detection',
        'Mobile-phone detection',
        'Cussing detection',
        'Selected classroom-behavior events',
      ],

      hardware: [
        'Raspberry Pi',
        'Camera',
        'Microphone',
        'Speaker',
        'Display',
        'Wheels',
      ],

      performance:
        'The implemented interaction pipeline achieved response latency below 1.5 seconds.',
    },

    {
      id: 'lms',
      name: 'AI-Integrated LMS',

      description:
        'A full-stack learning management application built over Moodle and extended with AI workflows.',

      foundation: 'Moodle LMS',

      capabilities: [
        'LMS functionality',
        'Course management',
        'AI tutoring',
        'AI role-play',
        'Course-grounded assessment generation',
        'RAG',
        'SCORM',
        'Personalization',
        'Generative AI',
        'Frontend and backend integration',
        'Voice-based learning interaction',
      ],

      rolePlay:
        'Administrators can create role-based AI simulations, such as a sales executive interacting with a customer, allowing learners to practice realistic scenarios.',

      assessment:
        'Administrators can create courses and generate assessments based on the course content using RAG.',

      integration:
        'The platform combines Moodle LMS functionality with RAG, LLM workflows and voice-agent capabilities.',
    },

    {
      id: 'resume-screening',
      name: 'Resume Screening ML Application',

      description:
        'A machine learning application developed during Haroon’s Machine Learning internship at Web Epic Technologies.',

      context:
        'Built as part of a one-month Machine Learning internship at Web Epic Technologies.',

      purpose:
        'Used machine learning techniques for resume screening.',
    },
  ],

  currentProjects: [
    {
      id: 'slm',
      name: 'Small Language Model',
      progress: '15%',
      description:
        'Building a small language model from scratch for specific domain applications such as law and healthcare.',
    },

    {
      id: 'agent-world',
      name: 'AI Agent World',
      progress: '15%',
      description:
        'Building a simulation world using Unreal Engine 5 where AI agents interact, make decisions, and operate inside a simulated environment.',
    },
  ],

  career: {
    targetRoles: [
      'AI Engineer',
      'AI Developer',
      'Generative AI Developer',
      'Junior AI/ML Engineer',
      'Python Developer',
      'Full-Stack Engineer',
      'Software Engineer',
    ],

    positioning: 'AI Engineer + Full-Stack Developer',

    summary:
      'Haroon builds AI functionality inside complete software applications, combining AI systems with backend services, interfaces, databases, APIs and deployment.',
  },
};

// Flattened knowledge entries used by the frontend demos.
// Both the RAG demo and Voice Agent should use this shared dataset.

export const haroonKnowledgeEntries = [
  {
    topic: 'identity',

    keywords: [
      'who is haroon',
      'who is haroon al rashith',
      'tell me about haroon',
      'about haroon',
      'introduce haroon',
      'who are you',
    ],

    answer:
      'Haroon Al Rashith A is an AI Engineer and Full-Stack Developer. He recently completed a B.Tech in Artificial Intelligence and Data Science and has hands-on experience building AI and software products.',

    source: 'Haroon Profile — Identity',
  },

  {
    topic: 'education',

    keywords: [
      'education',
      'degree',
      'btech',
      'b tech',
      'graduate',
      'graduated',
      'college',
      'study',
      'educational background',
    ],

    answer:
      'Haroon completed a B.Tech in Artificial Intelligence and Data Science and recently graduated in June 2026.',

    source: 'Haroon Profile — Education',
  },

  {
    topic: 'experience',

    keywords: [
      'experience',
      'work experience',
      'professional experience',
      'industry experience',
      'how much experience',
    ],

    answer:
      'Haroon has approximately 2 years and 8 months of part-time experience working with Tetrax AI Labs during college, contributing to real-world client applications and AI/software product development. He also completed a one-month Machine Learning internship at Web Epic Technologies.',

    source: 'Haroon Profile — Experience',
  },

  {
    topic: 'tetrax',

    keywords: [
      'tetrax',
      'tetrax ai labs',
      'experience at tetrax',
      'work at tetrax',
      'part time',
      'part-time',
      'tetrax experience',
    ],

    answer:
      'Haroon worked part-time with Tetrax AI Labs during college for approximately 2 years and 8 months as an AI Engineer and software developer, contributing to real-world client applications and AI/software product development.',

    source: 'Haroon Profile — Tetrax AI Labs',
  },

  {
    topic: 'web-epic',

    keywords: [
      'web epic',
      'web epic technologies',
      'machine learning intern',
      'ml internship',
      'ml intern',
      'internship',
      'resume screening',
      'resume screening application',
    ],

    answer:
      'Haroon completed a one-month Machine Learning internship at Web Epic Technologies, where he worked on machine learning development and built a resume screening application.',

    source: 'Haroon Profile — Web Epic Technologies',
  },

  {
    topic: 'technical-profile',

    keywords: [
      'skills',
      'technical skills',
      'tech stack',
      'technologies',
      'what technologies',
      'python',
      'react',
      'fastapi',
      'node',
      'nodejs',
      'aws',
      'postgresql',
      'mongodb',
      'machine learning',
      'llm',
    ],

    answer:
      'Haroon’s strongest profile is AI Engineer plus Full-Stack Developer. His experience includes Python, FastAPI, React.js, Node.js, REST APIs, PostgreSQL, MongoDB, AWS, LLM technologies, Generative AI, Machine Learning, backend and API development, database architecture, AI integrations, full-stack applications and deployment.',

    source: 'Haroon Profile — Technical Profile',
  },

  {
    topic: 'overall-profile',

    keywords: [
      'overall profile',
      'strongest profile',
      'what kind of developer',
      'what does haroon build',
      'full stack ai',
      'ai full stack',
      'what makes haroon different',
      'tell me about his profile',
    ],

    answer:
      'Haroon’s strongest profile is AI Engineer plus Full-Stack Developer. A recurring theme across his work is taking AI functionality and integrating it into complete applications with backends, APIs, interfaces, databases and deployment rather than building models in isolation.',

    source: 'Haroon Profile — Overall Profile',
  },

  {
    topic: 'rag',

    keywords: [
      'rag',
      'rag platform',
      'enterprise rag',
      'enterprise rag platform',
      'retrieval',
      'vector search',
      'knowledge base',
      'document chatbot',
      'embedding',
      'embeddings',
      'pgvector',
      'semantic search',
    ],

    answer:
      'Haroon built an Enterprise RAG Platform supporting document processing, semantic search, vector retrieval and LLM-powered question answering. The system supports PDF, DOCX and SCORM content. The portfolio project uses React, Vite, Python, Flask, text-embedding-3-small, PostgreSQL with pgvector and GPT-4.1.',

    source: 'Haroon Profile — Enterprise RAG Platform',
  },

  {
    topic: 'rag-workflow',

    keywords: [
      'how does the rag work',
      'rag architecture',
      'rag workflow',
      'how rag works',
      'document retrieval',
      'vector database',
      'pgvector workflow',
    ],

    answer:
      'The RAG platform lets users create a project, upload documents, assign token limits and generate a shareable chatbot link. Uploaded content is processed and embedded, vectors are stored in PostgreSQL with pgvector, relevant content is retrieved for a question, and GPT-4.1 generates a grounded answer from the retrieved content.',

    source: 'Haroon Profile — RAG Platform Architecture',
  },

  {
    topic: 'rag-awards',

    keywords: [
      'rag award',
      'learnx',
      'learnx awards',
      'gold award',
      'gold awards',
      'best chatbot',
      'ai technology award',
      'australia award',
      'award',
      'awards',
    ],

    answer:
      'The Enterprise RAG Platform participated in the LearnX Awards in Australia and received two Gold Awards: Best Chatbot and AI Technology, for a Learning & Development project.',

    source: 'Haroon Profile — Enterprise RAG Platform Awards',
  },

  {
    topic: 'voice-agent',

    keywords: [
      'voice agent',
      'voice ai',
      'voice application',
      'calling',
      'cold calling',
      'customer care',
      'customer service',
      'twilio',
      'deepgram',
      'cartesia',
      'gpt 4o mini',
      'gpt-4o mini',
    ],

    answer:
      'Haroon built a full-stack AI Voice Agent for inbound customer care and outbound cold calling. It uses Twilio for telephony, WebSockets for real-time streaming, Deepgram Nova-3 for speech-to-text, GPT-4o mini for the LLM, and Cartesia Sonic-3 for text-to-speech.',

    source: 'Haroon Profile — AI Voice Agent',
  },

  {
    topic: 'voice-performance',

    keywords: [
      'voice latency',
      'latency',
      'response speed',
      'sub second',
      'sub-second',
      'less than one second',
      'one second',
      'streaming latency',
    ],

    answer:
      'The implemented streaming pipeline of the AI Voice Agent achieved sub-second response latency.',

    source: 'Haroon Profile — AI Voice Agent Performance',
  },

  {
    topic: 'voice-capabilities',

    keywords: [
      'incoming calls',
      'outgoing calls',
      'inbound calls',
      'outbound calls',
      'live transcript',
      'leads',
      'admin panel',
      'call monitoring',
    ],

    answer:
      'The AI Voice Agent supports both inbound and outbound calls and includes an admin interface for leads, live transcripts, call information and monitoring.',

    source: 'Haroon Profile — AI Voice Agent Capabilities',
  },

  {
    topic: 'teaching-robot',

    keywords: [
      'teaching robot',
      'classroom robot',
      'robot',
      'attendance',
      'face recognition',
      'computer vision',
      'object detection',
      'raspberry pi',
      'robotics',
    ],

    answer:
      'Haroon built an AI Classroom Teaching Robot using Raspberry Pi, Python, RAG, computer vision, face recognition, object detection and voice interaction. It supports automated attendance, personalized learning assistance, real-time knowledge retrieval and teacher/classroom workflows.',

    source: 'Haroon Profile — AI Classroom Teaching Robot',
  },

  {
    topic: 'attendance',

    keywords: [
      'automatic attendance',
      'automated attendance',
      'hourly attendance',
      'attendance every hour',
      'face attendance',
      'how attendance works',
      'attendance system',
    ],

    answer:
      'The Teaching Robot can automatically scan the classroom every hour using computer vision and face recognition. Detected faces are compared against registered student data, and matching students are marked present without manual intervention. Attendance can then be exported as CSV for teachers.',

    source: 'Haroon Profile — AI Classroom Teaching Robot Attendance',
  },

  {
    topic: 'teaching-modes',

    keywords: [
      'teaching mode',
      'general mode',
      'general ai mode',
      'syllabus',
      'class session',
      'class timing',
      'class break',
      'robot teaches',
      'how does teaching mode work',
    ],

    answer:
      'The Teaching Robot has two main AI interaction modes. General mode handles student questions, while Teaching Mode is a controlled teaching workflow where teachers configure session timing and breaks and provide a syllabus. The robot conducts the class and answers questions related to the supplied syllabus.',

    source: 'Haroon Profile — AI Classroom Teaching Robot Modes',
  },

  {
    topic: 'classroom-monitoring',

    keywords: [
      'classroom monitoring',
      'mobile phone detection',
      'mobile detection',
      'cussing',
      'misbehavior',
      'misbehaviour',
      'classroom behavior',
      'classroom events',
      'student behavior',
    ],

    answer:
      'The Teaching Robot can detect selected classroom events, including object-related events, mobile-phone use, cussing and other predefined classroom-behavior events supported by the system.',

    source: 'Haroon Profile — AI Classroom Teaching Robot Monitoring',
  },

  {
    topic: 'robot-performance',

    keywords: [
      'robot latency',
      'teaching robot latency',
      'robot response speed',
      '1.5 seconds',
      'less than 1.5',
    ],

    answer:
      'The implemented interaction pipeline of the Teaching Robot achieved response latency below 1.5 seconds.',

    source: 'Haroon Profile — AI Classroom Teaching Robot Performance',
  },

  {
    topic: 'lms',

    keywords: [
      'lms',
      'learning management',
      'learning management system',
      'moodle',
      'ai lms',
      'ai integrated lms',
      'course',
      'scorm',
    ],

    answer:
      'Haroon worked on an AI-Integrated LMS built over Moodle. It combines standard LMS functionality with AI role-play, course-grounded assessment generation using RAG, AI tutoring, SCORM support, personalization and voice-based learning interactions.',

    source: 'Haroon Profile — AI-Integrated LMS',
  },

  {
    topic: 'role-play',

    keywords: [
      'role play',
      'roleplay',
      'simulation',
      'role simulation',
      'sales executive',
      'customer',
      'ai role',
      'practice scenario',
    ],

    answer:
      'The LMS includes AI role-play where administrators can assign roles and create scenarios, such as a sales executive interacting with a customer, allowing learners to practice realistic conversations.',

    source: 'Haroon Profile — AI-Integrated LMS Role-play',
  },

  {
    topic: 'assessment',

    keywords: [
      'assessment generation',
      'generate assessment',
      'ai assessment',
      'course assessment',
      'rag assessment',
      'quiz generation',
    ],

    answer:
      'Administrators can create courses and generate assessments based on course content using RAG, allowing the generated assessment to stay grounded in the learning material.',

    source: 'Haroon Profile — AI-Integrated LMS Assessment',
  },

  {
    topic: 'current-work',

    keywords: [
      'currently building',
      'current projects',
      'current work',
      'slm',
      'small language model',
      'agent world',
      'ai agent world',
      'unreal engine',
      'ue5',
    ],

    answer:
      'Haroon is currently working on two early-stage projects. One is a Small Language Model being built from scratch for specific domains such as law and healthcare. The other is an AI Agent World simulation being built with Unreal Engine 5.',

    source: 'Haroon Profile — Current Projects',
  },

  {
    topic: 'slm',

    keywords: [
      'small language model',
      'slm',
      'language model from scratch',
      'build a language model',
      'domain specific model',
      'law model',
      'healthcare model',
    ],

    answer:
      'Haroon is currently building a Small Language Model from scratch for specific domain applications such as law and healthcare. The project is currently at an early development stage.',

    source: 'Haroon Profile — Small Language Model',
  },

  {
    topic: 'agent-world',

    keywords: [
      'agent world',
      'ai agent world',
      'simulation world',
      'unreal',
      'unreal engine 5',
      'ue5 simulation',
      'ai agents simulation',
    ],

    answer:
      'Haroon is currently building an AI Agent World using Unreal Engine 5. The goal is to create a simulated environment where AI agents interact, make decisions and operate within the world.',

    source: 'Haroon Profile — AI Agent World',
  },

  {
    topic: 'career',

    keywords: [
      'job',
      'hire',
      'hiring',
      'looking for',
      'career',
      'career goals',
      'roles',
      'opportunities',
      'position',
      'what job is haroon looking for',
    ],

    answer:
      'Haroon is looking for opportunities in AI engineering, AI development, Generative AI, junior AI/ML engineering, Python development, full-stack engineering and software engineering.',

    source: 'Haroon Profile — Career',
  },

  {
    topic: 'job-fit',

    keywords: [
      'why hire haroon',
      'why should we hire haroon',
      'why haroon',
      'suitable for',
      'job fit',
      'what can haroon do',
      'strengths',
    ],

    answer:
      'Haroon’s strongest combination is AI engineering and full-stack development. He has hands-on experience building complete AI applications, including RAG systems, voice AI, computer-vision and robotics workflows, and AI-integrated learning platforms, along with conventional Python and machine learning development experience.',

    source: 'Haroon Profile — Professional Strengths',
  },

  {
    topic: 'resume-screening',

    keywords: [
      'resume screening',
      'resume screener',
      'screening application',
      'machine learning application',
      'web epic project',
      'internship project',
    ],

    answer:
      'During his one-month Machine Learning internship at Web Epic Technologies, Haroon built a resume screening application using machine learning techniques.',

    source: 'Haroon Profile — Web Epic Technologies',
  },
];

export const haroonFallback =
  "I can answer questions about Haroon, including his education, experience, technical background, projects, Tetrax AI Labs work, Machine Learning internship, current projects and career interests.";