import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">PyUwU</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A Python preprocessor that translates Python into brainrot. Write
              Python like Gen Alpha.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <a
                  href="https://pypi.org/project/pyuwu/"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600"
                >
                  PyPI
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/shamith09/pyuwu"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=shamith-pasula.vscode-pyuwu"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600"
                >
                  VS Code Extension
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/shamith09/pyuwu/issues"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600"
                >
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} PyUwU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
