"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav
      className={`bg-slate-900 fixed top-5 left-1/2 transform -translate-x-1/2 z-50 min-w-fit p-2 transition-all duration-300 rounded-[2rem] bg-opacity-60 backdrop-blur-lg shadow-lg`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <ul className="flex space-x-6">
          {[
            { name: "Home", href: "/" },
            { name: "Get Profile", href: "/get-profile" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`px-4 py-2 rounded-md transition-all duration-300 hover:text-blue-600 hover:backdrop-blur-md ${
                  pathname == item.href ? "text-blue-400" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
