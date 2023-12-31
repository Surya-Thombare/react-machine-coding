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
              <ul className="space-y-1 border-t border-gray-100 pt-4 flex flex-col gap-3">
                <li>
                  <Link
                    href="/react-machine-coding/todo"
                    className="t group relative flex justify-center rounded border-orange-400 border-2 px-2 py-1.5 text-yellow-500"
                  >
                    Todo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/react-machine-coding/calculator"
                    className="t group relative flex justify-center rounded border-orange-400 border-2 px-2 py-1.5 text-yellow-500"
                  >
                    Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/react-machine-coding/progressBar"
                    className="t group relative flex justify-center rounded border-orange-400 border-2 px-2 py-1.5 text-yellow-500"
                  >
                    progressBar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/react-machine-coding/todo"
                    className="t group relative flex justify-center rounded border-orange-400 border-2 px-2 py-1.5 text-yellow-500"
                  >
                    Todo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/react-machine-coding/CountTabChange"
                    className="t group relative flex justify-center rounded border-orange-400 border-2 px-2 py-1.5 text-yellow-500"
                  >
                    CountTabChange
                  </Link>
                </li>
                <li>
                  <Link
                    href="/react-machine-coding/getCurrentTime"
                    className="t group relative flex justify-center rounded border-orange-400 border-2 px-2 py-1.5 text-yellow-500"
                  >
                    getCurrentTime
                  </Link>
                </li>
                <li>
                  <Link
                    href="/react-machine-coding/fetchDataFromApi"
                    className="t group relative flex justify-center rounded border-orange-400 border-2 bg-transparent px-2 py-1.5  text-yellow-500"
                  >
                    fetchDataFromApi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/react-machine-coding/tabs"
                    className="t group relative flex justify-center rounded border-orange-400 border-2 px-2 py-1.5 text-yellow-500"
                  >
                    Tabs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/react-machine-coding/followTheClick"
                    className="t group relative flex justify-center rounded border-orange-400 border-2 px-2 py-1.5 text-yellow-500"
                  >
                    followTheClick
                  </Link>
                </li>
                <li>
                  <Link
                    href="/react-machine-coding/counterWithuseReducer"
                    className="t group relative flex justify-center rounded border-orange-400 border-2 px-2 py-1.5 text-yellow-500"
                  >
                    counterWithuseReducer
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
