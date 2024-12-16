import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
        style={{
          background: `linear-gradient(180deg, 
            var(--purple-glow-start) 0%, 
            var(--purple-glow-mid) 25%, 
            transparent 100%)`,
        }}
      />

      <main className="relative pt-24">
        <section className="container mx-auto px-4 text-center">
          <Image
            src="/pyuwu.png"
            alt="PyUwU Logo"
            width={120}
            height={120}
            className="mx-auto mb-8"
          />
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Python with rizz
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Be a sigma with PyUwU - a Python preprocessor that translates
            Python into brainrot
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://pypi.org/project/pyuwu/"
              className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              Get Started
            </a>
            <a
              href="https://github.com/shamith09/pyuwu"
              className="px-6 py-3 rounded-lg border border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition"
            >
              View on GitHub
            </a>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Write Python like an iPad kid
            </h2>
            <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg p-6 shadow-xl">
              <Image
                src="/pyuwu-code.png"
                alt="PyUwU Code Example"
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Easy Installation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Install with pip and start writing brainrot immediately
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">VS Code Support</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Syntax highlighting for .pyuwu files in VS Code
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  100% Python Compatible
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All PyUwU code compiles to valid Python code and can be
                  glazed from Python files.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Get Started
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
                <p className="text-gray-100 font-mono">pip install pyuwu</p>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Check out the{" "}
                <Link href="/docs" className="text-purple-600 hover:underline">
                  documentation
                </Link>{" "}
                to learn more about PyUwU syntax and features.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
