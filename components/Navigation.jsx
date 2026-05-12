"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [menuClick, setMenuClick] = useState(false);
  const pathname = usePathname();

  const activeColor = (path) =>
    pathname === path ? { color: "#5FB4A2" } : undefined;

  return (
    <header className="w-full flex flex-col items-center justify-center shadow-lg sticky top-0 bg-black/90 border-b border-green-400">
      <nav className="lg:w-9/12 w-11/12 flex items-center justify-between py-2">
        <Link href="/">
          <img src="/images/logo-removebg-preview.png" alt="logo" className="logoImage" width={90} />
        </Link>
        <ul className="lg:flex hidden items-center justify-between gap-5">
          <li className="listItem text-sm text-white hover:text-green-400 transition-colors" style={activeColor("")}> 
            <Link className="mx-4 px-2" href="/">
              HOME
            </Link>
          </li>
          <li className="listItem text-sm text-white hover:text-green-400 transition-colors" style={activeColor("/labs")}>
            <Link className="mx-4 px-2" href="/labs">
              LABS
            </Link>
          </li>
          <li className="listItem text-sm text-white hover:text-green-400 transition-colors" style={activeColor("/contact")}>
            <Link className="mx-4 px-2" href="/contact">
              CONTACT
            </Link>
          </li>
          <li className="listItem text-sm" style={activeColor("/experience")}>
            <Link className="text-white hover:text-green-400 transition-colors mx-4 px-2" href="/experience">
              EXPERIENCE
            </Link>
          </li>
          <li className="listItem text-sm" style={activeColor("/certifications")}>
            <Link className="text-white hover:text-green-400 transition-colors mx-4 px-2" href="/certifications">
              CERTIFICATIONS
            </Link>
          </li>
          <li className="listItem text-sm" style={activeColor("/blog")}>
            <Link className="blogBtn text-white mx-4 px-8 py-2 shadow-blue-500/50" href="/blog">
              BLOG
            </Link>
          </li>
        </ul>
        <div className="mobileBtn lg:hidden flex" onClick={() => setMenuClick((prev) => !prev)}>
          {menuClick ? (
            <i className="bx bx-x bx_menu text-4xl text-green-400"></i>
          ) : (
            <i className="bx bx-menu-alt-right bx_menu text-4xl text-green-400"></i>
          )}
        </div>
      </nav>

      {menuClick ? (
        <ul className="block items-center text-center w-full justify-between gap-5 mobileUl bg-black/95 border-t border-green-400">
          <li className="listItem border-b border-gray-700">
            <Link className="my-4 py-2 block text-white hover:text-green-400" href="/">
              Home
            </Link>
          </li>
          <li className="listItem border-b border-gray-700">
            <Link className="my-4 py-2 block text-white hover:text-green-400" href="/labs">
              Labs
            </Link>
          </li>
          <li className="listItem border-b border-gray-700">
            <Link className="my-4 py-2 block text-white hover:text-green-400" href="/experience">
              Experience
            </Link>
          </li>
          <li className="listItem border-b border-gray-700">
            <Link className="my-4 py-2 block text-white hover:text-green-400" href="/certifications">
              Certifications
            </Link>
          </li>
          <li className="listItem border-b border-gray-700">
            <Link className="my-4 py-2 block text-white hover:text-green-400" href="/contact">
              Contact
            </Link>
          </li>
          <li className="listItem text-sm" id="blog">
            <Link className="blogBtn text-white py-4 inline-block shadow-blue-500/50" href="/blog">
              BLOG
            </Link>
          </li>
        </ul>
      ) : null}
    </header>
  );
};

export default Navigation;
