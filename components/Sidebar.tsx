import Link from "next/link";
import React from "react";

const Sidebar = ({ challengesList = {} }) => {
  return (
    <>
      <div className="flex h-screen w-full flex-col justify-between border-e bg-dark">
        <div>
          <div className="inline-flex h-16 w-full items-center justify-center text-center">
            <span className="grid h-10 w-full place-content-center rounded-lg bg-dark-100 text-lg text-slate-300	">
              React Machine Coding Challenges
            </span>
          </div>

          <div className="border-t border-dark-100">
            <div className="px-2">
              <ul className="space-y-1 border-t border-gray-100 pt-4">
                <li>
                  <Link
                    href="/react-machine-coding/todo"
                    className="t group relative flex justify-center rounded bg-stone-600 px-2 py-1.5 text-blue-700"
                  >
                    Todo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/react-machine-coding/calculator"
                    className="t group relative flex justify-center rounded bg-stone-600 px-2 py-1.5 text-blue-700"
                  >
                    Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/react-machine-coding/progressBar"
                    className="t group relative flex justify-center rounded bg-stone-600 px-2 py-1.5 text-blue-700"
                  >
                    progressBar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/react-machine-coding/todo"
                    className="t group relative flex justify-center rounded bg-stone-600 px-2 py-1.5 text-blue-700"
                  >
                    Todo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
