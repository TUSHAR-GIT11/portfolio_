"use client";

import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";

export default function ResumePage() {
  return (
    <section className="min-h-screen px-24 py-32 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          max-w-3xl w-full
          bg-white/[0.04]
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          p-12
          text-center
          shadow-2xl
        "
      >
        <h1 className="text-4xl font-bold">Resume</h1>

        <p className="text-white/70 mt-4">
          Download or view my resume to learn more about my experience,
          skills, and projects.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-6 mt-10">

          {/* VIEW */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="
              flex items-center gap-2
              px-6 py-3
              rounded-xl
              border border-white/15
              text-white/80
              hover:text-green-400
              hover:border-green-400/40
              transition
            "
          >
            <FaEye />
            View Resume
          </a>

          {/* DOWNLOAD */}
          <a
            href="/resume.pdf"
            download
            className="
              flex items-center gap-2
              px-6 py-3
              rounded-xl
              bg-gradient-to-r from-green-400 to-emerald-400
              text-black font-semibold
              hover:opacity-90
              transition
            "
          >
            <FaDownload />
            Download Resume
          </a>

        </div>
      </motion.div>
    </section>
  );
}
