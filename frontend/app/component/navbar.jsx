"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  
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
        px-24 py-5
        backdrop-blur-md
        bg-[#020617]/70
        border-b border-white/10
      "
    >
      <ul className="flex items-center gap-10">
        {items.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`
                  relative inline-block
                  text-[14.5px]
                  font-semibold
                  tracking-wide
                  transition-all duration-300 ease-out
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
    </nav>
  );
}
