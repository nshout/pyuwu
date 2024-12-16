"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "key-features", title: "Key Features" },
  { id: "code-example", title: "Code Example" },
  { id: "installation", title: "Installation" },
  { id: "keyword-mappings", title: "Keyword Mappings" },
  { id: "quick-intro", title: "Quick Intro" },
  { id: "repository-structure", title: "Repository Structure" },
];

export default function Documentation() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Height of navbar + some padding
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Table of Contents */}
      <aside className="hidden lg:block w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] p-6 overflow-y-auto border-r border-gray-200 dark:border-gray-800">
        <nav className="space-y-1">
          {sections.map(({ id, title }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`
                block w-full text-left px-4 py-2 rounded-lg text-sm
                transition-colors duration-200
                ${
                  activeSection === id
                    ? "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }
              `}
            >
              {title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:pl-64">
        <div className="container mx-auto px-4 max-w-4xl py-24">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <section id="introduction">
              <h1 className="text-4xl font-bold mb-4">PyUwU</h1>
              <p className="text-xl mb-8">
                Python with rizz. Be a sigma and mog your skibidi toilet opps
                before they crashout. This language can only be used in Ohio.
              </p>
              <p className="mb-8">
                PyUwU is a Python preprosessor which translates regular Python
                code into brainrot by replacing certain keywords, operators, and
                built in functions with iPad kid vocabulary.
              </p>
              <p className="mb-8">
                Implementation based on{" "}
                <a
                  href="https://github.com/mathialo/bython"
                  className="text-purple-600 hover:underline"
                >
                  Bython
                </a>
                .
              </p>
            </section>

            {/* Rest of your existing sections with their IDs */}
            <section id="key-features" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Key features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Write Python using brainrot terms instead.</li>
                <li>
                  Run PyUwU files using the `pyuwu` command, just like Python.
                </li>
                <li>Translate Python files to PyUwU and vice versa.</li>
                <li>
                  Real Python keywords that have defined PyUwU mappings will
                  not be allowed.
                </li>
                <li>
                  Edit your PyUwU code with syntax highlighting with the
                  `vscode-pyuwu` extension.
                </li>
              </ul>
            </section>

            <section id="code-example" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Code example</h2>
              <Image
                src="/code-example.png"
                alt="PyUwU Code Example"
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </section>

            <section id="installation" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Installation</h2>
              <p>You can install PyUwU directly from PyPI using pip:</p>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre>
                  <code className="text-gray-100">
                    $ pip3 install{" "}
                    <span className="font-mono bg-gray-800 rounded px-1">
                      pyuwu
                    </span>
                  </code>
                </pre>
              </div>

              <p>If you want to install it from the git repository:</p>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre>
                  <code className="text-gray-100">{`$ git clone https://github.com/shamith09/<span className="font-mono bg-gray-800 rounded px-1">pyuwu</span>.git`}</code>
                  <br />
                  <code className="text-gray-100">{`$ cd <span className="font-mono bg-gray-800 rounded px-1">pyuwu</span>`}</code>
                  <br />
                  <code className="text-gray-100">{`$ pip3 install .`}</code>
                </pre>
              </div>

              <p>To uninstall:</p>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre>
                  <code className="text-gray-100">
                    $ pip3 uninstall{" "}
                    <span className="font-mono bg-gray-800 rounded px-1">
                      pyuwu
                    </span>
                  </code>
                </pre>
              </div>

              <p>
                To install the VS Code extension, visit the{" "}
                <Link
                  href="https://marketplace.visualstudio.com/items?itemName=shamith-pasula.vscode-pyuwu"
                  className="text-purple-600 hover:underline"
                >
                  Visual Studio Marketplace
                </Link>
                .
              </p>
            </section>

            <section id="keyword-mappings" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Keyword mappings</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border dark:border-gray-700 rounded-lg">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left">
                        Python Keyword/Operator
                      </th>
                      <th className="px-6 py-3 text-left">
                        PyUwU Translation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4">try/except/finally</td>
                      <td className="px-6 py-4">
                        hawk/tuah/spit on that thang
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">return</td>
                      <td className="px-6 py-4">its giving</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">fanum tax</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">+</td>
                      <td className="px-6 py-4">rizz</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">print</td>
                      <td className="px-6 py-4">yap</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">True</td>
                      <td className="px-6 py-4">Aura</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">False</td>
                      <td className="px-6 py-4">Cooked</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">def</td>
                      <td className="px-6 py-4">bop</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">while</td>
                      <td className="px-6 py-4">let him cook</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">import</td>
                      <td className="px-6 py-4">glaze</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">from</td>
                      <td className="px-6 py-4">lock in</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">class</td>
                      <td className="px-6 py-4">skibidi</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">if/elif/else</td>
                      <td className="px-6 py-4">
                        chat is this real/yo chat/only in ohio
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">for</td>
                      <td className="px-6 py-4">mewing</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">break</td>
                      <td className="px-6 py-4">
                        just put the fries in the bag bro
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">continue</td>
                      <td className="px-6 py-4">edge</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">assert</td>
                      <td className="px-6 py-4">sus</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">raise</td>
                      <td className="px-6 py-4">crashout</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">with</td>
                      <td className="px-6 py-4">pookie</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">as</td>
                      <td className="px-6 py-4">ahh</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">global</td>
                      <td className="px-6 py-4">GOAT</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">nonlocal</td>
                      <td className="px-6 py-4">motion</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">del</td>
                      <td className="px-6 py-4">delulu</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">yield</td>
                      <td className="px-6 py-4">pause</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">yield from</td>
                      <td className="px-6 py-4">pause no diddy</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">None</td>
                      <td className="px-6 py-4">NPC</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">pass</td>
                      <td className="px-6 py-4">pluh</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">self</td>
                      <td className="px-6 py-4">unc</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">range</td>
                      <td className="px-6 py-4">huzz</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{">"}</td>
                      <td className="px-6 py-4">sigma</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">{"<"}</td>
                      <td className="px-6 py-4">beta</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">≥</td>
                      <td className="px-6 py-4">sigma twin</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">≤</td>
                      <td className="px-6 py-4">beta twin</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">==</td>
                      <td className="px-6 py-4">twin</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">open</td>
                      <td className="px-6 py-4">mog</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">close</td>
                      <td className="px-6 py-4">demure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="quick-intro" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Quick intro</h2>
              <p>
                PyUwU works by first translating PyUwU files (suggested file
                ending: .gyat) into Python-files, and then using Python to run
                them. You therefore need a working installation of Python for
                PyUwU to work.
              </p>

              <p className="mt-4">To run a PyUwU program:</p>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre>
                  <code className="text-gray-100">
                    $ pyuwu source.gyat arg1 arg2 ...
                  </code>
                </pre>
              </div>

              <p>
                PyUwU also includes a translator from Python to PyUwU using
                the{" "}
                <span className="font-mono bg-gray-800 rounded px-1">
                  py2uwu
                </span>{" "}
                command:
              </p>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre>
                  <code className="text-gray-100">$ py2uwu test.py</code>
                </pre>
              </div>
            </section>

            <section id="repository-structure" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Structure of the repository
              </h2>
              <p>
                At the moment, PyUwU is written in Python. The git repository
                is structured into 4 directories:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-mono bg-gray-800 rounded px-1">
                    pyuwu
                  </span>{" "}
                  contains a Python package containing the parser and other
                  utilities used by the main script
                </li>
                <li>
                  <span className="font-mono bg-gray-800 rounded px-1">
                    etc
                  </span>{" "}
                  contains manual pages and other auxillary files
                </li>
                <li>
                  <span className="font-mono bg-gray-800 rounded px-1">
                    scripts
                  </span>{" "}
                  contains the runnable Python scripts, ie the ones run from the
                  shell
                </li>
                <li>
                  <span className="font-mono bg-gray-800 rounded px-1">
                    testcases
                  </span>{" "}
                  contains a couple of sample *.gyat and *.py files intended for
                  testing the implementation
                </li>
                <li>
                  <Link
                    href="https://github.com/shamith09/vscode-pyuwu"
                    className="text-purple-600 hover:underline"
                  >
                    <span className="font-mono bg-gray-800 rounded px-1">
                      vscode-pyuwu
                    </span>
                  </Link>{" "}
                  contains the Visual Studio Code extension that enables syntax
                  highlighting in VS Code.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
