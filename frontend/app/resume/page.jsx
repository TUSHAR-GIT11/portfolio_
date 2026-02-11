"use client";

import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";

export default function ResumePage() {
  return (
    <section className="min-h-screen px-6 sm:px-12 lg:px-24 py-16 sm:py-24 lg:py-32 flex items-center justify-center">
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
          p-6 sm:p-8 lg:p-12
          text-center
          shadow-2xl
        "
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Resume
        </h1>

        <p className="text-white/70 mt-4 text-sm sm:text-base">
          Download or view my resume to learn more about my experience,
          skills, and projects.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-10">

          {/* VIEW */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="
              w-full sm:w-auto
              flex items-center justify-center gap-2
              px-6 py-3
              rounded-xl
              border border-white/15
              text-white/80
              text-sm sm:text-base
              hover:text-green-400
              hover:border-green-400/40
              transition
            "
          >
            <FaEye className="text-base sm:text-lg" />
            View Resume
          </a>

          {/* DOWNLOAD */}
          <a
            href="/resume.pdf"
            download
            className="
              w-full sm:w-auto
              flex items-center justify-center gap-2
              px-6 py-3
              rounded-xl
              text-sm sm:text-base
              bg-gradient-to-r from-green-400 to-emerald-400
              text-black font-semibold
              hover:opacity-90
              transition
            "
          >
            <FaDownload className="text-base sm:text-lg" />
            Download Resume
          </a>

        </div>
      </motion.div>
    </section>
  );
}
