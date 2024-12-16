"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/50 dark:bg-gray-900/30 backdrop-blur-sm border-b border-gray-200/30 dark:border-gray-800/30 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/pyuwu.png" alt="PyUwU Logo" width={32} height={32} />
          <span className="font-bold text-xl">PyUwU</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <Link href="/docs" className="hover:text-purple-600">
            Documentation
          </Link>
          <a
            href="https://pypi.org/project/pyuwu/"
            className="hover:text-purple-600"
          >
            PyPI
          </a>
          <a
            href="https://github.com/shamith09/pyuwu"
            className="hover:text-purple-600"
          >
            GitHub
          </a>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=shamith-pasula.vscode-pyuwu"
            className="hover:text-purple-600"
          >
            VS Code
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg z-50"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Navigation */}
        <div
          className={`
            fixed top-0 right-0 w-64
            bg-gray-50 dark:bg-gray-800
            shadow-lg border-l border-gray-200 dark:border-gray-700
            transform transition-transform duration-300 ease-in-out z-40
            ${isOpen ? "translate-x-0" : "translate-x-full"}
            md:hidden
            pb-8
          `}
        >
          <div className="h-full flex flex-col pt-20 px-6">
            <div className="flex flex-col gap-6">
              <Link
                href="/docs"
                className="hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Documentation
              </Link>
              <a
                href="https://pypi.org/project/pyuwu/"
                className="hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                PyPI
              </a>
              <a
                href="https://github.com/shamith09/pyuwu"
                className="hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                GitHub
              </a>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=shamith-pasula.vscode-pyuwu"
                className="hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                VS Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
