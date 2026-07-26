// ============================================================
// EDIT THIS FILE to update your entire site's content.
// Nothing else in the codebase needs to change for text/data edits.
// ============================================================

export const profile = {
  name: 'Dharun Kumar V',
  role: 'AI & Software Engineer',
  tagline: 'Building systems that tell real from fake.',
  location: 'Hosur, Tamil Nadu, India',
  email: 'Dharun18vk@gmail.com',
  phone: '+91-9488724284',
  linkedin: 'https://linkedin.com/in/dharun-kumar-v-bb402426a',
  github: 'https://github.com/dharun18vk',
  // Drop your photo file into /public and put its filename here, e.g. '/photo.jpg'
  photo: '/photo.jpg',
  summary:
    "Aspiring technology professional with strong proficiency in Python and Java, and a solid foundation in Data Structures, Algorithms, Software Development, and Problem Solving. Skilled in designing and developing efficient applications, analyzing data, and implementing innovative solutions using modern technologies and frameworks. Familiar with machine learning concepts, software engineering principles, and system design through academic projects and hands-on experience.",
}

export const skills = [
  { group: 'Programming Languages', items: ['Python', 'Java'] },
  { group: 'AI & Machine Learning', items: ['Model Training', 'Model Evaluation', 'CNNs', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'NumPy', 'Pandas', 'Data Preprocessing'] },
  { group: 'Web Technologies', items: ['React', 'HTML', 'CSS'] },
  { group: 'Databases', items: ['MongoDB', 'MySQL'] },
  { group: 'Tools & Platforms', items: ['Git', 'GitHub', 'Google Colab', 'VS Code', 'Cursor', 'Postman', 'Vercel'] },
  { group: 'Soft Skills', items: ['Problem Solving', 'Critical Thinking', 'Quick Learning', 'Analytical Thinking', 'Communication', 'Time Management'] },
]

export const experience = [
  {
    role: 'Web Developer Intern (React)',
    org: 'Sangam Soft Tech Solution',
    period: 'Aug 2024 — Sep 2024',
    points: [
      'Developed and deployed a full-stack MERN blog platform with JWT-based authentication and role-based access control.',
      'Designed RESTful APIs and optimized MongoDB queries to improve database response performance.',
      'Implemented dynamic frontend components using React and integrated backend services using Node.js and Express.',
      'Managed version control using Git and deployed the application on Vercel.',
    ],
  },
]

// Exactly 6 slots. Fill `active: true` entries with real projects;
// leave the rest as `active: false` placeholders you can fill in later.
export const projects = [
  {
    active: true,
    title: 'DeepFake Detection Application',
      github: "https://github.com/dharun18vk/DEEPFAKE-DETECTION",
    tag: 'Computer Vision',
    description:
      'CNN-based real-time video forgery detection system trained on CELEB-DF and FaceForensics++ datasets, reaching 85% validation accuracy after 10+ hours of training.',
    points: [
      'Built a CNN-based real-time video forgery detection system using CELEB-DF and FaceForensics++ datasets.',
      'Trained the models for 10+ hours, achieving 85% validation accuracy.',
      'Implemented frame extraction and preprocessing using OpenCV to enhance inference performance.',
    ],
    tools: ['Python', 'TensorFlow', 'OpenCV'],
    link: '',
  },
  {
    active: true,
    title: 'Modular AI Assistant',
      github: "https://github.com/dharun18vk/modular-ai-",
    tag: 'LLM Platform',
    description:
      'A purpose-specific LLM-based assistant platform letting users configure multiple domain-restricted AI agents with persistent storage.',
    points: [
      'Architected a purpose-specific LLM-based assistant platform enabling multiple domain-restricted AI agents.',
      'Implemented domain-restricted response logic to reduce irrelevant outputs and improve contextual accuracy.',
      'Designed modular backend architecture with persistent storage using MongoDB.',
    ],
    tools: ['Python', 'React', 'MongoDB'],
    link: '',
  },
  {
    active: true,
    title: 'Multi-Model Forgery Detection',
      github: "https://github.com/dharun18vk/Multi-model-forgery-detection",
    tag: 'Verification System',
    description:
      'A unified system combining deepfake detection, lip-sync analysis, metadata inspection, and semantic verification into one confidence score.',
    points: [
      'Developed a unified system combining deepfake detection, lip-sync analysis, metadata inspection, and semantic verification.',
      'Generated a multi-factor forgery confidence score with consolidated reporting.',
    ],
    tools: ['Python'],
    link: '',
  },
  {
    active: true,
    title: 'Student Consultation App',
    github: "https://github.com/dharun18vk/student-consultation-app",
    tag: 'Real-Time MERN',
    description:
      'A MERN-based real-time consultation platform using Socket.IO with low-latency messaging and secure sessions.',
    points: [
      'Built a MERN-based real-time consultation platform using Socket.IO.',
      'Achieved low communication latency and handled concurrent users using optimized MongoDB schema design.',
      'Implemented authentication and secure session management.',
    ],
    tools: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    link: '',
  },
{
  active: true,
  title: "Personal Portfolio Website",
  tag: "React.js",
  description: "Designed and developed a fully responsive personal portfolio website using React.js.",
  github: "https://github.com/dharun18vk/Dharun_portfolio_react",
  tools: ["React", "Vite", "Tailwind CSS"],
  points: [
    "Responsive design",
    "Modern UI with animations"
  ]
},
{
  active: true,
  title: "Dashboard Generator",
  tag: "React.js",
  description: "Dynamic dashboard generator with customizable widgets.",
  github: "https://github.com/dharun18vk/dashboard-generator-using-react",
  tools: ["React", "Chart.js", "Tailwind CSS"],
  points: [
    "Drag-and-drop widgets",
    "Responsive dashboard layout"
  ]
}
]

// Add as many entries as you like — school, +2/high school, college, etc.
export const education = [
  {
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    school: 'KGISL Institute of Technology',
    period: 'Nov 2022 — May 2026',
    detail: 'CGPA: 7.97 / 10',
  },
  {
    degree: 'Higher Secondary Education',
    school: 'Nalandha international public school(CBSE)',
    period: '2020 — 2022',
    detail: 'Percentage: 79%',
  },
  {
    degree: 'Secondary Education',
    school: 'Mathagondapalli model school(CBSE)',
    period: '2018 — 2020',
    detail: 'Percentage: 81%',
  },
]

export const achievements = [
  {
    title: 'Runner-Up — AITM Codefest 2024',
    detail: 'Modular AI Assistant Platform UI',
  },
  {
    title: 'Runner-Up — Amazon AWS DeepRacer Competition',
    detail: '2023',
  },
]
