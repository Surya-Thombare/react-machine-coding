/* eslint-disable @next/next/no-img-element */
"use client";

import Todo, { Code } from "@/components/shared/todo";
import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

let id = 0;

const INITIAL_TASKS = [
  { id: id++, label: "Walk the dog" },
  { id: id++, label: "Water the plants" },
  { id: id++, label: "Wash the dishes" },
];

const Page = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [newTask, setNewTask] = useState("");
  // const [code, setCode] = useState(Code);

  return (
    <div className="text-slate-300 w-full">
      <div className="inline-flex h-16 w-full items-center justify-center">
        <span className="grid h-10 w-full place-content-center rounded-lg bg-dark-100 text-lg text-slate-300	">
          TODO LIST
        </span>
      </div>
      <div className="flex flex-row gap-8 w-full">
        <Todo />
        {/* <div className="m-2"></div> */}
        {/* <iframe
          src="https://codesandbox.io/embed/26gtlt?view=editor&module=%2Fsrc%2Findex.js"
          style={{
            width: "80%",
            height: "500px",
            border: "0",
            borderRadius: "4px",
            overflow: "hidden",
          }}
          title="GridLights"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe> */}
        <a href="https://codesandbox.io/p/sandbox/gridlights-26gtlt">
          <img
            alt="Edit GridLights"
            src="https://codesandbox.io/static/img/play-codesandbox.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default Page;
