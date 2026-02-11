"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Expense Tracker Mobile App",
    description:
      "A cross-platform mobile expense tracking application built with React Native and Firebase. The app allows users to track income and expenses in real time, manage transaction history, and securely store data using Firebase authentication and database services.",
    tech: ["React Native", "Firebase", "Authentication", "Real-time Database"],
    github: "https://github.com/TUSHAR-GIT11/Expense-Tracker-app",
  },
  {
    title: "E-Commerce Web Application",
    description:
      "A modern e-commerce web application built with React.js and GraphQL, using Strapi as a headless CMS. Features include product listings, dynamic content management, cart functionality, and scalable backend integration.",
    tech: ["React.js", "GraphQL", "Strapi", "API Integration"],
    github: "https://github.com/TUSHAR-GIT11/e-comm",
  },
  {
    title: "Amazon Clone",
    description:
      "A front-end Amazon clone built using pure HTML and CSS to replicate the layout and visual structure of a real-world e-commerce platform, focusing on responsive design and UI accuracy.",
    tech: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com/TUSHAR-GIT11/amazon-clone",
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-24 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-white/70 mt-3 max-w-2xl">
          A selection of real-world projects showcasing my hands-on experience
          in front-end, mobile, and full-stack application development.
        </p>
      </motion.div>

      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({ title, description, tech, github }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="
        relative group
        p-8 rounded-2xl
        bg-white/[0.04]
        backdrop-blur-xl
        border border-white/10
        shadow-xl
        overflow-hidden
      "
    >
      <div
        className="
          absolute inset-0
          bg-gradient-to-br from-green-400/30 via-transparent to-emerald-400/30
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      <div className="relative z-10">
        <h2 className="text-2xl font-semibold">{title}</h2>

        <p className="text-white/70 mt-3 leading-relaxed">{description}</p>

        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="flex flex-wrap gap-2 mt-5"
        >
          {tech.map((item) => (
            <motion.span
              key={item}
              variants={{
                hidden: { opacity: 0, y: 6 },
                visible: { opacity: 1, y: 0 },
              }}
              className="
                text-xs px-3 py-1 rounded-full
                bg-white/10
                text-white/80
                border border-white/10
                group-hover:border-green-400/30
                transition
              "
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 4 }}
          className="
            mt-6 inline-flex items-center gap-2
            text-white/80 font-medium
            hover:text-green-400
            transition
          "
        >
          <FaGithub className="text-lg" />
          View Source Code
        </motion.a>
      </div>
    </motion.div>
  );
}
