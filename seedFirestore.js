// EASIER METHOD: Just delete the bad collections in Firebase Console
// Then the app will use default data automatically

// Go to Firebase Console → Firestore Database
// Delete these collections: projects, skills, experiences
// Refresh your app - it will show default data
// When you edit as admin, it will save properly

console.log('❌ This script requires Firebase Admin SDK with service account credentials.');
console.log('\n📝 EASIER SOLUTION:');
console.log('1. Go to Firebase Console → Firestore Database');
console.log('2. Delete the "projects" collection (click the 3 dots → Delete collection)');
console.log('3. Delete the "skills" collection');
console.log('4. Delete the "experiences" collection (if it exists)');
console.log('5. Refresh your portfolio - it will load default data');
console.log('6. When you log in as admin and edit/save, data will be stored properly\n');
process.exit(0);

// If you want to use this script, you need to:
// 1. Download service account JSON from Firebase Console
// 2. Install firebase-admin: npm install firebase-admin
// 3. Use admin SDK instead of client SDK

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, setDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBSg3hKI1ivfY25vgWpBWlqvj0SYJt_qpk",
  authDomain: "u1-porfolio.firebaseapp.com",
  projectId: "u1-porfolio",
  storageBucket: "u1-porfolio.firebasestorage.app",
  messagingSenderId: "946990774205",
  appId: "1:946990774205:web:74607f74dff97e25c4d3c0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Kept in sync with v2CV.pdf.
const projects = [
  {
    title: "MR. Drone (Thesis) — Mixed Reality Autonomous Drone Interaction System",
    shortDesc: "Mixed Reality system integrating autonomous drones into interactive performances.",
    fullDesc: "Designed and developed a Mixed Reality (MR) system that integrates autonomous drones with interactive XR environments using Unity, C#, and Python, for my undergraduate thesis. Built a custom drone platform using Bitcraze Crazyflie hardware and integrated physical drone movement with virtual environments through real-time communication. Key finding: a working MR system where the physical drone's movement responds to and shapes live improvisational performance.",
    technologies: ["Unity", "C#", "Python", "XR", "AR Foundation", "Bitcraze Crazyflie", "HCI", "Spatial Computing"],
    github: "https://github.com/yuanpngn/CF_MRDrone",
    highlights: [
      "Built a custom drone platform using Bitcraze Crazyflie hardware, integrated with virtual environments through real-time communication",
      "Implemented autonomous flight behaviors, spatial interaction logic, and event-driven responses between virtual objects and physical drone movements",
      "Developed object tracking and interaction mechanisms to enable immersive performer–drone interactions within mixed reality environments",
      "Applied Human-Computer Interaction (HCI), spatial computing, and embodied interaction principles to explore drones as interactive avatars in performative experiences"
    ],
    category: "Mixed Reality · Thesis",
    status: "In Progress",
    isPinned: true
  },
  {
    title: "CineFlow",
    shortDesc: "Full-stack inventory and order management system built for a startup client.",
    fullDesc: "Full-stack inventory and order management system built using Node.js and MongoDB for a startup client, covering product tracking and order workflows end to end.",
    technologies: ["JavaScript", "Node.js", "MongoDB", "HTML/CSS", "REST APIs", "Docker"],
    github: "https://github.com/yuanpngn/Cineflow",
    highlights: [
      "Implemented CRUD operations for product tracking and order workflows",
      "Designed responsive UI and backend logic for real-world business operations",
      "Followed Agile practices and incorporated client feedback into iterative development"
    ],
    category: "Full-Stack Web",
    status: "Completed"
  }
];

const skills = {
  'Programming Languages': ['C', 'C#', 'Java', 'JavaScript', 'Python', 'Kotlin', 'SQL'],
  'Frontend Development': ['HTML', 'CSS', 'React', 'Angular', 'Handlebars'],
  'Backend Development': ['Node.js', 'Spring Boot', 'REST APIs'],
  'Databases': ['MongoDB', 'MySQL', 'Relational Databases'],
  'DevOps & Development Tools': ['Git', 'GitHub', 'GitHub Actions', 'Jenkins', 'Docker', 'Jira', 'Confluence', 'Visual Studio Code'],
  'Game Development & XR': ['Unity', 'AR Foundation', 'Blender', 'XR Development'],
  'Design & Productivity Tools': ['Figma', 'Canva', 'Microsoft Office', 'Google Workspace']
};

const experiences = [
  {
    title: 'Automation Intern',
    company: 'Hongkong and Shanghai Banking Corporation Limited (HSBC)',
    period: 'June 2026 – Present',
    location: 'Markets & Securities Services Operations (MSS Ops)',
    icon: '🏦',
    type: 'work',
    description: [
      'Automated BAU workflows for the Markets & Securities Services Operations (MSS Ops) team using Excel VBA, Power Query, and advanced Excel automation, reducing dependency on manual reporting processes.',
      'Developed automated data processing workflows capable of handling 100,000+ records per worksheet across multiple operational reports.',
      'Built dynamic Excel dashboards that automatically refresh KPI metrics from source data, replacing manual updates previously performed by multiple team members.',
      'Created reusable VBA macros to automate repetitive reporting tasks, data consolidation, and workflow processes across secured network file systems.',
      'Streamlined operational reporting by integrating data transformation, Pivot Tables, and automated calculations into a centralized reporting workflow.'
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'International Business Machines (IBM)',
    period: 'May 2026 – June 2026',
    location: '',
    icon: '💻',
    type: 'work',
    description: [
      'Completed structured software engineering training focused on Java programming, web technologies, and modern application development practices.',
      'Participated in Java and Web Development training, covering object-oriented programming, application architecture, frontend and backend fundamentals, and web application workflows.',
      'Completed Mobile and Web Application Development training, gaining exposure to building responsive applications and understanding software development lifecycles.',
      'Participated in Artificial Intelligence (AI) training focused on IBM AI technologies, including IBM BOB, gaining exposure to AI concepts, real-world applications, and the integration of AI solutions into software engineering workflows.',
      'Applied software development concepts through hands-on exercises, technical workshops, and guided learning activities following industry best practices.'
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'Manulife IT Delivery Center (MITDC)',
    period: 'Sep 2025 – Feb 2026',
    location: '',
    icon: '🎯',
    type: 'work',
    description: [
      'Recognized for exceptional technical contributions and reliability during the internship program.',
      'Consistently delivered 2–3 user stories per sprint within an Agile environment, frequently taking on additional SPIKE research tickets to unblock future development.',
      'Successfully managed the workload of an Associate Developer in addition to intern responsibilities, ensuring project timelines remained on track despite team absences.',
      'Eliminated 100% of technical debt across 9 microservices, applying clean code principles to enhance system maintainability and long-term stability.',
      'Supported 3 successful production deployments and assisted in CI/CD pipeline validation, ensuring secure and stable code transitions to live environments.',
      'Partnered with QA, DevOps, and Business Analysts to ensure all features met rigorous production-ready standards and security requirements.'
    ]
  },
  {
    title: 'Vice President for Human Resources and Development',
    company: 'La Salle Computer Society',
    period: 'Jan 2025 – Sep 2025',
    location: '',
    icon: '🤝',
    type: 'leadership',
    description: [
      "Served as part of the Executive Board of the college's home organization, leading Human Resources operations for a 900+ member community.",
      'Mentored 11 officers and managed internal development programs.',
      'Directed 20+ technical and organizational events, including large-scale recruitment initiatives.',
      'Organized events attended by 300+ participants, improving member engagement.'
    ]
  }
];

const portfolio = {
  hero: {
    name: 'Yuan Pangan',
    title: 'Software Engineer — graduating October 2026, open to full-time roles.',
    description: 'Looking for backend, full-stack, or XR/mixed-reality engineering roles — based in Manila, open to remote. Let\'s talk.'
  },
  about: {
    paragraphs: [
      "I started out chasing the moment code turns into something you can touch — a button that responds, a screen that reacts. That curiosity is why I studied Software Technology at De La Salle University (graduating this October), and why I still can't resist opening dev tools on a page I like.",
      "Since then I've built across the stack — automation tooling at HSBC, production backend work at Manulife, a full-stack inventory system for a startup client — and outside it, into research: a mixed-reality drone system that treats hardware as a performance partner.",
      "What ties it together is a bias for shipping things that hold up under real use — readable code, tested assumptions, and interfaces that work for the person who didn't design them. That's the standard I hold every project to."
    ],
    location: 'Manila, Philippines'
  },
  social: {
    github: 'https://github.com/yuanpngn',
    linkedin: 'https://www.linkedin.com/in/yuan-pangan/'
  }
};

// Reference data for the 'achievements' collection (add via the admin panel —
// Achievements section — since this script does not write to Firestore).
const achievements = [
  { title: "Dean's List", org: 'De La Salle University', note: 'Add your qualifying term(s) here.', dashed: true },
  { title: 'IBM Software Engineering Externship', org: 'IBM', note: 'Java, web & AI application training — completed.' },
  { title: 'Recognized for Technical Excellence', org: 'Manulife IT Delivery Center', note: 'Cited for reliability and technical contribution during internship.' },
  { title: 'Student Leadership', org: 'La Salle Computer Society', note: 'VP for Human Resources & Development, 2025.' }
];

async function seedData() {
  try {
    console.log('Seeding portfolio data...');
    await setDoc(doc(db, 'portfolio', 'main'), portfolio);
    console.log('✓ Portfolio data seeded');

    console.log('Seeding projects...');
    for (const project of projects) {
      await addDoc(collection(db, 'projects'), project);
    }
    console.log('✓ Projects seeded');

    console.log('Seeding skills...');
    for (const [category, skillList] of Object.entries(skills)) {
      await setDoc(doc(db, 'skills', category), { skills: skillList });
    }
    console.log('✓ Skills seeded');

    console.log('Seeding experiences...');
    for (const exp of experiences) {
      await addDoc(collection(db, 'experiences'), exp);
    }
    console.log('✓ Experiences seeded');

    console.log('Seeding achievements...');
    for (const item of achievements) {
      await addDoc(collection(db, 'achievements'), item);
    }
    console.log('✓ Achievements seeded');

    console.log('\n✅ All data seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
}

seedData();
