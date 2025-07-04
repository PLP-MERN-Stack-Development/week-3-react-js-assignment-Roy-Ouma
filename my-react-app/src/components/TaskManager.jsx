import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task =>
    filter === "all" ||
    (filter === "active" && !task.completed) ||
    (filter === "completed" && task.completed)
  );

  return (
    <div>
      <h2 className="text-2xl mb-4">Task Manager</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Add a task"
      />
      <Button onClick={addTask}>Add</Button>

      <div className="mt-4 space-x-2">
        {["all", "active", "completed"].map((f) => (
          <Button key={f} onClick={() => setFilter(f)} variant={filter === f ? "primary" : "secondary"}>
            {f}
          </Button>
        ))}
      </div>

      <ul className="mt-4 space-y-2">
        {filteredTasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-2 border rounded">
            <span
              className={task.completed ? "line-through text-gray-500" : ""}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}