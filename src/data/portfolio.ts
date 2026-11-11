/** Resume-backed content for Dhasarathan Thangaraj's portfolio. */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Dhasarathan Thangaraj',
  displayName: 'Dhasarathan Thangaraj',
  firstName: 'DHASARATHAN',
  seriesTag: 'FULL STACK DEVELOPER',
  originalLabel: 'DHASARATHAN THANGARAJ',
  role: 'Full Stack Developer',
  tagline: ['Full Stack Developer', 'Advanced RAG', 'Backend Engineering'],
  intro:
    'Full Stack Developer with 3 years of experience building scalable web applications with Node.js, Express, React, Python and Django. Focused on reliable APIs, practical AI integrations, and maintainable delivery from database design through deployment.',
  location: 'Madurai, Tamil Nadu',
  email: 'dhasarathanthangaraj@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/dhasarathant/',
    github: 'https://github.com/dhas97',
  },
  resumePdf: '/assets/Dhasarathan_full_stack_.pdf',
  resumeDownload: 'Dhasarathan_Thangaraj_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Dhasarathan Thangaraj',
  },
  interests: ['Generative AI', 'Advanced RAG', 'System Design'],
};

export const education = [
  {
    school: 'KLN College of Information Technology',
    place: 'Madurai',
    degree: 'B.E. Civil Engineering',
    period: '2015 – 2019',
    score: 'Bachelor of Engineering',
  },
];

export const experience = [
  {
    company: 'Infinite Services',
    role: 'Software Consultant',
    place: 'India',
    period: 'July 2026 – November 2026',
    points: [
      'Built full-stack web applications with Node.js, Express, React, TypeScript, Python and Django, designing RESTful APIs in an Agile/Scrum team.',
      'Managed GitHub Actions CI/CD pipelines, Docker containerization, and Kubernetes/Helm microservice deployments.',
      'Applied SonarQube quality checks, maintained Git workflows and MkDocs documentation, and contributed to system and API design.',
    ],
  },
  {
    company: 'Independent Freelancer',
    role: 'Full Stack Developer',
    place: 'Remote',
    period: 'December 2025 – June 2026',
    points: [
      'Developed full-stack applications using React, Node.js, Express and Python/Django, integrating REST APIs and SQL databases.',
      'Containerized applications with Docker and automated delivery using GitHub Actions while maintaining code quality and documentation.',
    ],
  },
  {
    company: 'Agile Civil Engg.',
    role: 'Software Engineer',
    place: 'India',
    period: 'July 2023 – November 2025',
    points: [
      'Developed and optimized Django REST APIs and MS SQL Server databases, improving response time by 30% and data retrieval efficiency by 40%.',
      'Built secure frontends with RxJS state management and implemented JWT authentication and role-based access control.',
      'Tested APIs with Postman and delivered iteratively using Agile/Scrum practices.',
    ],
  },
  {
    company: 'Sparks Foundation, Singapore',
    role: 'Software Engineer Intern',
    place: 'Singapore',
    period: 'January 2023',
    points: [
      'Cleaned and analyzed datasets with Python, Pandas and NumPy, improving data quality by 25% and reducing manual processing effort by 20%.',
      'Created Python visualizations and reports to surface business insights for stakeholders.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ai-document-assistant',
    title: 'AI Document Assistant',
    year: 'Advanced RAG',
    genre: 'Generative AI • RAG • Search',
    logline: 'A production-grade document assistant grounded in hybrid retrieval, reranking and cited answers.',
    stack: ['React 18', 'Vite', 'Django REST Framework', 'Gemini 2.5 Flash', 'PostgreSQL', 'pgvector'],
    build: [
      'Engineered an eight-stage RAG pipeline with query rewriting, multi-query generation, HyDE, hybrid BM25/vector retrieval, Reciprocal Rank Fusion, Gemini reranking and grounded generation with inline citations.',
      'Implemented parent-child semantic chunking and task-typed Gemini embeddings stored in PostgreSQL 16 with a pgvector HNSW index.',
      'Added structured source citations and opt-in Faithfulness, Answer Relevancy and Context Relevancy evaluation metrics.',
    ],
    features: [
      'Eight-stage Advanced RAG pipeline',
      'Hybrid BM25 and parallel pgvector HNSW retrieval',
      'Gemini-as-judge reranking and grounded answers',
      'Inline citations and source cards with page numbers',
      'Opt-in RAG quality evaluation',
    ],
    metrics: [
      { value: '8 stages', label: 'in the RAG pipeline' },
      { value: '768-dim', label: 'Gemini embeddings' },
      { value: '3 metrics', label: 'for opt-in evaluation' },
    ],
    github: 'https://github.com/dhas97',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'ai-data-agent',
    title: 'AI Data Agent',
    year: 'Natural Language to SQL',
    genre: 'AI • LangChain • Data',
    logline: 'A natural-language-to-SQL assistant that turns questions into database answers.',
    stack: ['Python', 'LangChain', 'LLM', 'Text-to-SQL'],
    build: [
      'Built an AI data agent that translates plain-English questions into database queries, executes them and returns readable answers.',
      'Designed the workflow to let users retrieve database information without writing SQL manually.',
    ],
    features: [
      'Natural-language questions translated to SQL',
      'Database query execution through an AI agent',
      'Readable answers returned to the user',
    ],
    metrics: [
      { value: 'Plain English', label: 'query interface' },
      { value: 'Automated', label: 'SQL execution' },
      { value: 'Readable', label: 'results' },
    ],
    github: 'https://github.com/dhas97',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'api-response',
    title: '30% faster API response',
    org: 'Agile Civil Engg.',
    detail: 'Optimized Django REST APIs and MS SQL Server data access.',
    laurel: 'Performance',
  },
  {
    id: 'data-retrieval',
    title: '40% better data retrieval efficiency',
    org: 'Agile Civil Engg.',
    detail: 'Improved database retrieval through API and MS SQL Server optimization.',
    laurel: 'Database Optimization',
  },
  {
    id: 'data-quality',
    title: '25% improvement in data quality',
    org: 'Sparks Foundation',
    detail: 'Cleaned and analyzed datasets using Python, Pandas and NumPy.',
    laurel: 'Data Analytics',
  },
  {
    id: 'manual-processing',
    title: '20% less manual processing',
    org: 'Sparks Foundation',
    detail: 'Automated data preparation with Python scripts.',
    laurel: 'Automation',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Coursera', name: 'Data Analytics' },
  { issuer: 'Coursera', name: 'Project Management' },
  { issuer: 'HackerRank', name: 'SQL (Advanced)' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Application and data development',
    skills: [
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Python', mono: 'Py' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Web interfaces and state',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Redux', mono: 'Rd' },
      { name: 'RxJS', mono: 'Rx' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Services, APIs and architecture',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Django', mono: 'Dj' },
      { name: 'Django REST Framework', mono: 'DR' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational storage and vector search',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'MS SQL Server', mono: 'Ms' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'pgvector', mono: 'Pv' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps / CI-CD',
    subtitle: 'Build, ship and operate',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'Kubernetes', mono: 'Ku' },
      { name: 'Helm', mono: 'He' },
      { name: 'GitHub Actions', mono: 'Gh' },
      { name: 'Git', mono: 'Gt' },
      { name: 'SonarQube', mono: 'Sq' },
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI / Tools',
    subtitle: 'LLM applications and engineering tools',
    skills: [
      { name: 'OpenAI API', mono: 'OA' },
      { name: 'Gemini', mono: 'Ge' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'JWT / RBAC', mono: 'Jw' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'MkDocs', mono: 'Mk' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  JavaScript: ['React.js and Node.js application development'],
  TypeScript: ['Full-stack applications at Infinite Services'],
  Python: ['Django APIs', 'AI Document Assistant', 'Sparks Foundation data analysis'],
  SQL: ['MySQL', 'MS SQL Server', 'PostgreSQL'],
  'React.js': ['AI Document Assistant', 'Full-stack application development'],
  Redux: ['Frontend development'],
  RxJS: ['Frontend state management'],
  'Node.js': ['Full-stack application development'],
  'Express.js': ['REST API development'],
  Django: ['Agile Civil Engg. APIs', 'AI Document Assistant'],
  'Django REST Framework': ['AI Document Assistant'],
  'REST APIs': ['Django REST Framework', 'Express.js'],
  Microservices: ['Kubernetes and Helm deployments'],
  MySQL: ['Database design and development'],
  'MS SQL Server': ['Agile Civil Engg. API and database optimization'],
  PostgreSQL: ['AI Document Assistant'],
  pgvector: ['AI Document Assistant vector retrieval'],
  Docker: ['Application containerization', 'Docker Compose'],
  Linux: ['Technical skills listed on resume'],
  Kubernetes: ['Infinite Services microservice deployments'],
  Helm: ['Infinite Services microservice deployments'],
  'GitHub Actions': ['CI/CD pipeline management'],
  Git: ['Version control and branching workflows'],
  SonarQube: ['Code quality checks'],
  'OpenAI API': ['LLM integration'],
  Gemini: ['AI Document Assistant embeddings and reranking'],
  LangChain: ['AI Data Agent'],
  'JWT / RBAC': ['Agile Civil Engg. application security'],
  Postman: ['API testing'],
  MkDocs: ['Technical documentation'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Engineering Foundations',
    period: '2015 – 2019',
    synopsis: 'Civil Engineering at KLN College of Information Technology in Madurai.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'B.E. Civil Engineering',
        description: 'Completed a Bachelor of Engineering at KLN College of Information Technology, Madurai.',
        tags: ['B.E.', 'Civil Engineering'],
        runtime: '2015 – 2019',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Data and Automation',
    period: 'January 2023',
    synopsis: 'Software engineering internship at Sparks Foundation, Singapore.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Data Analysis Intern',
        description: 'Used Python, Pandas and NumPy to improve data quality by 25% and reduce manual processing by 20%.',
        tags: ['Python', 'Pandas', 'NumPy'],
        runtime: 'January 2023',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Enterprise Applications',
    period: 'July 2023 – November 2025',
    synopsis: 'Software Engineer at Agile Civil Engg., building Django APIs and secure frontends.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'APIs and Databases',
        description: 'Optimized Django REST APIs and MS SQL Server, improving response time by 30% and retrieval efficiency by 40%.',
        tags: ['Django REST Framework', 'MS SQL Server'],
        runtime: 'July 2023 – November 2025',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Secure Frontends',
        description: 'Built secure frontends with RxJS and implemented JWT authentication and role-based access control.',
        tags: ['RxJS', 'JWT', 'RBAC'],
        runtime: 'Agile Civil Engg.',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Independent Product Work',
    period: 'December 2025 – June 2026',
    synopsis: 'Freelance full-stack development across React, Node.js, Django and SQL-backed services.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Full Stack Delivery',
        description: 'Developed full-stack applications, integrated REST APIs and SQL databases, and automated delivery with GitHub Actions.',
        tags: ['React', 'Node.js', 'Django', 'Docker'],
        runtime: 'December 2025 – June 2026',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: 'Consulting and Advanced RAG',
    period: 'July 2026 – November 2026',
    synopsis: 'Software Consultant at Infinite Services, delivering full-stack systems and Kubernetes-based microservices.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Production RAG',
        description: 'Built an Advanced RAG document assistant with hybrid pgvector retrieval, Gemini reranking and grounded citations.',
        tags: ['Gemini', 'LangChain', 'PostgreSQL', 'pgvector'],
        runtime: 'Featured project',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Experience', title: '3 Years', detail: 'Full-stack application development', palette: amber },
  { label: 'Featured AI project', title: 'Advanced RAG', detail: 'Hybrid retrieval • citations • reranking', palette: crimson },
  { label: 'Featured data project', title: 'AI Data Agent', detail: 'Natural language to SQL', palette: ocean },
  { label: 'API optimization', title: '30% Faster', detail: 'Django REST API response time', palette: violet },
  { label: 'Database optimization', title: '40% Better', detail: 'Data retrieval efficiency', palette: jade },
  { label: 'Cloud native', title: 'Kubernetes', detail: 'Helm microservice deployments', palette: amber },
  { label: 'Generative AI', title: 'Gemini', detail: 'Embeddings and reranking', palette: crimson },
  { label: 'Frontend', title: 'React + Redux', detail: 'RxJS • TypeScript', palette: ocean },
  { label: 'Data quality', title: '25% Better', detail: 'Python data cleaning and analysis', palette: jade },
  { label: 'Education', title: 'B.E.', detail: 'Civil Engineering • KLN College of IT', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Experience',
    title: '3 Years in Full Stack',
    lines: ['Node.js · Express · React · TypeScript', 'Python · Django · REST API design'],
    chips: ['Full Stack Developer'],
  },
  {
    kicker: 'Skills',
    title: 'Build. Ship. Scale.',
    lines: ['React, Redux, RxJS · Node.js, Django', 'MySQL, MS SQL Server, PostgreSQL · Docker, Kubernetes'],
    chips: ['TypeScript', 'Python', 'REST APIs', 'CI/CD'],
  },
  {
    kicker: 'Career',
    title: 'From APIs to Delivery',
    lines: ['Software Engineer · Agile Civil Engg. · 2023 – 2025', 'Freelance Full Stack Developer · 2025 – 2026', 'Software Consultant · Infinite Services · 2026'],
  },
  {
    kicker: 'Projects',
    title: 'AI, Built for Work',
    lines: ['AI Document Assistant — eight-stage Advanced RAG', 'AI Data Agent — natural-language-to-SQL assistant'],
  },
  {
    kicker: 'Impact',
    title: 'Measured Improvements',
    lines: ['30% faster API response · 40% improved data retrieval', '25% better data quality · 20% less manual processing'],
  },
  {
    kicker: 'Education and courses',
    title: 'Engineering + Analytics',
    lines: ['B.E. Civil Engineering · KLN College of Information Technology', 'Data Analytics · Project Management · SQL (Advanced)'],
  },
];

export type ProfileId = 'dhasarathan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'dhasarathan',
    name: 'Dhasarathan',
    blurb: 'The full portfolio, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Profile • Experience & education', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Chapters • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Milestones`, palette: amber },
  originals: { nav: 'Projects', card: 'Featured Projects', meta: `${projects.length} Featured Projects`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Career Highlights', meta: 'Selected resume highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
