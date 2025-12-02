import { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import ProjectModal from '../../common/ProjectModal';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "FeVR: Acrophobia Simulator",
      shortDesc: "VR-based therapeutic exposure simulator",
      fullDesc: "An immersive Virtual Reality application designed to help individuals overcome acrophobia (fear of heights) through controlled exposure therapy. Built with Unity and C#, featuring realistic environments and progressive difficulty levels.",
      technologies: ["Unity", "C#", "VR Development", "Oculus SDK", "3D Modeling"],
      github: "https://github.com/yuanpngn/feVR.git",
      highlights: [
        "Realistic VR environments with dynamic height scenarios",
        "Progressive difficulty system for gradual exposure",
        "Real-time biometric feedback integration",
        "Customizable therapy sessions"
      ],
      category: "VR Development",
      status: "Completed"
    },
    {
      id: 2,
      title: "BiteBoxd",
      shortDesc: "Social food review platform",
      fullDesc: "A comprehensive food review web application that combines social networking features with restaurant discovery. Users can rate, review, and share their dining experiences while connecting with fellow food enthusiasts.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/yuanpngn/MCO3-Biteboxd",
      highlights: [
        "User authentication and profile management",
        "Real-time review posting and interaction",
        "Restaurant search and filtering system",
        "Social features: follow, like, and comment"
      ],
      category: "Full-Stack Web",
      status: "Active Development"
    },
    {
      id: 3,
      title: "ML Prediction Models",
      shortDesc: "Machine learning analysis project",
      fullDesc: "Advanced machine learning project implementing Linear Regression and Random Forest algorithms for predictive analytics. Includes comprehensive data preprocessing, feature engineering, and model evaluation.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      github: "https://github.com/yuanpngn/STINTSY_MLP",
      highlights: [
        "Implemented multiple regression algorithms",
        "Feature engineering and selection",
        "Cross-validation and hyperparameter tuning",
        "Data visualization and analysis"
      ],
      category: "Machine Learning",
      status: "Completed"
    },
    {
      id: 4,
      title: "MR.Drone (Ongoing Thesis)",
      shortDesc: "Mixed Reality system for interactive drone performances",
      fullDesc: "A Mixed Reality system that integrates drones into interactive performances. Developed using Unity and C#, this project explores how spatial computing and aerial movement can enhance performative environments, blending technology with the arts. Currently in the final stages with only user study remaining.",
      technologies: ["Unity", "C#", "Mixed Reality", "Spatial Computing", "Crazyflie", "Computer Vision"],
      github: "https://github.com/yuanpngn/cf_routine",
      conferencePaper: "/src/assets/MRDrone_ConferencePaper.pdf",
      highlights: [
        "Integration of drones into Mixed Reality environments",
        "Interactive performance system with spatial computing",
        "Real-time drone choreography and control",
        "Blending technology with performative arts",
        "Conference paper published (User study pending)"
      ],
      category: "Mixed Reality",
      status: "Ongoing (Thesis)"
    },
    {
      id: 5,
      title: "MediSync",
      shortDesc: "Cloud-based telemedicine platform",
      fullDesc: "A comprehensive telemedicine application built on AWS infrastructure, enabling secure video consultations, appointment scheduling, and electronic health records management. Features HIPAA-compliant data handling.",
      technologies: ["AWS", "React", "Lambda", "DynamoDB", "WebRTC", "S3"],
      github: "https://github.com/yuanpngn/MediSync",
      highlights: [
        "Secure video consultation system",
        "Electronic health records (EHR) management",
        "Appointment scheduling and reminders",
        "AWS serverless architecture",
        "HIPAA-compliant data encryption"
      ],
      category: "Cloud Computing",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
