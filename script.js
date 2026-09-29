/**
 * ============================================================================
 * PORTFOLIO CONFIGURATION & DATA SOURCE
 * ============================================================================
 * Centralized data object powering both Developer and DevOps modes.
 * Easily update identity details, project URLs, and credentials in this single block.
 */
const PORTFOLIO_DATA = {
  // Identity & Contact
  identity: {
    name: "Md Ejazuddin Jamadar",
    initials: "EJ",
    location: "Bengaluru, Karnataka, India",
    phone: "+91 7829745001",
    email: "mdejazuddinjamadar@gmail.com",
    linkedin: "https://www.linkedin.com/in/mdeajazuddin-jamadar-359810258",
    githubUsername: "ajazjamadar",
    githubUrl: "https://github.com/ajazjamadar"
  },

  // Resumes for active role modes
  resumes: {
    developer: {
      file: "assets/Md_Ejazuddin_Jamadar-Resume_SD.pdf",
      filename: "Md_Ejazuddin_Jamadar_Resume_SD.pdf"
    },
    devops: {
      file: "assets/Md_Ejazuddin_Jamadar_-_2P_DevOps_2026.pdf",
      filename: "Md_Ejazuddin_Jamadar_DevOps_2026.pdf"
    }
  },

  // Dynamic Role Mode Content
  modes: {
    developer: {
      roleTitle: "Software Developer",
      typingPhrases: [
        "Software Developer",
        "Java & Spring Boot Engineer",
        "REST API & Microservices Builder",
        "Backend Architecture Enthusiast"
      ],
      pitch: "Engineering scalable, secure RESTful APIs with Java 21 & Spring Boot 3.x. Focused on robust backend architecture, clean database design, and end-to-end reliability.",
      summaryBadge: "Software Developer Profile",
      summary: "Software Developer with hands-on experience across the full SDLC and a strong backend foundation. Builds scalable, secure RESTful APIs with Java 21, Spring Boot 3.x and Spring Security; implements JWT authentication and RBAC; optimizes MySQL performance; and practices TDD with JUnit 5 and Mockito.",
      terminal: {
        title: "spring-boot-core-api : v3.3.4",
        command: "curl -s -X GET https://api.ejaz.dev/v1/health \\\n  -H \"Authorization: Bearer eyJhbGci...\"",
        responseHtml: `<div class="term-comment"># HTTP/2 200 OK — Content-Type: application/json</div>
<div class="term-json">{
  <span class="term-key">"status"</span>: <span class="term-val-str">"UP"</span>,
  <span class="term-key">"service"</span>: <span class="term-val-str">"fintrack-core-api"</span>,
  <span class="term-key">"runtime"</span>: <span class="term-val-str">"Java 21 / OpenJDK"</span>,
  <span class="term-key">"database"</span>: <span class="term-val-str">"MySQL 8.0 (Connected via Flyway)"</span>,
  <span class="term-key">"security"</span>: <span class="term-val-str">"JWT & RBAC Active"</span>,
  <span class="term-key">"testsPassing"</span>: <span class="term-val-bool">true</span>,
  <span class="term-key">"uptime"</span>: <span class="term-val-str">"99.98%"</span>
}</div>
<div class="term-success">✓ Spring Boot 3.x backend responding normally</div>`
      },
      skillsOrder: [
        'Languages',
        'Backend',
        'Databases',
        'Testing & Tools',
        'Cloud & Frontend'
      ],
      projectsOrder: [1, 2, 3, 4, 5, 6, 7],
      codtechRole: "Web Developer Intern (MERN)",
      codtechBullets: [
        "Built full-stack web apps with MongoDB, Express.js, React.js and Node.js.",
        "Built responsive UIs and REST APIs.",
        "Collaborated with teams."
      ]
    },

    devops: {
      roleTitle: "DevOps & Cloud Engineer",
      typingPhrases: [
        "DevOps & Cloud Engineer",
        "CI/CD Pipeline Automator",
        "Kubernetes & Docker Specialist",
        "Infrastructure as Code (Terraform)"
      ],
      pitch: "Automating cloud infrastructure, zero-downtime deployment pipelines, and containerized workloads across AWS, Docker, and Kubernetes environments.",
      summaryBadge: "DevOps & Cloud Engineer Profile",
      summary: "DevOps and Cloud Engineer focused on CI/CD pipelines, infrastructure automation and containerized deployments. Works with Linux, AWS, Docker, Kubernetes, Jenkins, Terraform and Ansible, with a foundation in configuration management, monitoring and Infrastructure as Code.",
      terminal: {
        title: "k8s-prod-cluster : us-east-1",
        command: "kubectl get pods -n production -l app=fintrack-service\nterraform plan -out=tfplan",
        responseHtml: `<div class="term-comment"># Cluster Status: Healthy — Region: ap-south-1</div>
<div class="term-json">NAME                                READY   STATUS    RESTARTS   AGE
fintrack-deployment-788df66b-4c2xz  1/1     Running   0          42m
fintrack-deployment-788df66b-9p8kj  1/1     Running   0          42m

<span class="term-key">Terraform Plan</span>: 3 to add, 0 to change, 0 to destroy.
<span class="term-key">Monitoring</span>: Prometheus scraping (15s), Grafana Dashboards active.</div>
<div class="term-success">✓ 2/2 Pods Ready — Infrastructure Synchronized</div>`
      },
      skillsOrder: [
        'Cloud',
        'CI/CD',
        'Containers & Orchestration',
        'IaC & Config Mgmt',
        'OS & Scripting',
        'Monitoring',
        'Networking'
      ],
      projectsOrder: [7, 6, 1, 2, 3, 4, 5],
      codtechRole: "Application Support & Deployment Intern",
      codtechBullets: [
        "Assisted with deployment, configuration and environment setup across dev/test.",
        "Linux server administration and troubleshooting.",
        "Git/GitHub workflows.",
        "Bash automation of routine tasks and deployment documentation."
      ]
    }
  },

  // Skills categorized according to the DATA specification
  skills: {
    Languages: {
      category: "Languages",
      icon: "code",
      items: ["Java", "Python", "JavaScript", "Bash"]
    },
    Backend: {
      category: "Frameworks & Libraries",
      icon: "server",
      items: ["Spring Boot", "Spring Security", "Hibernate", "Lombok", "Flask"]
    },
    Databases: {
      category: "Databases & Optimization",
      icon: "database",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Schema Design", "Flyway Migrations"]
    },
    "Testing & Tools": {
      category: "DevOps & Testing Tools",
      icon: "check-circle",
      items: ["JUnit 5", "Mockito", "Swagger", "Postman", "Insomnia", "Git", "GitHub", "GitLab"]
    },
    "Cloud & Frontend": {
      category: "Cloud & Frontend",
      icon: "layout",
      items: ["AWS", "Vercel", "Railway", "HTML5", "CSS3", "JavaScript", "React.js"]
    },
    Cloud: {
      category: "Cloud Platforms",
      icon: "cloud",
      items: ["AWS (EC2, IAM, S3, VPC, ALB)", "Microsoft Azure", "Vercel", "Railway"]
    },
    "CI/CD": {
      category: "CI/CD & Version Control",
      icon: "git-merge",
      items: ["Jenkins", "Git", "GitHub", "GitLab", "Maven", "Apache Tomcat (WAR deployment)"]
    },
    "Containers & Orchestration": {
      category: "Containers & Orchestration",
      icon: "box",
      items: ["Docker", "Docker Swarm", "Kubernetes"]
    },
    "IaC & Config Mgmt": {
      category: "IaC & Configuration",
      icon: "cpu",
      items: ["Terraform", "Ansible Playbooks"]
    },
    "OS & Scripting": {
      category: "OS & Scripting",
      icon: "terminal",
      items: ["Linux (Ubuntu, RHEL)", "Windows", "Bash", "Cron", "YAML"]
    },
    Monitoring: {
      category: "Monitoring & Observability",
      icon: "activity",
      items: ["Prometheus", "Grafana", "PagerDuty"]
    },
    Networking: {
      category: "Networking & Web Servers",
      icon: "globe",
      items: ["Nginx", "Load Balancing", "Reverse Proxy"]
    }
  },

  // Experience timeline data (newest first)
  experience: [
    {
      company: "Desisle (Global SaaS Design Agency)",
      role: "Intern",
      location: "Greater Bengaluru Area",
      dates: "Sep 2026 – Present",
      bullets: [] // Show title and dates only; no bullets provided
    },
    {
      company: "DevOps Academy",
      role: "DevOps & Cloud Engineer Intern",
      location: "Bengaluru",
      dates: "Jul 2026 – Sep 2026",
      bullets: [
        "Designed CI/CD pipelines with Jenkins, Git, Maven and Tomcat to automate build, test and deployment.",
        "Provisioned and managed AWS infrastructure (EC2, IAM, VPC, S3, load balancers).",
        "Automated provisioning and configuration with Terraform and Ansible Playbooks.",
        "Containerized and deployed apps with Docker, Docker Swarm and Kubernetes; set up monitoring with Prometheus and Grafana."
      ]
    },
    {
      company: "Learners Byte",
      role: "AI Research & Development Intern (Remote)",
      location: "Hyderabad",
      dates: "Jan 2026 – Jun 2026",
      bullets: [
        "Built AI-powered workflow automations using n8n, Gemini AI, Google Sheets and Gmail.",
        "Built webhook and API-driven workflows to generate and deliver personalized learning plans.",
        "Applied prompt engineering to improve AI response quality.",
        "Added tracking and reporting to monitor workflow execution and user engagement."
      ]
    },
    {
      company: "QBurst Technologies Pvt. Ltd.",
      role: "Software Development Intern (On-site)",
      location: "Bengaluru",
      dates: "Jan 2026 – Apr 2026",
      bullets: [
        "Developed secure REST APIs with Java 21, Spring Boot, Spring Security, JWT and MySQL.",
        "Implemented RBAC, authentication and authorization for enterprise applications.",
        "Managed database migrations with Flyway; wrote unit tests with JUnit and Mockito.",
        "Containerized backend services with Docker; took part in deployment, debugging and performance optimization."
      ]
    },
    {
      company: "CODTECH IT Solutions",
      isDynamicRole: true, // Swaps role & bullets based on mode
      location: "Hyderabad (Remote)",
      dates: "Aug 2025 – Sep 2025"
    }
  ],

  // Projects data (All major & pinned GitHub repositories)
  projects: [
    {
      id: 1,
      title: "NextHire — Modern Job Portal Platform",
      categories: ["backend", "fullstack"],
      displayCategory: "Backend / Full-Stack",
      shortDesc: "Production-grade job portal built with Java 21, Spring Boot 3.2.5, MongoDB, and React 19. Features JWT + OTP auth, RBAC, intelligent search, and applicant tracking.",
      tags: ["Java 21", "Spring Boot 3.2", "MongoDB", "React 19", "Spring Security", "JWT", "Tailwind CSS"],
      githubUrl: "https://github.com/ajazjamadar/NextHire",
      demoUrl: "",
      architecture: "Engineered with Java 21 and Spring Boot 3.2.5 with Spring Security for stateless JWT and OTP verification. Persists high-volume applicant records and job postings in MongoDB Atlas via Spring Data MongoDB with indexed search queries. Frontend is built on React 19 and Vite with Axios JWT interceptors and role-based route guards.",
      hasSvgDiagram: false
    },
    {
      id: 2,
      title: "FinTrack (Personal Finance Tracker)",
      categories: ["backend", "fullstack"],
      displayCategory: "Backend / Full-stack",
      shortDesc: "Mini-banking & financial management system with JWT authentication, BCrypt hashing, RBAC, Flyway migrations, and JUnit/Mockito integration testing.",
      tags: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Docker", "Flyway", "JUnit 5", "Mockito"],
      githubUrl: "https://github.com/ajazjamadar/Personal-Finance-Tracker",
      demoUrl: "",
      architecture: "Three-tier architecture structured around Spring Boot 3.x and Java 21. Implements stateless JWT authentication, password hashing with BCrypt, and Role-Based Access Control (RBAC). Data integrity is backed by Flyway migrations on MySQL, while comprehensive unit and integration tests are authored with JUnit 5 and Mockito mock objects.",
      hasSvgDiagram: false
    },
    {
      id: 3,
      title: "AuditX — Website Audit Scanner",
      categories: ["fullstack", "backend"],
      displayCategory: "Full-stack / Security",
      shortDesc: "Modular website audit tool with automated scanners for OWASP security vulnerabilities, SEO performance, and WCAG accessibility standards.",
      tags: ["TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "OWASP Security", "WCAG"],
      githubUrl: "https://github.com/ajazjamadar/AuditX",
      demoUrl: "",
      architecture: "Full-stack auditing system with a high-throughput Node.js/Express inspection engine evaluating SSL encryption, security response headers, accessibility (WCAG), and SEO structure. Results are persisted to MongoDB for comparative historical analysis, visualised through a React dashboard.",
      hasSvgDiagram: false
    },
    {
      id: 4,
      title: "Job Tracker Application",
      categories: ["backend"],
      displayCategory: "Backend / REST API",
      shortDesc: "Flask-based web application with PostgreSQL for job lifecycle tracking, secure CRUD, REST API endpoints, and automated email notifications.",
      tags: ["Python", "Flask", "PostgreSQL", "REST APIs", "SQLAlchemy"],
      githubUrl: "https://github.com/ajazjamadar/Job-Tracker-Application",
      demoUrl: "",
      architecture: "Designed with Python Flask adhering to REST principles. Integrates SQLAlchemy ORM with PostgreSQL, utilizing indexed query optimizations on applicant statuses. Incorporates an asynchronous background worker for triggered notification emails upon job milestone changes.",
      hasSvgDiagram: false
    },
    {
      id: 5,
      title: "Employee Stress Analysis & Prediction",
      categories: ["data-ml"],
      displayCategory: "Data / Machine Learning",
      shortDesc: "Predictive ML pipeline analyzing workplace factors (workload, hours, satisfaction) with Logistic Regression & Random Forest achieving 85% accuracy.",
      tags: ["Python", "Scikit-learn", "Logistic Regression", "Random Forest", "Data Analytics"],
      githubUrl: "https://github.com/ajazjamadar/Employee-Stress-Prediction",
      demoUrl: "",
      architecture: "Machine learning workflow built with Python and Scikit-learn. Cleans dataset outliers, encodes categorical work variables, and evaluates Logistic Regression against Random Forest ensembles, yielding 85% accuracy and actionable feature importance rankings.",
      hasSvgDiagram: false
    },
    {
      id: 6,
      title: "Cloud-Native Web Deployment & Infrastructure Automation",
      categories: ["devops"],
      displayCategory: "DevOps / Cloud",
      shortDesc: "Terraform-provisioned AWS infrastructure (IaC); Ansible Playbooks for server config and deployment; Jenkins + GitHub CI/CD; Dockerized apps on EC2 behind an Nginx reverse proxy with Tomcat.",
      tags: ["AWS", "Terraform", "Ansible", "Jenkins", "Docker", "Nginx", "Tomcat", "Linux"],
      githubUrl: "https://github.com/ajazjamadar/Terraform-cloud-GitHub",
      demoUrl: "",
      architecture: "Automated AWS infrastructure via modular Terraform templates (VPC, subnets, EC2, security groups). Configured environment dependencies and services via Ansible Playbooks. Jenkins continuously retrieves source from GitHub, builds Docker containers, and deploys them to AWS EC2 instances fronted by Nginx reverse proxy load balancing to Tomcat.",
      hasSvgDiagram: true,
      diagramType: "cloud-infra"
    },
    {
      id: 7,
      title: "One-Click CI/CD Deployment Platform",
      categories: ["devops"],
      displayCategory: "DevOps / CI/CD",
      shortDesc: "End-to-end CI/CD for Java web apps; GitHub webhooks trigger Jenkins; Maven packaging, Docker containerization, Kubernetes deployment; Prometheus/Grafana monitoring with PagerDuty alerting.",
      tags: ["Jenkins", "GitHub", "Maven", "Docker", "Tomcat", "Kubernetes", "Prometheus", "Grafana", "PagerDuty"],
      githubUrl: "https://github.com/ajazjamadar/maven-project",
      demoUrl: "",
      architecture: "Complete automated pipeline: Developer code push triggers GitHub webhook -> Jenkins pipeline compiles & runs automated unit tests via Maven -> Packages artifacts into Docker image -> Pushes to image registry -> Dispatches rolling deployment to Kubernetes cluster. Full observability through Prometheus metric scraping, Grafana dash alerting, and PagerDuty incident routing.",
      hasSvgDiagram: true,
      diagramType: "cicd-k8s"
    }
  ],

  // Certifications & Awards
  certifications: [
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS Skill Builder",
      year: "May 2026",
      type: "cert",
      badgeText: "Certification"
    },
    {
      title: "AWS Solution Architect Associate",
      issuer: "Udemy",
      year: "2026",
      type: "course",
      badgeText: "Course"
    },
    {
      title: "Java + Spring Boot: From Basics to Advanced",
      issuer: "Udemy",
      year: "2025",
      type: "cert",
      badgeText: "Certification"
    },
    {
      title: "Java Spring Security",
      issuer: "Udemy",
      year: "2025",
      type: "cert",
      badgeText: "Certification"
    },
    {
      title: "REST APIs with Flask and Python in 2025",
      issuer: "Udemy",
      year: "2025",
      type: "cert",
      badgeText: "Certification"
    },
    {
      title: "SQL Programming Basics",
      issuer: "Technical Assessment",
      year: "2025",
      type: "cert",
      badgeText: "Certification"
    },
    {
      title: "HTML5, CSS3, JavaScript",
      issuer: "Infosys Springboard",
      year: "2025",
      type: "cert",
      badgeText: "Certification"
    },
    {
      title: "Hack Yugma Hackathon 2025",
      issuer: "Built a full-stack cybersecurity solution under competition conditions",
      year: "2025",
      type: "award",
      badgeText: "Honor / Hackathon"
    },
    {
      title: "2nd Place — Intra-College Technical Quiz & Mind Matrix",
      issuer: "IQ Arena & Mind Matrix, Sankalp 2025",
      year: "2025",
      type: "award",
      badgeText: "Award"
    },
    {
      title: "Best Outgoing Student Award",
      issuer: "Shree Devi Institute of Technology (SDIT)",
      year: "2022–2026",
      type: "award",
      badgeText: "Academic Honor"
    }
  ],

  // Speaking & Public Address Engagements
  speakingShowcase: [
    {
      id: "speech-1",
      image: "assets/leadership-speaking-2.jpg",
      alt: "Md Ejazuddin Jamadar delivering keynote speech at podium",
      badge: "Keynote Speaker",
      roleTag: "Department Vice President",
      venue: "SDIT Main Auditorium · Mangalore",
      title: "Departmental Presidential Address & Technical Symposia",
      description: "Delivering a keynote address before 300+ students, faculty members, and external industry guests. Articulated strategic department goals, introduced competitive technical programs, and emphasized cloud, backend architectures, and engineering rigor.",
      tags: ["Keynote Address", "Public Speaking", "Strategic Vision", "Audience Engagement"]
    },
    {
      id: "speech-2",
      image: "assets/leadership-speaking-3.jpg",
      alt: "Md Ejazuddin Jamadar presiding over department inaugural ceremony",
      badge: "Ceremonial Direction",
      roleTag: "General Secretary & Executive Lead",
      venue: "Annual Departmental Summit",
      title: "Annual Inauguration & Student Council Governance",
      description: "Presiding over formal academic inaugurations and student council assemblies. Spearheaded cross-functional committee planning, welcomed distinguished guests, and established milestone-driven roadmaps for campus hackathons and workshops.",
      tags: ["Student Governance", "Ceremonial Address", "Event Moderation", "Cross-Functional Ops"]
    },
    {
      id: "speech-3",
      image: "assets/leadership-speaking-1.jpg",
      alt: "Md Ejazuddin Jamadar mentoring and addressing student orientation",
      badge: "Mentorship & Induction",
      roleTag: "Student Mentor & Technical Lead",
      venue: "Student Orientation & Technical Forums",
      title: "Technical Orientation, Mentorship & Community Outreach",
      description: "Leading interactive orientation talks and peer mentoring sessions for junior engineering batches. Provided actionable roadmaps covering data structures, Java backend fundamentals, CI/CD practices, and technical interview preparation.",
      tags: ["Peer Mentorship", "Technical Orientation", "Talent Development", "Community Building"]
    }
  ],

  // Leadership Roles
  leadership: [
    {
      role: "Vice President",
      organization: "Dept. of Information Science & Engineering, SDIT",
      period: "2025 – 2026",
      description: "Managing student committees, organizing departmental technical initiatives, coordinating with faculty, and driving successful academic and technical symposia."
    },
    {
      role: "General Secretary",
      organization: "Dept. of Information Science & Engineering, SDIT",
      period: "2024 – 2025",
      description: "Led departmental programs, managed event logistics, represented student body interests, and collaborated on technical workshops."
    },
    {
      role: "Joint Secretary",
      organization: "Dept. of Information Science & Engineering, SDIT",
      period: "2023 – 2024",
      description: "Assisted in student activity coordination, departmental communications, and technical competition arrangements."
    },
    {
      role: "Media & Publicity Head",
      organization: "SDIT IEEE Student Chapter",
      period: "2024 – 2026",
      description: "Spearheaded promotional outreach, brand positioning, audience engagement, and social media campaigns for regional IEEE events."
    }
  ]
};

/**
 * ============================================================================
 * SVG ICONS DICTIONARY
 * Clean, lightweight inline SVG symbols
 * ============================================================================
 */
const SVG_ICONS = {
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  server: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
  "check-circle": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  layout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
  cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
  "git-merge": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg>`,
  box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
  cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
  terminal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
  activity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  external: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  github: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`
};

/**
 * ============================================================================
 * STATE MANAGEMENT
 * ============================================================================
 */
let currentRole = "developer";
let activeFilter = "all";
let typingTimer = null;
let currentModalTrigger = null;

/**
 * Read Initial Role from URL hash or localStorage (fallback: developer)
 */
function getInitialRole() {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  if (hash === "devops" || hash === "developer") {
    return hash;
  }
  try {
    const saved = localStorage.getItem("portfolio_role");
    if (saved === "devops" || saved === "developer") {
      return saved;
    }
  } catch (e) {
    console.warn("localStorage access restricted:", e);
  }
  return "developer";
}

/**
 * Main Switcher Function
 */
function setRole(role, updateHash = true) {
  if (role !== "developer" && role !== "devops") role = "developer";
  currentRole = role;

  // 1. Update HTML data-mode attribute
  document.documentElement.setAttribute("data-mode", role);

  // 2. Persist in localStorage
  try {
    localStorage.setItem("portfolio_role", role);
  } catch (e) {
    console.warn("Unable to save role in localStorage:", e);
  }

  // 3. Reflect in URL hash
  if (updateHash && window.location.hash !== `#${role}`) {
    history.replaceState(null, "", `#${role}`);
  }

  // 4. Update segmented toggle buttons in Navbar, Mobile, and Hero
  const allRoleButtons = document.querySelectorAll(".role-btn");
  allRoleButtons.forEach(btn => {
    const isTarget = btn.getAttribute("data-role") === role;
    btn.classList.toggle("active", isTarget);
    btn.setAttribute("aria-pressed", isTarget ? "true" : "false");
  });

  const modeData = PORTFOLIO_DATA.modes[role];

  // 5. Update Hero Headlines & Pitch
  const heroPitchEl = document.getElementById("heroPitch");
  if (heroPitchEl) {
    heroPitchEl.textContent = modeData.pitch;
  }

  // 6. Update Resume Download Links
  const resumeConfig = PORTFOLIO_DATA.resumes[role];
  const resumeLinks = document.querySelectorAll(".resume-btn");
  resumeLinks.forEach(link => {
    link.setAttribute("href", resumeConfig.file);
    link.setAttribute("download", resumeConfig.filename);
  });

  // 7. Restart Hero Typing Animation
  startTypingEffect(modeData.typingPhrases);

  // 8. Update Terminal Card Session
  updateTerminal(modeData.terminal);

  // 9. Update About Section Profile Summary
  const summaryBadgeText = document.getElementById("summaryBadgeText");
  const summaryText = document.getElementById("summaryText");
  if (summaryBadgeText) summaryBadgeText.textContent = modeData.summaryBadge;
  if (summaryText) summaryText.textContent = modeData.summary;

  // 10. Re-render Skills according to role ordering
  renderSkills(role);

  // 11. Re-render Experience Timeline (handling dynamic bullets)
  renderExperience(role);

  // 12. Re-render Projects Grid (with appropriate role ordering & active filter)
  renderProjects(role, activeFilter);

  // Dispatch custom event for telemetry or external hooks if needed
  window.dispatchEvent(new CustomEvent("portfolio:roleswitched", { detail: { role } }));
}

/**
 * ============================================================================
 * TYPING EFFECT ENGINE (HERO ROLE LINE)
 * ============================================================================
 */
function startTypingEffect(phrases) {
  if (typingTimer) clearTimeout(typingTimer);
  const heroRoleEl = document.getElementById("heroRole");
  if (!heroRoleEl) return;

  // If user prefers reduced motion, simply display primary role title
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    heroRoleEl.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      charIndex--;
      heroRoleEl.textContent = currentPhrase.substring(0, charIndex);
    } else {
      charIndex++;
      heroRoleEl.textContent = currentPhrase.substring(0, charIndex);
    }

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at end of phrase
      delay = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 350;
    }

    typingTimer = setTimeout(tick, delay);
  }

  tick();
}

/**
 * ============================================================================
 * TERMINAL CARD COMPONENT
 * ============================================================================
 */
function updateTerminal(terminalData) {
  const titleEl = document.getElementById("terminalTitle");
  const bodyEl = document.getElementById("terminalBody");
  if (titleEl) titleEl.textContent = terminalData.title;
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div class="term-cmd"><span style="color: var(--text-muted);">$</span> ${terminalData.command.replace(/\n/g, '<br><span style="color: var(--text-muted);">$</span> ')}</div>
      ${terminalData.responseHtml}
    `;
  }
}

/**
 * Copy terminal command to clipboard
 */
function initTerminalCopy() {
  const copyBtn = document.getElementById("terminalCopyBtn");
  if (!copyBtn) return;
  copyBtn.addEventListener("click", () => {
    const modeData = PORTFOLIO_DATA.modes[currentRole];
    copyToClipboard(modeData.terminal.command, "Terminal command copied to clipboard!");
  });
}

/**
 * ============================================================================
 * SKILLS SECTION RENDERER
 * ============================================================================
 */
function renderSkills(role) {
  const container = document.getElementById("skillsGrid");
  if (!container) return;

  const categories = PORTFOLIO_DATA.modes[role].skillsOrder;
  let html = "";

  categories.forEach(catKey => {
    const skillGroup = PORTFOLIO_DATA.skills[catKey];
    if (!skillGroup) return;

    const iconSvg = SVG_ICONS[skillGroup.icon] || SVG_ICONS.code;
    const chipsHtml = skillGroup.items
      .map(item => `<span class="skill-chip">${item}</span>`)
      .join("");

    html += `
      <div class="glass-card skill-card reveal">
        <div class="skill-header">
          <div class="skill-cat-icon" aria-hidden="true">${iconSvg}</div>
          <h3 class="skill-title">${skillGroup.category}</h3>
        </div>
        <div class="skill-chips-wrap">
          ${chipsHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  initCardMouseGlow(container);
  observeNewReveals(container);
}

/**
 * ============================================================================
 * EXPERIENCE TIMELINE RENDERER
 * ============================================================================
 */
function renderExperience(role) {
  const container = document.getElementById("experienceTimeline");
  if (!container) return;

  let html = "";

  PORTFOLIO_DATA.experience.forEach(item => {
    let roleTitle = item.role;
    let bullets = item.bullets;

    // Handle dynamic CODTECH entry
    if (item.isDynamicRole) {
      roleTitle = PORTFOLIO_DATA.modes[role].codtechRole;
      bullets = PORTFOLIO_DATA.modes[role].codtechBullets;
    }

    const bulletsHtml = bullets && bullets.length > 0
      ? `<ul class="exp-bullets">
          ${bullets.map(b => `<li class="exp-bullet-item">${b}</li>`).join("")}
        </ul>`
      : "";

    html += `
      <div class="timeline-item reveal">
        <div class="timeline-node" aria-hidden="true"></div>
        <div class="glass-card experience-card">
          <div class="exp-header">
            <div>
              <h3 class="exp-role-title">${roleTitle}</h3>
              <div class="exp-company">${item.company}</div>
            </div>
            <span class="exp-date-badge">${item.dates}</span>
          </div>
          <div class="exp-location">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${item.location}</span>
          </div>
          ${bulletsHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  initCardMouseGlow(container);
  observeNewReveals(container);
}

/**
 * ============================================================================
 * PROJECTS SECTION & FILTERING
 * ============================================================================
 */
function renderProjects(role, filter = "all") {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  activeFilter = filter;
  const projectOrder = PORTFOLIO_DATA.modes[role].projectsOrder;
  
  // Sort projects according to active mode priority
  const orderedProjects = [...PORTFOLIO_DATA.projects].sort((a, b) => {
    const indexA = projectOrder.indexOf(a.id);
    const indexB = projectOrder.indexOf(b.id);
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });

  let html = "";

  orderedProjects.forEach(proj => {
    const isVisible = filter === "all" || proj.categories.includes(filter);
    const chipsHtml = proj.tags
      .map(tag => `<span class="project-chip">${tag}</span>`)
      .join("");

    // Render action buttons only if URL is provided
    let githubBtnHtml = "";
    if (proj.githubUrl && proj.githubUrl.trim() !== "") {
      githubBtnHtml = `
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary" aria-label="View ${proj.title} on GitHub">
          ${SVG_ICONS.github}
          <span>GitHub</span>
        </a>
      `;
    }

    let demoBtnHtml = "";
    if (proj.demoUrl && proj.demoUrl.trim() !== "") {
      demoBtnHtml = `
        <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" aria-label="Open live demo of ${proj.title}">
          ${SVG_ICONS.external}
          <span>Live Demo</span>
        </a>
      `;
    }

    html += `
      <div class="glass-card project-card reveal ${isVisible ? '' : 'hidden'}" data-project-id="${proj.id}">
        <div class="project-top-row">
          <span class="project-category-tag">${proj.displayCategory}</span>
          ${proj.hasSvgDiagram ? '<span class="project-category-tag" style="color: var(--accent-secondary); border-color: var(--accent-secondary);">Architecture SVG</span>' : ''}
        </div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.shortDesc}</p>
        <div class="project-tech-chips">
          ${chipsHtml}
        </div>
        <div class="project-actions">
          <button type="button" class="btn btn-sm btn-glass project-modal-btn" data-modal-project="${proj.id}">
            <span>Architecture &amp; Details</span>
          </button>
          ${githubBtnHtml}
          ${demoBtnHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  initCardMouseGlow(container);
  observeNewReveals(container);
  bindProjectModalButtons();
}

/**
 * Project filter bar handler
 */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const selectedFilter = btn.getAttribute("data-filter");
      renderProjects(currentRole, selectedFilter);
    });
  });
}

/**
 * ============================================================================
 * SVG ARCHITECTURE DIAGRAMS (FOR DEVOPS PROJECTS 3 & 4)
 * Responsive, crisp SVG inline components
 * ============================================================================
 */
function generateDevOpsCloudSvg() {
  return `
    <div class="arch-diagram-wrapper">
      <svg class="arch-svg" viewBox="0 0 880 230" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cloudGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#06b6d4" />
            <stop offset="100%" stop-color="#10b981" />
          </linearGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Node 1: Developer / Git -->
        <rect x="20" y="70" width="115" height="75" rx="10" fill="#131826" stroke="#22d3ee" stroke-width="1.5" />
        <text x="77" y="102" fill="#e8eaf0" font-family="Space Grotesk, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Git / GitHub</text>
        <text x="77" y="122" fill="#9aa3b5" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Code Commit</text>

        <!-- Arrow 1 -> 2 -->
        <line x1="135" y1="107" x2="175" y2="107" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4 4" />
        <polygon points="175,107 167,102 167,112" fill="#06b6d4" />
        <text x="155" y="96" fill="#06b6d4" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Webhook</text>

        <!-- Node 2: Jenkins CI Server -->
        <rect x="180" y="65" width="125" height="85" rx="10" fill="#131826" stroke="#06b6d4" stroke-width="1.8" />
        <text x="242" y="98" fill="#e8eaf0" font-family="Space Grotesk, sans-serif" font-size="13" font-weight="700" text-anchor="middle">Jenkins CI</text>
        <text x="242" y="118" fill="#9aa3b5" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Automated Pipeline</text>
        <text x="242" y="134" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">Build &amp; Test</text>

        <!-- Arrow 2 -> 3 (IaC Terraform) -->
        <line x1="305" y1="92" x2="355" y2="60" stroke="#a855f7" stroke-width="2" />
        <polygon points="355,60 345,60 350,69" fill="#a855f7" />

        <!-- Node 3: Terraform AWS IaC -->
        <rect x="360" y="20" width="135" height="70" rx="10" fill="#131826" stroke="#a855f7" stroke-width="1.5" />
        <text x="427" y="48" fill="#e8eaf0" font-family="Space Grotesk, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Terraform (IaC)</text>
        <text x="427" y="68" fill="#9aa3b5" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">AWS VPC / EC2 / ALB</text>

        <!-- Arrow 2 -> 4 (Ansible Config) -->
        <line x1="305" y1="125" x2="355" y2="155" stroke="#f59e0b" stroke-width="2" />
        <polygon points="355,155 350,146 345,155" fill="#f59e0b" />

        <!-- Node 4: Ansible Playbooks -->
        <rect x="360" y="130" width="135" height="70" rx="10" fill="#131826" stroke="#f59e0b" stroke-width="1.5" />
        <text x="427" y="158" fill="#e8eaf0" font-family="Space Grotesk, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Ansible Playbooks</text>
        <text x="427" y="178" fill="#9aa3b5" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Config &amp; Provisioning</text>

        <!-- Connect to AWS Cloud Boundary -->
        <line x1="495" y1="55" x2="540" y2="90" stroke="#06b6d4" stroke-width="2" />
        <line x1="495" y1="165" x2="540" y2="120" stroke="#06b6d4" stroke-width="2" />

        <!-- AWS Cloud Container Box -->
        <rect x="545" y="30" width="315" height="170" rx="14" fill="#0d111d" stroke="url(#cloudGrad)" stroke-width="2" stroke-dasharray="6 3" />
        <text x="560" y="52" fill="#10b981" font-family="JetBrains Mono" font-size="11" font-weight="700">AWS Cloud Environment (EC2)</text>

        <!-- Inside AWS: Nginx Reverse Proxy -->
        <rect x="565" y="75" width="115" height="95" rx="8" fill="#161b2b" stroke="#06b6d4" stroke-width="1.2" />
        <text x="622" y="105" fill="#e8eaf0" font-family="Space Grotesk, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Nginx Proxy</text>
        <text x="622" y="125" fill="#9aa3b5" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Port 80/443</text>
        <text x="622" y="145" fill="#38bdf8" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">SSL &amp; Balancing</text>

        <!-- Inside AWS: Docker / Tomcat Container -->
        <line x1="680" y1="122" x2="715" y2="122" stroke="#10b981" stroke-width="2" />
        <polygon points="715,122 707,117 707,127" fill="#10b981" />

        <rect x="720" y="75" width="125" height="95" rx="8" fill="#161b2b" stroke="#10b981" stroke-width="1.2" />
        <text x="782" y="105" fill="#e8eaf0" font-family="Space Grotesk, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Docker Container</text>
        <text x="782" y="125" fill="#9aa3b5" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Apache Tomcat</text>
        <text x="782" y="145" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">Java Web App</text>
      </svg>
    </div>
  `;
}

function generateDevOpsCicdSvg() {
  return `
    <div class="arch-diagram-wrapper">
      <svg class="arch-svg" viewBox="0 0 920 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cicdGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#6366f1" />
            <stop offset="50%" stop-color="#22d3ee" />
            <stop offset="100%" stop-color="#10b981" />
          </linearGradient>
        </defs>

        <!-- Stage 1: GitHub Webhook -->
        <rect x="20" y="80" width="110" height="70" rx="10" fill="#131826" stroke="#818cf8" stroke-width="1.5" />
        <text x="75" y="110" fill="#e8eaf0" font-family="Space Grotesk, sans-serif" font-size="12" font-weight="700" text-anchor="middle">GitHub</text>
        <text x="75" y="130" fill="#9aa3b5" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Webhook Push</text>

        <!-- Arrow 1 -> 2 -->
        <line x1="130" y1="115" x2="165" y2="115" stroke="#22d3ee" stroke-width="2" />
        <polygon points="165,115 157,110 157,120" fill="#22d3ee" />

        <!-- Stage 2: Jenkins Automation Pipeline -->
        <rect x="170" y="70" width="125" height="90" rx="10" fill="#131826" stroke="#06b6d4" stroke-width="1.8" />
        <text x="232" y="102" fill="#e8eaf0" font-family="Space Grotesk, sans-serif" font-size="13" font-weight="700" text-anchor="middle">Jenkins CI/CD</text>
        <text x="232" y="122" fill="#9aa3b5" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Maven Test/Package</text>
        <text x="232" y="140" fill="#38bdf8" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">Pipeline Stages</text>

        <!-- Arrow 2 -> 3 -->
        <line x1="295" y1="115" x2="335" y2="115" stroke="#22d3ee" stroke-width="2" />
        <polygon points="335,115 327,110 327,120" fill="#22d3ee" />

        <!-- Stage 3: Docker Packaging -->
        <rect x="340" y="75" width="120" height="80" rx="10" fill="#131826" stroke="#22d3ee" stroke-width="1.5" />
        <text x="400" y="107" fill="#e8eaf0" font-family="Space Grotesk, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Docker Engine</text>
        <text x="400" y="127" fill="#9aa3b5" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Container Build</text>
        <text x="400" y="142" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">Tag &amp; Push</text>

        <!-- Arrow 3 -> 4 -->
        <line x1="460" y1="115" x2="500" y2="115" stroke="#10b981" stroke-width="2" />
        <polygon points="500,115 492,110 492,120" fill="#10b981" />

        <!-- Stage 4: Kubernetes Production Cluster -->
        <rect x="505" y="45" width="180" height="140" rx="12" fill="#0e1320" stroke="#10b981" stroke-width="2" />
        <text x="595" y="72" fill="#34d399" font-family="Space Grotesk, sans-serif" font-size="13" font-weight="700" text-anchor="middle">Kubernetes Cluster</text>
        <text x="595" y="90" fill="#9aa3b5" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Tomcat Application Pods</text>
        <rect x="525" y="105" width="65" height="55" rx="6" fill="#182032" stroke="#34d399" stroke-width="1" />
        <text x="557" y="128" fill="#e8eaf0" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Pod-1</text>
        <text x="557" y="144" fill="#34d399" font-family="JetBrains Mono" font-size="8" text-anchor="middle">Running</text>
        <rect x="605" y="105" width="65" height="55" rx="6" fill="#182032" stroke="#34d399" stroke-width="1" />
        <text x="637" y="128" fill="#e8eaf0" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Pod-2</text>
        <text x="637" y="144" fill="#34d399" font-family="JetBrains Mono" font-size="8" text-anchor="middle">Running</text>

        <!-- Monitoring & Incident Observability Stack -->
        <!-- Link from K8s to Observability -->
        <line x1="685" y1="115" x2="735" y2="115" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 4" />
        <polygon points="735,115 727,110 727,120" fill="#f59e0b" />
        <text x="710" y="105" fill="#f59e0b" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Metrics</text>

        <rect x="740" y="40" width="165" height="150" rx="12" fill="#0d111d" stroke="#f59e0b" stroke-width="1.6" />
        <text x="822" y="68" fill="#fbbf24" font-family="Space Grotesk, sans-serif" font-size="13" font-weight="700" text-anchor="middle">Observability Stack</text>

        <rect x="755" y="80" width="135" height="30" rx="6" fill="#1c1917" stroke="#fbbf24" stroke-width="1" />
        <text x="822" y="100" fill="#fde047" font-family="JetBrains Mono" font-size="10" text-anchor="middle">Prometheus Scraper</text>

        <rect x="755" y="116" width="135" height="30" rx="6" fill="#1c1917" stroke="#fbbf24" stroke-width="1" />
        <text x="822" y="136" fill="#fde047" font-family="JetBrains Mono" font-size="10" text-anchor="middle">Grafana Dashboards</text>

        <rect x="755" y="152" width="135" height="26" rx="6" fill="#450a0a" stroke="#ef4444" stroke-width="1" />
        <text x="822" y="169" fill="#fca5a5" font-family="JetBrains Mono" font-size="9" font-weight="700" text-anchor="middle">PagerDuty Alerts</text>
      </svg>
    </div>
  `;
}

/**
 * ============================================================================
 * PROJECT MODAL CONTROLLER & FOCUS TRAP
 * ============================================================================
 */
function bindProjectModalButtons() {
  const modalBtns = document.querySelectorAll(".project-modal-btn");
  modalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const projId = parseInt(btn.getAttribute("data-modal-project"), 10);
      openProjectModal(projId, btn);
    });
  });
}

function openProjectModal(projectId, triggerElement) {
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalCategory = document.getElementById("modalCategory");
  const modalBody = document.getElementById("modalBody");
  if (!modal || !modalBody) return;

  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  currentModalTrigger = triggerElement;

  modalTitle.textContent = project.title;
  modalCategory.textContent = project.displayCategory;

  let diagramSection = "";
  if (project.hasSvgDiagram) {
    if (project.diagramType === "cloud-infra") {
      diagramSection = `
        <h4 class="modal-section-title">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect></svg>
          Cloud Infrastructure Topology
        </h4>
        ${generateDevOpsCloudSvg()}
      `;
    } else if (project.diagramType === "cicd-k8s") {
      diagramSection = `
        <h4 class="modal-section-title">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg>
          Automated CI/CD & Observability Pipeline
        </h4>
        ${generateDevOpsCicdSvg()}
      `;
    }
  }

  const chipsHtml = project.tags
    .map(t => `<span class="project-chip">${t}</span>`)
    .join("");

  modalBody.innerHTML = `
    <p class="modal-text">${project.shortDesc}</p>

    <h4 class="modal-section-title">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      Architecture &amp; Engineering Details
    </h4>
    <p class="modal-text">${project.architecture}</p>

    ${diagramSection}

    <h4 class="modal-section-title">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect></svg>
      Key Technologies
    </h4>
    <div class="project-tech-chips" style="margin-bottom: 1.5rem;">
      ${chipsHtml}
    </div>

    <div class="modal-actions" style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
      ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">${SVG_ICONS.github} <span>View GitHub Repository</span></a>` : ''}
      ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${SVG_ICONS.external} <span>Live Demo</span></a>` : ''}
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Focus trap
  const closeBtn = document.getElementById("modalCloseBtn");
  if (closeBtn) closeBtn.focus();
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  if (!modal || !modal.classList.contains("open")) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (currentModalTrigger) {
    currentModalTrigger.focus();
    currentModalTrigger = null;
  }
}

function initModalKeyboardAndEvents() {
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProjectModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  // Lightbox Modal Controls
  const lightboxModal = document.getElementById("imageLightboxModal");
  const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener("click", closeImageLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        closeImageLightbox();
      }
    });
  }

  // Keyboard navigation: Escape key to close, and tab focus trapping
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (lightboxModal && lightboxModal.classList.contains("open")) {
        closeImageLightbox();
        return;
      }
      if (modal && modal.classList.contains("open")) {
        closeProjectModal();
        return;
      }
    }

    const activeModal = (lightboxModal && lightboxModal.classList.contains("open")) ? lightboxModal : (modal && modal.classList.contains("open")) ? modal : null;

    if (e.key === "Tab" && activeModal) {
      const focusableElements = activeModal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  });
}

/**
 * ============================================================================
 * CERTIFICATIONS & AWARDS RENDERER
 * ============================================================================
 */
function renderCertifications() {
  const container = document.getElementById("certsGrid");
  if (!container) return;

  let html = "";
  PORTFOLIO_DATA.certifications.forEach(cert => {
    let tagClass = "cert-tag-cert";
    if (cert.type === "course") tagClass = "cert-tag-course";
    if (cert.type === "award") tagClass = "cert-tag-award";

    html += `
      <div class="glass-card cert-card reveal">
        <div class="cert-top">
          <span class="cert-tag ${tagClass}">${cert.badgeText}</span>
          <span class="exp-date-badge">${cert.year}</span>
        </div>
        <h3 class="cert-title">${cert.title}</h3>
        <p class="cert-issuer">${cert.issuer}</p>
      </div>
    `;
  });

  container.innerHTML = html;
  initCardMouseGlow(container);
  observeNewReveals(container);
}

/**
 * ============================================================================
 * LEADERSHIP & PUBLIC SPEAKING RENDERER & LIGHTBOX
 * ============================================================================
 */
let currentLightboxIndex = 0;
let currentLightboxTrigger = null;

function openImageLightbox(index, triggerEl = null) {
  const modal = document.getElementById("imageLightboxModal");
  if (!modal || !PORTFOLIO_DATA.speakingShowcase || !PORTFOLIO_DATA.speakingShowcase[index]) return;

  currentLightboxIndex = index;
  currentLightboxTrigger = triggerEl;
  const item = PORTFOLIO_DATA.speakingShowcase[index];

  const imgEl = document.getElementById("lightboxImg");
  const badgeEl = document.getElementById("lightboxBadge");
  const captionEl = document.getElementById("lightboxCaption");
  const venueEl = document.getElementById("lightboxVenue");
  const descEl = document.getElementById("lightboxDesc");
  const tagsEl = document.getElementById("lightboxTags");

  if (imgEl) {
    imgEl.src = item.image;
    imgEl.alt = item.alt;
  }
  if (badgeEl) badgeEl.textContent = item.badge;
  if (captionEl) captionEl.textContent = item.title;
  if (venueEl) venueEl.textContent = `${item.roleTag} · ${item.venue}`;
  if (descEl) descEl.textContent = item.description;
  if (tagsEl) {
    tagsEl.innerHTML = item.tags.map(t => `<span class="lightbox-tag">${t}</span>`).join("");
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const closeBtn = document.getElementById("lightboxCloseBtn");
  if (closeBtn) closeBtn.focus();
}

function closeImageLightbox() {
  const modal = document.getElementById("imageLightboxModal");
  if (!modal || !modal.classList.contains("open")) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (currentLightboxTrigger) {
    currentLightboxTrigger.focus();
    currentLightboxTrigger = null;
  }
}

function bindSpeakingLightboxEvents(container) {
  const cards = container.querySelectorAll(".speaking-card");
  cards.forEach(card => {
    const idx = parseInt(card.getAttribute("data-lightbox-index"), 10);
    card.addEventListener("click", () => {
      openImageLightbox(idx, card);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openImageLightbox(idx, card);
      }
    });
  });
}

function renderLeadership() {
  // 1. Render Speaking Engagements Visual Showcase
  const speakingContainer = document.getElementById("speakingGrid");
  if (speakingContainer && PORTFOLIO_DATA.speakingShowcase) {
    let speakingHtml = "";
    PORTFOLIO_DATA.speakingShowcase.forEach((item, index) => {
      const tagsHtml = item.tags.map(t => `<span class="speaking-tag">${t}</span>`).join("");
      speakingHtml += `
        <article class="glass-card speaking-card reveal" data-lightbox-index="${index}" tabindex="0" role="button" aria-label="View speaking photo: ${item.title}">
          <div class="speaking-img-box">
            <img src="${item.image}" alt="${item.alt}" class="speaking-img" loading="lazy" />
            <div class="speaking-overlay">
              <span class="speaking-badge">${item.badge}</span>
              <span class="speaking-zoom-btn" aria-hidden="true" title="Enlarge photo">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
              </span>
            </div>
          </div>
          <div class="speaking-body">
            <div class="speaking-meta">
              <span class="speaking-role-tag">${item.roleTag}</span>
              <span class="speaking-venue">${item.venue}</span>
            </div>
            <h4 class="speaking-title">${item.title}</h4>
            <p class="speaking-desc">${item.description}</p>
            <div class="speaking-tags">
              ${tagsHtml}
            </div>
          </div>
        </article>
      `;
    });
    speakingContainer.innerHTML = speakingHtml;
    bindSpeakingLightboxEvents(speakingContainer);
    initCardMouseGlow(speakingContainer);
    observeNewReveals(speakingContainer);
  }

  // 2. Render Positions of Responsibility Timeline
  const container = document.getElementById("leadershipTimeline");
  if (!container) return;

  let html = "";
  PORTFOLIO_DATA.leadership.forEach(item => {
    html += `
      <div class="glass-card leadership-card reveal">
        <span class="leader-badge">${item.period}</span>
        <h3 class="leader-role">${item.role}</h3>
        <p class="leader-org">${item.organization}</p>
        <p class="leader-desc">${item.description}</p>
      </div>
    `;
  });

  container.innerHTML = html;
  initCardMouseGlow(container);
  observeNewReveals(container);
}

/**
 * ============================================================================
 * STATS COUNTER ANIMATION
 * ============================================================================
 */
function initStatsCounter() {
  const statsRow = document.getElementById("statsRow");
  if (!statsRow) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        const statNumbers = statsRow.querySelectorAll(".stat-number");
        statNumbers.forEach(numEl => {
          const target = parseInt(numEl.getAttribute("data-target"), 10) || 0;
          let current = 0;
          const duration = 1200; // ms
          const stepTime = 40;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              numEl.textContent = target;
              clearInterval(timer);
            } else {
              numEl.textContent = Math.floor(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsRow);
}

/**
 * ============================================================================
 * CARD MOUSE-FOLLOWING SPOTLIGHT GLOW
 * ============================================================================
 */
function initCardMouseGlow(root = document) {
  const cards = root.querySelectorAll(".glass-card");
  cards.forEach(card => {
    if (card._hasGlowListener) return;
    card._hasGlowListener = true;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--mouse-x", "-999px");
      card.style.setProperty("--mouse-y", "-999px");
    });
  });
}

/**
 * ============================================================================
 * TOAST NOTIFICATIONS & CLIPBOARD HELPER
 * ============================================================================
 */
function showToast(message, duration = 3000) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.innerHTML = `
    <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, duration);
}

function copyToClipboard(text, successMessage = "Copied to clipboard!") {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => showToast(successMessage))
      .catch(() => fallbackCopy(text, successMessage));
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  textArea.style.top = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(successMessage);
  } catch (err) {
    console.error("Fallback copy failed:", err);
    showToast("Copy failed. Please copy manually.");
  }
  document.body.removeChild(textArea);
}

function initCopyButtons() {
  const copyButtons = document.querySelectorAll(".copy-btn");
  copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (textToCopy) {
        copyToClipboard(textToCopy);
      }
    });
  });
}

/**
 * ============================================================================
 * CONTACT FORM VALIDATION & DISPATCH
 * ============================================================================
 */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nameInput = document.getElementById("formName");
  const emailInput = document.getElementById("formEmail");
  const roleSelect = document.getElementById("formRoleInterest");
  const messageInput = document.getElementById("formMessage");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      nameError.classList.add("visible");
      isValid = false;
    } else {
      nameError.classList.remove("visible");
    }

    // Validate Email
    if (!validateEmail(emailInput.value.trim())) {
      emailError.classList.add("visible");
      isValid = false;
    } else {
      emailError.classList.remove("visible");
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageError.classList.add("visible");
      isValid = false;
    } else {
      messageError.classList.remove("visible");
    }

    if (!isValid) return;

    // Assemble mailto link
    const recipient = PORTFOLIO_DATA.identity.email;
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${roleSelect.value} - From ${nameInput.value.trim()}`);
    const body = encodeURIComponent(
      `Hi Md Ejazuddin,\n\n${messageInput.value.trim()}\n\n---\nSender: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\nInterested in: ${roleSelect.value}`
    );

    const mailtoUri = `mailto:${recipient}?subject=${subject}&body=${body}`;

    showToast("Launching your email client...");
    window.location.href = mailtoUri;

    // Optional Formspree Hook:
    // If you wire Formspree, you can use:
    // fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", body: new FormData(form), headers: { 'Accept': 'application/json' } })

    form.reset();
  });
}

/**
 * ============================================================================
 * NAVIGATION, MOBILE DRAWER & SCROLL SPY
 * ============================================================================
 */
function initNavigation() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  function openDrawer() {
    mobileDrawer.classList.add("open");
    drawerBackdrop.classList.add("open");
    mobileDrawer.setAttribute("aria-hidden", "false");
    drawerBackdrop.setAttribute("aria-hidden", "false");
    mobileMenuBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("open");
    drawerBackdrop.classList.remove("open");
    mobileDrawer.setAttribute("aria-hidden", "true");
    drawerBackdrop.setAttribute("aria-hidden", "true");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  // Active section scroll spy
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav .nav-link");

  function updateActiveNav() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
}

/**
 * Back to top button
 */
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/**
 * ============================================================================
 * INTERSECTION OBSERVER FOR SCROLL REVEALS
 * ============================================================================
 */
let revealObserver = null;

function initScrollReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal, .reveal-stagger").forEach(el => {
      el.classList.add("revealed");
    });
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal, .reveal-stagger").forEach(el => {
    revealObserver.observe(el);
  });
}

function observeNewReveals(root) {
  if (!revealObserver) return;
  root.querySelectorAll(".reveal, .reveal-stagger").forEach(el => {
    if (!el.classList.contains("revealed")) {
      revealObserver.observe(el);
    }
  });
}

/**
 * Role Switcher Listeners
 */
function initRoleSwitchers() {
  const buttons = document.querySelectorAll(".role-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedRole = btn.getAttribute("data-role");
      if (selectedRole && selectedRole !== currentRole) {
        setRole(selectedRole, true);
      }
    });
  });

  // Listen to hash change (e.g. if user navigates with browser back/forward)
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if ((hash === "developer" || hash === "devops") && hash !== currentRole) {
      setRole(hash, false);
    }
  });
}

/**
 * Update GitHub Links if custom username is set
 */
function applyConfigOverrides() {
  const username = PORTFOLIO_DATA.identity.githubUsername;
  const ghLink = PORTFOLIO_DATA.identity.githubUrl;

  const heroGh = document.getElementById("heroGithubLink");
  const contactGh = document.getElementById("contactGithubLink");
  const contactGhExt = document.getElementById("contactGithubExternalBtn");

  if (heroGh) heroGh.href = ghLink;
  if (contactGh) {
    contactGh.href = ghLink;
    contactGh.textContent = `github.com/${username}`;
  }
  if (contactGhExt) contactGhExt.href = ghLink;
}

/**
 * ============================================================================
 * APP INITIALIZATION
 * ============================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial renders of static/semi-static data
  renderCertifications();
  renderLeadership();

  // 2. Setup interaction handlers
  initRoleSwitchers();
  initNavigation();
  initProjectFilters();
  initModalKeyboardAndEvents();
  initTerminalCopy();
  initCopyButtons();
  initContactForm();
  initStatsCounter();
  initCardMouseGlow();
  initBackToTop();
  applyConfigOverrides();

  // 3. Set Initial Role (triggers dynamic rendering of Skills, Experience, Projects, etc.)
  const initialRole = getInitialRole();
  setRole(initialRole, false);

  // 4. Initialize scroll reveal observer
  initScrollReveals();
});
