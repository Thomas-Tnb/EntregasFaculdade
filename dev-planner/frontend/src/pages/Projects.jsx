import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState("");
  const navigate = useNavigate();

  const fetchProjects = async () => {
    const res = await fetch("http://localhost:3001/projects");
    const data = await res.json();
    setProjects(data);
  };

  const addProject = async () => {
    if (!newProject.trim()) return;
    await fetch("http://localhost:3001/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newProject }),
    });
    setNewProject("");
    fetchProjects();
  };

  useEffect(() => { fetchProjects(); }, []);

  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-primary mb-6 tracking-tight">
        🎯 Dev Planner
      </h1>

      <div className="flex mb-8 w-full max-w-lg">
        <input
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
          placeholder="Novo projeto..."
          className="flex-1 border-2 border-blue-200 p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <button
          onClick={addProject}
          className="bg-gradient-to-r from-primary to-accent text-white px-5 rounded-r-lg hover:opacity-90 transition"
        >
          Adicionar
        </button>
      </div>

      <div className="grid gap-4 w-full max-w-3xl">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white/80 backdrop-blur-sm shadow-md rounded-xl p-5 flex justify-between items-center hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <span className="font-semibold text-gray-800 text-lg">{p.name}</span>
            <button
              onClick={() => navigate(`/project/${p.id}`)}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Entrar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
