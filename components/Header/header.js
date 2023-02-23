"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Header() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const navLinks = [
    {
      name: "Hem",
      path: "/",
      width: "55",
      x: 0,
      y: 0,
    },
    {
      name: "Blogg",
      path: "/blog",
      width: "60",
      x: 64,
      y: 35,
    },
    {
      name: "Om Mig",
      path: "/about",
      width: "75",
      x: 182,
      y: 104,
    },
    {
      name: "Gästbok",
      path: "/guestbook",
      width: "80",
      x: 182,
      y: 104,
    },
  ];

  return (
    <div className="container">
      <div className="headerLogo">
        <motion.svg
          className="text-black dark:text-white h-[25px] md:h-[37px]"
          width="25"
          height="37"
          viewBox="0 0 232 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: 1,
              pathLength: 1,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 50,
            }}
            d="M10 90 L30 10 L70 10 L90 90"
            stroke="currentColor"
            strokeWidth={78}
          />
        </motion.svg>
      </div>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <Link href={link.path} key={link.name}>
              <li
                className={`${
                  pathname === link.path ? "active" : ""
                } text-black dark:text-white`}
                style={{ width: `${link.width}px` }}
              >
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
