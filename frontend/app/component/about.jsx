"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiElectron,
  SiPostgresql,
  SiNextdotjs,
  SiGraphql,
} from "react-icons/si";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl w-full">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-green-400 text-base sm:text-lg font-medium">
            Hello, my name is
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            Tushar Gupta
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold mt-6 text-white/90">
            Full Stack Web Developer
          </h2>

          <p className="text-base sm:text-lg mt-4 text-white/80 leading-relaxed max-w-xl">
            I am a self-taught Full Stack Web Developer focused on building
            scalable, high-quality web applications. I enjoy working across the
            entire stack — from clean user interfaces to reliable backend
            systems and APIs.
          </p>

          {/* TECH STACK */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="flex flex-wrap gap-4 sm:gap-6 mt-6 text-white/70"
          >
            <Tech name="HTML5"><SiHtml5 /></Tech>
            <Tech name="CSS3"><SiCss3 /></Tech>
            <Tech name="JavaScript"><SiJavascript /></Tech>
            <Tech name="React"><FaReact /></Tech>
            <Tech name="Next.js"><SiNextdotjs /></Tech>
            <Tech name="Node.js"><FaNodeJs /></Tech>
            <Tech name="GraphQL"><SiGraphql /></Tech>
            <Tech name="PostgreSQL"><SiPostgresql /></Tech>
            <Tech name="MongoDB"><SiMongodb /></Tech>
            <Tech name="Firebase"><SiFirebase /></Tech>
            <Tech name="Electron"><SiElectron /></Tech>
          </motion.div>

          {/* KEY POINTS */}
          <ul className="mt-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-white/75">
            <li>⚡ Build responsive and accessible user interfaces</li>
            <li>⚡ Develop backend APIs, databases, and core logic</li>
            <li>⚡ Create complete full-stack applications</li>
            <li>⚡ Integrate third-party services and cloud platforms</li>
          </ul>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 hover:scale-[1.03] transition"
          >
            <Image
              src="/3d About.jpg"
              alt="Tushar Gupta"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 360px"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* TECH ICON */
function Tech({ children, name }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col items-center gap-1 group cursor-pointer"
    >
      <span className="text-2xl sm:text-3xl group-hover:text-green-400 transition-colors duration-300">
        {children}
      </span>
      <span className="text-[10px] sm:text-xs text-white/50 group-hover:text-white/80 transition">
        {name}
      </span>
    </motion.div>
  );
}
