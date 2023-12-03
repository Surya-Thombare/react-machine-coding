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
    <div className="text-slate-300">
      <div className="inline-flex h-16 w-full items-center justify-center">
        <span className="grid h-10 w-full place-content-center rounded-lg bg-dark-100 text-lg text-slate-300	">
          TODO LIST
        </span>
      </div>
      <div className="flex flex-row gap-8">
        <div className="m-2"></div>
        <iframe
          src="https://codesandbox.io/embed/26gtlt?view=Editor+%2B+Preview&module=%2Fsrc%2Findex.js&hidenavigation=1"
          // style={{width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden}}
          style={{
            width: "800px",
            height: "500px",
            borderRadius: "4px",
            overflow: "hidden",
          }}
          title="GridLights"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
