import project1Img from "../assets/project1.png";
import project2Img from "../assets/image.png";
import project3Img from "../assets/robot.png";
import project4Img from "../assets/E1.png";
import project5Img from "../assets/E2.png";
import project10Img from "../assets/E7.png";

export interface Project {
  slug: string;
  year: string;
  title: string;
  tagline: string;
  description: string;
  problemStatement: string;
  solution: string;
  targetUsers: string;
  keyOutcomes: string[];
  role: string;
  duration: string;
  techStack: string[];
  keyFeatures: string[];
  challenges: string;
  features: { title: string; description: string; icon: string }[];
  metrics: { label: string; value: string }[];
  images: string[];
  mockups: string[];
  developmentProcess: {
    research: string;
    design: string;
    development: string;
    testing: string;
  };
  githubLink?: string;
  liveDemoLink?: string;
}

export const projectsData: Project[] = [
{
slug: "infinova-technologies",
year: "2025 - 2026",
title: "Infinova Technologies Website",
tagline: "Designing and building a modern website for a growing software startup.",
description:
"Worked as a UI/UX intern at Infinova Technologies where I designed the complete user experience and also contributed to the website development. The goal was to build trust with potential clients and clearly communicate the company's services.",

problemStatement:
"The company needed a professional and modern website to showcase their services and attract potential clients.",

solution:
"Designed the full UX structure including wireframes and prototypes and collaborated in the frontend development to bring the design to life.",

targetUsers:
"Businesses looking for software development, UI/UX design, and mobile app development services.",

keyOutcomes: [
"Improved trust and credibility",
"Clear service presentation",
"Better lead conversion"
],

role: "UI/UX Designer & Frontend Developer",

duration: "Oct 2025 - Jan 2026",

techStack: ["Figma", "React", "Tailwind CSS"],

keyFeatures: [
"Modern landing page",
"Clear service sections",
"Responsive layout",
"Conversion focused design"
],

challenges:
"Balancing a professional corporate feel while keeping the design modern and engaging.",

features: [
{
title: "UX Research",
description: "Analyzed service websites and user expectations.",
icon: "🔍"
},
{
title: "Wireframing",
description: "Designed multiple wireframes before finalizing layout.",
icon: "📐"
},
{
title: "Frontend Implementation",
description: "Collaborated on implementing the design with modern frontend technologies.",
icon: "💻"
}
],

metrics: [
{ label: "Design Iterations", value: "5+" },
{ label: "Pages Designed", value: "10+" },
{ label: "Client Satisfaction", value: "High" }
],

images: [project1Img.src],
mockups: [project1Img.src],

developmentProcess: {
research:
"Analyzed competitor websites and user expectations.",
design:
"Designed wireframes and high fidelity prototypes.",
development:
"Implemented responsive layouts using React and Tailwind.",
testing:
"Reviewed usability and responsiveness across devices."
}
},

{
slug: "mycorerise",
year: "2026",
title: "MyCoreRise",
tagline: "Client project focused on micro-yoga and wellness routines.",
description:
"MyCoreRise is a startup platform designed to help students, professionals and remote workers stay healthy through micro yoga sessions and simple exercises.",

problemStatement:
"People with busy schedules struggle to maintain consistent fitness habits.",

solution:
"Designed a simple and engaging UI that encourages users to build healthy habits through short daily routines.",

targetUsers:
"Students, corporate professionals and freelancers working from home.",

keyOutcomes: [
"Clear wellness journey",
"Simple onboarding experience",
"Developer ready Figma design system"
],

role: "UI/UX Designer (Client Project)",

duration: "Jan 2026",

techStack: ["Figma", "UX Research", "Prototyping"],

keyFeatures: [
"Wellness dashboard",
"Micro yoga sessions",
"Simple daily routine tracking"
],

challenges:
"Designing a wellness experience that feels motivating without overwhelming users.",

features: [
{
title: "Wellness Dashboard",
description: "Track daily yoga sessions and routines.",
icon: "🧘"
},
{
title: "Habit Building",
description: "Encourages users to maintain healthy routines.",
icon: "🔥"
},
{
title: "Simple UI",
description: "Clean and calming interface design.",
icon: "✨"
}
],

metrics: [
{ label: "Design Screens", value: "20+" },
{ label: "User Personas", value: "4" },
{ label: "Prototype Iterations", value: "3" }
],

images: [project2Img.src],
mockups: [project2Img.src],

developmentProcess: {
research:
"Studied wellness apps and analyzed user behavior.",
design:
"Designed full UX flows and component system.",
development:
"Delivered developer ready Figma design kit.",
testing:
"Conducted usability testing with early users."
}
},

{
slug: "health-camp-hub",
year: "2025",
title: "Health Camp Hub",
tagline: "Helping communities discover free healthcare camps.",
description:
"A web platform where NGOs and government bodies can list healthcare camps so people can easily discover nearby medical services.",

problemStatement:
"People often struggle to find nearby free healthcare camps or medical support.",

solution:
"Built a centralized platform that allows users to search for healthcare camps easily.",

targetUsers:
"Communities looking for accessible healthcare services.",

keyOutcomes: [
"Improved healthcare accessibility",
"Easy discovery of local health camps"
],

role: "Frontend Developer",

duration: "Jul 2025 - Aug 2025",

techStack: ["React", "Tailwind CSS", "JavaScript"],

keyFeatures: [
"Search nearby camps",
"NGO listings",
"Future map integration"
],

challenges:
"Designing a simple interface for users with limited technical literacy.",

features: [
{
title: "Location Search",
description: "Find health camps near you.",
icon: "📍"
},
{
title: "Community Platform",
description: "NGOs can list upcoming health camps.",
icon: "🏥"
},
{
title: "Notification System",
description: "Planned email and WhatsApp alerts.",
icon: "📩"
}
],

metrics: [
{ label: "Communities Supported", value: "Multiple" },
{ label: "Future Features", value: "Maps + Alerts" }
],

images: [project4Img.src],
mockups: [project4Img.src],

developmentProcess: {
research:
"Studied healthcare accessibility problems.",
design:
"Focused on simple navigation and search.",
development:
"Built with React and Tailwind CSS.",
testing:
"Validated usability with sample users."
}
},

{
slug: "mentor-hub",
year: "2025",
title: "Mentor Hub",
tagline: "Connecting students with mentors and alumni.",
description:
"A mentorship platform where students can connect with alumni, get guidance, improve resumes, and prepare for interviews.",

problemStatement:
"Students often lack direct access to experienced mentors for guidance.",

solution:
"Designed and built a platform where students can easily interact with mentors and prepare for careers.",

targetUsers:
"Students looking for mentorship and career support.",

keyOutcomes: [
"Improved mentorship accessibility",
"Better interview preparation"
],

role: "Frontend Developer",

duration: "Mar 2025 - Apr 2025",

techStack: ["React", "Tailwind CSS"],

keyFeatures: [
"Mentor chat",
"Resume improvement tools",
"AI interview preparation"
],

challenges:
"Designing a scalable mentorship ecosystem.",

features: [
{
title: "Mentor Chat",
description: "Direct communication with alumni mentors.",
icon: "💬"
},
{
title: "AI Interview Prep",
description: "Practice interview questions using AI.",
icon: "🤖"
},
{
title: "Resume Tools",
description: "Improve resumes with smart suggestions.",
icon: "📄"
}
],

metrics: [
{ label: "Students Supported", value: "Growing" },
{ label: "Mentor Network", value: "Expanding" }
],

images: [project10Img.src],
mockups: [project10Img.src],

developmentProcess: {
research:
"Studied mentorship platforms and student needs.",
design:
"Designed student and mentor dashboards.",
development:
"Built frontend using React and Tailwind.",
testing:
"Optimized UI responsiveness."
}
}

];

export const getProjectById = (id: string | number) => {
  return projectsData.find((project) => project.slug === id.toString());
};