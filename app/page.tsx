"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchTasks } from "./lib/api";

export default function TaskListPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <Link href="/add">➕ Add Task</Link>
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>
            <Link href={`/task/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
