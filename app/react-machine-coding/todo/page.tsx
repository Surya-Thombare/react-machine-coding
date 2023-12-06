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

  return (
    <div className="text-slate-300 w-full">
      <div className="inline-flex h-16 w-full items-center justify-center">
        <span className="grid h-10 w-full place-content-center rounded-lg bg-dark-100 text-lg text-slate-300	">
          TODO LIST
        </span>
      </div>
      <div className="flex flex-row gap-8 w-full justify-between">
        <div className="flex flex-col w-3/5">
          <iframe
            src="https://codesandbox.io/p/sandbox/simple-todo-glp22t?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clpu9gxfi0006356slt8nbt6y%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clpu9gxfh0002356s94gvmi56%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clpu9gxfh0003356sn0wd7ghn%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clpu9gxfh0005356ss8rlxs3s%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clpu9gxfh0002356s94gvmi56%2522%253A%257B%2522id%2522%253A%2522clpu9gxfh0002356s94gvmi56%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clpu9gxfh0005356ss8rlxs3s%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpu9gxfh0004356sanqwml3z%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%2522%257D%255D%252C%2522id%2522%253A%2522clpu9gxfh0005356ss8rlxs3s%2522%252C%2522activeTabId%2522%253A%2522clpu9gxfh0004356sanqwml3z%2522%257D%252C%2522clpu9gxfh0003356sn0wd7ghn%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clpu9gxfh0003356sn0wd7ghn%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D"
            style={{
              width: "100%",
              height: "500px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            title="GridLights"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
          <a href="https://codesandbox.io/p/sandbox/gridlights-26gtlt">
            <img
              alt="Edit GridLights"
              src="https://codesandbox.io/static/img/play-codesandbox.svg"
            />
          </a>
        </div>
        <div className="m-2 mr-6 w-2/5">
          <Todo />
        </div>
      </div>
    </div>
  );
};

export default Page;
