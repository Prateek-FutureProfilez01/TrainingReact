import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Todo() {
  const [inputState, setInputState] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const trimmed = inputState.trim();
    if (!trimmed) return;
    setTasks([...tasks, { text: trimmed, done: false }]);
    setInputState("");
  };

  const toggleDone = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updated);
  };

  return (
    <div className="p-3 ">
      <h1 className="text-center text-primary mb-4">📝 TODO LIST</h1>

      <div className="d-flex justify-content-center gap-2 mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Enter a task..."
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleAddTask}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {tasks.length === 0 ? (
          <li className="list-group-item text-center">No tasks added yet.</li>
        ) : (
          tasks.map((task, index) => (
            <li
              key={index}
              className={
                "list-group-item d-flex justify-content-between align-items-center " +
                (task.done ? "text-decoration-line-through text-muted" : "")
              }
            >
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => toggleDone(index)}
              >
                {task.text}
              </span>
              <button
                className={
                  "btn btn-sm " +
                  (task.done ? "btn-secondary" : "btn-outline-success")
                }
                onClick={() => toggleDone(index)}
              >
                {task.done ? "Undone" : "Done"}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
