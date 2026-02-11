"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === "/") return null;

  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        px-6 sm:px-12 lg:px-24 py-4
        backdrop-blur-md
        bg-[#020617]/70
        border-b border-white/10
      "
    >
      <div className="flex items-center justify-between">

        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-lg font-bold text-white hover:text-green-400 transition"
        >
          Tushar
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {items.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    relative text-sm font-semibold tracking-wide
                    transition-all duration-300
                    ${
                      isActive
                        ? "text-green-400"
                        : "text-white/70 hover:text-green-400"
                    }
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-[6px]
                    after:w-full
                    after:h-[2px]
                    after:bg-green-400
                    after:rounded-full
                    after:origin-left
                    after:scale-x-0
                    after:transition-transform
                    after:duration-300
                    hover:after:scale-x-100
                    ${isActive ? "after:scale-x-100" : ""}
                  `}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-6 flex flex-col gap-6"
          >
            {items.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`
                      block text-base font-medium
                      ${
                        isActive
                          ? "text-green-400"
                          : "text-white/80 hover:text-green-400"
                      }
                      transition
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
