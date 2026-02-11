"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiElectron,
  SiGit,
  SiGithub,
  SiC,
  SiCplusplus,
  SiPython,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function SkillsPage() {
  return (
    <section className="min-h-screen px-6 sm:px-12 lg:px-24 py-16 sm:py-24 lg:py-32">
      {/* PAGE HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Skills
        </h1>

        <p className="text-white/70 mt-3 max-w-2xl text-sm sm:text-base">
          Technologies, programming languages, and tools I use to build
          scalable, efficient, and production-ready applications.
        </p>
      </motion.div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mt-12 sm:mt-16">

        <SkillSection
          title="Frontend Development"
          skills={[
            { name: "HTML5", icon: <SiHtml5 /> },
            { name: "CSS3", icon: <SiCss3 /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "React", icon: <SiReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
          ]}
        />

        <SkillSection
          title="Backend & APIs"
          skills={[
            { name: "Node.js", icon: <SiNodedotjs /> },
            { name: "GraphQL", icon: <SiGraphql /> },
          ]}
        />

        <SkillSection
          title="Databases & Cloud"
          skills={[
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Firebase", icon: <SiFirebase /> },
          ]}
        />

        <SkillSection
          title="Programming Languages"
          skills={[
            { name: "C", icon: <SiC /> },
            { name: "C++", icon: <SiCplusplus /> },
            { name: "Java", icon: <FaJava /> },
            { name: "Python", icon: <SiPython /> },
          ]}
        />

        <SkillSection
          title="Tools & Platforms"
          skills={[
            { name: "Git", icon: <SiGit /> },
            { name: "GitHub", icon: <SiGithub /> },
            { name: "Postman", icon: <SiPostman /> },
            { name: "Electron", icon: <SiElectron /> },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------- SKILL SECTION ---------- */
function SkillSection({ title, skills }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="relative inline-block text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-white">
        {title}
        <span className="absolute left-0 -bottom-2 h-[2px] w-8 sm:w-10 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full" />
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </motion.div>
  );
}

/* ---------- SKILL CARD ---------- */
function SkillCard({ icon, name }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="
        relative group
        flex flex-col items-center justify-center gap-2
        p-4 sm:p-6 rounded-2xl
        bg-white/[0.04]
        backdrop-blur-xl
        border border-white/10
        text-white/80
        overflow-hidden
        hover:border-green-400/40
        hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.35)]
        transition-all
      "
    >
      {/* glow layer */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br from-green-400/20 via-transparent to-emerald-300/20
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />

      {/* icon */}
      <span className="relative z-10 text-2xl sm:text-3xl lg:text-4xl group-hover:text-green-400 transition-colors duration-300">
        {icon}
      </span>

      {/* name */}
      <span className="relative z-10 text-xs sm:text-sm font-medium tracking-wide text-white/70 group-hover:text-white transition">
        {name}
      </span>
    </motion.div>
  );
}
