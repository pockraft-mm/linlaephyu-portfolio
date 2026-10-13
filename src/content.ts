export type Project = {
  title: string;
  category: string;
  period?: string;
  description: string;
  technologies?: string;
  github?: string;
  preview?: string;
};

export const portfolio = {
  name: 'Lin Lae Phyu',
  title: 'Computer Science Engineering Student',
  focus: 'Data Analytics & AI Enthusiast',
  institution: 'Myanmar Institute of Information Technology',
  portrait: '/profile.png',
  cv: '/cv.pdf',
  email: 'louise.linlaephyu798@gmail.com',
  phone: '+95 92150093',
  linkedin: 'https://www.linkedin.com/in/lin-lae-phyu-78344026b/',
  github: 'https://github.com/kyaukweiwei',
  telegram: 'https://t.me/kyauk_weiwei',
  introduction: 'Computer Science Engineering student specializing in Data Analytics, Business Intelligence, and AI-driven solutions. Interested in transforming data into actionable insights.',
  about: 'Computer Science Engineering student with experience in Power BI, Python, SQL, and full-stack development. Interested in data analytics, business intelligence, and AI-driven solutions.',
  education: [
    { label: 'Degree', value: 'B.E. (Hons) in Computer Science Engineering' },
    { label: 'MIIT', value: 'Myanmar Institute of Information Technology · 2022–2027' },
    { label: 'Professional Diploma', value: 'Business Intelligence & Data Analytics · Matrix College · 2026' },
    { label: 'English Diploma', value: 'Mandalay University of Foreign Language · 2023–2024' },
    { label: 'Business Diploma', value: 'Business Management & Administration · Strategy First International College · 2022–2023' },
  ],
  certifications: ['FA1 & FA2 — ACCA', 'HR Management — Strategy First Extension', 'Marketing — Strategy First Extension'],
  experience: [
    { role: 'KBZPay Student Ambassador', period: '2026', detail: 'Developed leadership, communication, financial literacy, and workplace skills.' },
  ],
  skills: [
    ['Data & BI', 'Power BI, DAX, Excel, SQL, Python'],
    ['Development', 'Django, React, Node.js'],
    ['AI', 'Machine Learning, NLP'],
    ['Core', 'Data Analysis, Problem Solving, Research'],
  ] as const,
  projects: [
    { title: 'Brancy', category: 'Full-Stack Web Application', period: 'Jun 2024 – Oct 2024', description: 'Cosmetic online shopping system with AI-powered skincare recommendations.', technologies: 'Full-Stack Development · AI Recommendations' },
    { title: 'RecycleLink', category: 'Full-Stack Web Application', period: 'Dec 2024 – Mar 2025', description: 'Sustainable e-commerce platform for recyclable materials with AI chatbot integration.', technologies: 'Full-Stack Development · AI Chatbot' },
    { title: 'Climbio', category: 'Full-Stack Mobile Application', period: 'Jul 2025 – Oct 2025', description: 'Smart business toolkit for MSMEs with customer management and automated engagement tools.', technologies: 'Full-Stack Development · Customer Management' },
    { title: 'Strivo', category: 'Hackathon Project', period: '2026', description: 'AI strategic planning assistant for SMEs. Winner, Technortal Hackathon 2026.', technologies: 'AI · Strategic Planning' },
    { title: 'Lan Pya', category: 'Hackathon Project', period: '2026', description: 'AI-powered career navigator for students. Second Award, Strategy First (Mdy) + U.S. Embassy Hackathon 2026.', technologies: 'AI · Career Navigation' },
    { title: 'Retail BI Dashboard', category: 'Power BI Project', period: '2026', description: 'Interactive dashboard for sales, customer, product, revenue, returns, and campaign analytics using Power BI and DAX.', technologies: 'Power BI · DAX' },
    { title: 'InfoDetective Kids | Sone Dauk Lay', category: 'Hackathon Project', period: '2026', description: 'Media and information literacy game platform for ages 10–14, created for the UNESCO Youth Hackathon.', technologies: 'Media and Information Literacy' },
    { title: 'Pyit Tine Htaung', category: 'Hackathon Project', period: '2026', description: 'AI climate resilience and smart loan platform created for the AI for Climate-Resilient Hackathon.', technologies: 'AI · Climate Resilience' },
    { title: 'CareerLadder', category: 'Hackathon Project', period: '2025', description: 'AI-powered career mapping system developed for the Venture-Based Hackathon.', technologies: 'AI · Career Mapping' },
  ] satisfies Project[],
  achievements: [
    { title: 'Technortal Hackathon', result: 'Winner · 2026', detail: 'Strivo — AI strategic planning assistant for SMEs' },
    { title: 'One Project One Week Hackathon', result: 'Winner', detail: 'Team Fortune Tellers' },
    { title: 'Power BI Project Presentation · Matrix College', result: 'First Award · 2026', detail: 'Retail BI Dashboard — sales, customer, product, revenue, returns, and campaign analytics using Power BI and DAX.' },
    { title: 'Strategy First (Mdy) + U.S. Embassy Hackathon', result: 'Second Award · 2026', detail: 'Lan Pya — AI-powered career navigator for students' },
    { title: 'Power BI Dashboard Challenge', result: '2026', detail: 'Retail BI Dashboard — sales, customer, product, revenue, returns, and campaign analytics using Power BI and DAX.' },
    { title: 'UNESCO Youth Hackathon', result: '2026', detail: 'InfoDetective Kids | Sone Dauk Lay — media and information literacy game platform for ages 10–14' },
    { title: 'AI for Climate-Resilient Hackathon', result: '2026', detail: 'Pyit Tine Htaung — AI climate resilience and smart loan platform' },
    { title: 'Venture-Based Hackathon', result: '2025', detail: 'CareerLadder — AI-powered career mapping system' },
  ],
};
