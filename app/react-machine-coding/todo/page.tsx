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

  const code = `
  "use client";
import { useState } from "react";

let id = 0;

const INITIAL_TASKS = [
  { id: id++, label: "Walk the dog" },
  { id: id++, label: "Water the plants" },
  { id: id++, label: "Wash the dishes" },
];

export default function Todo() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [newTask, setNewTask] = useState("");

  return (
    <div>
      <h1>Todo List</h1>
      <div className="mb-5">
        <input
          aria-label="Add new task"
          type="text"
          placeholder="Add your task"
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
          className="bg-slate-300 mb-1"
        />
        <div>
          <button
            onClick={() => {
              setTasks(
                tasks.concat({
                  id: id++,
                  label: newTask.trim(),
                })
              );
              setNewTask("");
            }}
            className="bg-slate-100 text-slate-700"
          >
            Submit
          </button>
        </div>
      </div>
      <ul>
        {tasks.map(({ id, label }) => (
          <li key={id}>
            <span>{label}</span>
            <button
              onClick={() => {
                setTasks(tasks.filter((task) => task.id !== id));
              }}
              className="bg-slate-100 text-slate-800 ml-3"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`;

  return (
    <div className="text-slate-300">
      <div className="inline-flex h-16 w-full items-center justify-center">
        <span className="grid h-10 w-full place-content-center rounded-lg bg-dark-100 text-lg text-slate-300	">
          TODO LIST
        </span>
      </div>
      <div className="flex flex-row gap-8">
        <div className="">
          <CodeMirror
            value={code}
            height="700px"
            width="500px"
            theme={vscodeDark}
          />
        </div>
        <div className="">
          <Todo />
        </div>
      </div>
    </div>
  );
};

export default Page;
