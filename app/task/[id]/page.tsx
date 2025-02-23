"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchTask } from "@/app/lib/api";

export default function TaskDetailsPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTask(id).then(setTask);
  }, [id]);

  if (!task) return <p>Loading...</p>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate}</p>
    </div>
  );
}
