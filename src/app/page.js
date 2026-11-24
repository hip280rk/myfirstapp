"use client";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    "Learn Next.js setup",
    "Build first app",
  ]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  // New function: takes NO custom arguments
  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <main className="main">
      <div className="card">
        <div className="header">
          <h1 className="title">My First Next.js Task App</h1>

          {/* Only show Clear All if there is at least 1 task */}
          {tasks.length > 0 && (
            <button onClick={clearAllTasks} className="clearButton">
              Clear All
            </button>
          )}
        </div>

        <form onSubmit={addTask} className="form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="input"
          />
          <button type="submit" className="addButton">
            Add
          </button>
        </form>

        <ul className="list">
          {tasks.map((task, index) => (
            <li key={index} className="listItem">
              <span>{task}</span>
              {/* Needs custom argument (index) -> uses () => */}
              <button
                onClick={() => removeTask(index)}
                className="deleteButton"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
