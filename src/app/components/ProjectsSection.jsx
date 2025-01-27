"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Electronic Arts -Sports Clone",
    description: "An EA Sports Clone project built using HTML, CSS, and JavaScript to replicate the look and feel of the official EA Sports website. It features a responsive layout, interactive animations, dynamic content, and smooth navigation to emulate the professional gaming website experience.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: " https://github.com/Tejaswinim-Dev/EA-Sports",
    previewUrl: "https://github.com/Tejaswinim-Dev/EA-Sports",
  },
  {
    id: 2,
    title: "Basic E-Com React UI",
    description: "Developed a responsive e-commerce platform using React.js, Redux, and Axios with features like product listings, shopping cart, and seamless API integration, optimizing performance and enhancing user experience across devices.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tejaswinim-Dev/Basic-React-E-Com-UI",
    previewUrl: "https://github.com/Tejaswinim-Dev/Basic-React-E-Com-UI",
  },
  {
    id: 3,
    title: "Certping UI Clone with API Integration (Certification Management System)",
    description: "Cloned the Certping certification management system’s UI using React, JavaScript, Bootstrap, and CSS. Integrated REST APIs with Axios for data management and utilized Redux for state management, implementing features like certificate search and validations.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tejaswinim-Dev/CertPing-Clone-React.git",
    previewUrl: "https://github.com/Tejaswinim-Dev/CertPing-Clone-React.git",
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description: "Created a responsive portfolio website using Next.js, featuring modern UI components to showcase skills and projects. Focused on intuitive design and seamless navigation to enhance user experience and engagement",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "https://tejaswinis.dev/",
  },
  {
    id: 5,
    title: "Ecom-Backend",
    description: "Developed a robust e-commerce backend using Node.js, Express.js, and MongoDB. Designed secure JWT authentication, created RESTful APIs for user and product management, ensured efficient database handling.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tejaswinim-Dev/Ecom_Backend",
    previewUrl: "https://github.com/Tejaswinim-Dev/Ecom_Backend",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
