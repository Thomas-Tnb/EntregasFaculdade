import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import KanbanBoard from "../components/KanbanBoard";

export default function ProjectBoard() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [newTask, setNewTask] = useState("");

  const fetchProject = async () => {
    const res = await fetch(`http://localhost:3001/projects/${id}`);
    const data = await res.json();
    setProject(data);
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    await fetch(`http://localhost:3001/projects/${id}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTask, status: "A Fazer" }),
    });
    setNewTask("");
    fetchProject();
  };

  const updateTask = async (taskId, status) => {
    await fetch(`http://localhost:3001/projects/${id}/tasks/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchProject();
  };

  const deleteTask = async (taskId) => {
    await fetch(`http://localhost:3001/projects/${id}/tasks/${taskId}`, { method: "DELETE" });
    fetchProject();
  };

  useEffect(() => { fetchProject(); }, [id]);

  if (!project) return <p className="text-center mt-10">Carregando...</p>;

  return (
    <div className="p-8 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">{project.name}</h1>
        <Link to="/" className="text-blue-600 hover:underline">← Voltar</Link>
      </div>

      <div className="flex justify-center mb-6">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nova tarefa..."
          className="border-2 border-blue-200 p-3 rounded-l-lg focus:ring-2 focus:ring-primary transition w-1/2"
        />
        <button
          onClick={addTask}
          className="bg-gradient-to-r from-primary to-accent text-white px-5 rounded-r-lg hover:opacity-90 transition"
        >
          Adicionar
        </button>
      </div>

      <KanbanBoard tasks={project.tasks} onMove={updateTask} onDelete={deleteTask} />
    </div>
  );
}
