"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaGoogle } from "react-icons/fa";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["AI Enthusiast", "Full Stack Developer", "Backend Developer"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1200,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <section className="min-h-screen flex items-start justify-center pt-28 sm:pt-36 relative">
      <div className="w-full max-w-6xl px-6 sm:px-12 lg:px-24 flex flex-col justify-center">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center sm:text-left"
        >
          Tushar Gupta
        </motion.h1>

        {/* Typed Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-lg sm:text-xl lg:text-2xl font-mono text-center sm:text-left"
        >
          I'm{" "}
          <span
            ref={typedRef}
            className="text-green-400 border-b border-green-400"
          />
        </motion.p>

        {/* Navigation */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 mt-6 text-sm sm:text-base lg:text-lg"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative cursor-pointer font-medium
                  transition-colors duration-300 ease-out
                  ${
                    item.href === "/"
                      ? "text-green-400"
                      : "text-white/80 hover:text-green-400"
                  }

                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-full
                  after:h-[1.5px]
                  after:bg-green-400
                  after:origin-left
                  after:scale-x-0
                  after:transition-transform
                  after:duration-300

                  hover:after:scale-x-100
                  ${item.href === "/" ? "after:scale-x-100" : ""}
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex justify-center sm:justify-start gap-4 mt-8"
        >
          <a
            href="https://www.linkedin.com/in/tushargupta11/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <FaLinkedinIn />
            </Icon>
          </a>

          <a
            href="https://github.com/TUSHAR-GIT11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <FaGithub />
            </Icon>
          </a>

          <a href="mailto:tushargupta10th@gmail.com">
            <Icon>
              <FaGoogle />
            </Icon>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

/* Reusable Icon Component */
function Icon({ children }) {
  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-400 hover:text-black transition text-lg sm:text-xl">
      {children}
    </div>
  );
}
