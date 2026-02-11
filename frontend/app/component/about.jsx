"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaServer } from "react-icons/fa";
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
    <section className="min-h-screen flex items-center justify-center px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl w-full">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-green-400 text-lg font-medium">
            Hello, my name is
          </p>

          <h1 className="text-4xl font-bold mt-2">Tushar Gupta</h1>

          <h2 className="text-2xl font-semibold mt-6 text-white/90">
            Full Stack Web Developer
          </h2>

          <p className="text-lg mt-4 text-white/80 leading-relaxed max-w-xl">
            I am a self-taught Full Stack Web Developer focused on building
            scalable, high-quality web applications. I enjoy working across the
            entire stack — from clean user interfaces to reliable backend
            systems and APIs.
          </p>

          {/* TECH STACK */}
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
            className="flex flex-wrap gap-6 mt-6 text-white/70"
          >
            <Tech name="HTML5">
              <SiHtml5 />
            </Tech>
            <Tech name="CSS3">
              <SiCss3 />
            </Tech>
            <Tech name="JavaScript">
              <SiJavascript />
            </Tech>
            <Tech name="React">
              <FaReact />
            </Tech>
            <Tech name="Next.js">
              <SiNextdotjs />
            </Tech>
            <Tech name="Node.js">
              <FaNodeJs />
            </Tech>
            <Tech name="GraphQL">
              <SiGraphql />
            </Tech>
            <Tech name="PostgreSQL">
              <SiPostgresql />
            </Tech>
            <Tech name="MongoDB">
              <SiMongodb />
            </Tech>
            <Tech name="Firebase">
              <SiFirebase />
            </Tech>
            <Tech name="Electron">
              <SiElectron />
            </Tech>
          </motion.div>

          {/* KEY POINTS */}
          <ul className="mt-6 space-y-3 text-white/75">
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
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[360px] h-[360px] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 hover:scale-[1.03] transition"
          >
            <Image
              src="/3d About.jpg"
              alt="Tushar Gupta"
              width={360}
              height={360}
              className="object-cover w-full h-full"
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
      <span className="text-3xl group-hover:text-green-400 transition-colors duration-300">
        {children}
      </span>
      <span className="text-xs text-white/50 group-hover:text-white/80 transition">
        {name}
      </span>
    </motion.div>
  );
}
