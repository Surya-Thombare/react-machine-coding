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
          className="mb-1 text-black	bg-black-200"
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
            className="bg-slate-100"
          >
            Submit
          </button>
        </div>
      </div>
      <ul>
        {tasks.map(({ id, label }) => (
          <li key={id} className=" m-1">
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
}
