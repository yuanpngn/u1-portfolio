import styles from './ExperienceStyles.module.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Manulife IT Development Center",
      period: "September 2025 – Present",
      location: "Remote",
      description: [
        "Develop and enhance microservice-based backend systems as part of the RFS team under the DP2 Project for Manulife's Asia Division",
        "Implement and optimize RESTful APIs using Java 21, Spring Boot, and NoSQL, ensuring scalability and reliability in distributed environments",
        "Integrate backend services with enterprise authentication, logging, and monitoring pipelines, leveraging Jenkins CI/CD for automated deployments",
        "Write and maintain unit and integration tests with JUnit and Mockito, improving overall test coverage and system stability",
        "Completed the Manulife University Software Engineering Program, gaining hands-on experience in system design, CI/CD, and DevSecOps practices"
      ],
      icon: "💼",
      type: "work"
    },
    {
      id: 2,
      title: "Vice President for Human Resources and Development",
      company: "La Salle Computer Society",
      period: "January 2025 – September 2025",
      location: "De La Salle University - Manila",
      description: [
        "Lead the HRD division of a 900+ member organization, mentoring 11 officers and managing internal communication strategies",
        "Directed over 20 tech-centered projects and events, including a university-wide recruitment campaign",
        "Spearheaded the planning and execution of large-scale events attended by more than 300 participants",
        "Oversee major organizational initiatives focused on member development and engagement"
      ],
      icon: "🎯",
      type: "leadership"
    },
    {
      id: 3,
      title: "Full-Stack Developer",
      company: "Abstrak Motif Invento",
      period: "May 2024 – July 2024",
      location: "Course Project",
      description: [
        "Developed a complete inventory and order management system using HTML, CSS, JavaScript, Node.js, and MongoDB",
        "Followed Agile methodologies throughout the development process, allowing for efficient delivery and feedback-driven improvements",
        "Created a seamless interface for client operations and integrated backend logic to streamline order processing and stock tracking"
      ],
      icon: "💻",
      type: "work"
    },
    {
      id: 4,
      title: "Full-Stack Developer",
      company: "Luxxe Shoppe",
      period: "2024",
      location: "Startup Project",
      description: [
        "Designed and implemented a full online shopping platform for a startup using Tailwind CSS, JavaScript, Node.js, and MongoDB",
        "Followed CI/CD practices to support quick deployment and iteration",
        "Handled both frontend and backend components, focusing on building a user-friendly, responsive interface"
      ],
      icon: "🛍️",
      type: "work"
    },
    {
      id: 5,
      title: "Industry Partnership Officer & Lead Negotiator",
      company: "Google Developer Student Clubs, DLSU",
      period: "2023 – 2024",
      location: "De La Salle University - Manila",
      description: [
        "Led partnership-building efforts and successfully negotiated an agreement with DataCamp that gave discounted course access to over 100 students",
        "Established and maintained collaborations with various tech companies to bring in new learning opportunities for student developers",
        "Organized and coordinated industry-led tech talks and workshops to bridge the gap between students and professionals"
      ],
      icon: "🤝",
      type: "leadership"
    },
    {
      id: 6,
      title: "Founding Member & Officer in Training",
      company: "BadSoc, DLSU",
      period: "2025 – Present",
      location: "De La Salle University - Manila",
      description: [
        "Contributed to the growth of DLSU's official Badminton Society from its early stages to more than 300 members",
        "Implemented a weekly queuing system and offered free training sessions for players of all levels",
        "Helped lay the foundation of the organization's operations and culture, focusing on inclusivity, accessibility, and continuous engagement"
      ],
      icon: "🏸",
      type: "leadership"
    }
  ];

  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={exp.id} className={styles.timelineItem}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>{exp.icon}</span>
            </div>
            <div className={styles.content}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.title}>{exp.title}</h3>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <div className={styles.meta}>
                  <span className={styles.period}>{exp.period}</span>
                  <span className={styles.location}>{exp.location}</span>
                </div>
              </div>
              <ul className={styles.description}>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
