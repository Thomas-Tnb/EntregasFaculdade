const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const DB_FILE = './db.json';

const loadDB = () => JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
const saveDB = (data) => fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));

// ---- ROTAS DE PROJETOS ----

// Lista todos os projetos
app.get('/projects', (req, res) => {
  const db = loadDB();
  res.json(db.projects);
});

// Busca um projeto por ID
app.get('/projects/:id', (req, res) => {
  const db = loadDB();
  const project = db.projects.find(p => p.id == req.params.id);
  if (!project) return res.status(404).send('Projeto não encontrado');
  res.json(project);
});

// Cria um novo projeto
app.post('/projects', (req, res) => {
  const db = loadDB();
  const newProject = { id: Date.now(), name: req.body.name, tasks: [] };
  db.projects.push(newProject);
  saveDB(db);
  res.status(201).json(newProject);
});

// ---- ROTAS DE TAREFAS DENTRO DE UM PROJETO ----

// Adiciona nova tarefa
app.post('/projects/:id/tasks', (req, res) => {
  const db = loadDB();
  const project = db.projects.find(p => p.id == req.params.id);
  if (!project) return res.status(404).send('Projeto não encontrado');
  const newTask = { id: Date.now(), ...req.body };
  project.tasks.push(newTask);
  saveDB(db);
  res.status(201).json(newTask);
});

// Atualiza tarefa
app.put('/projects/:id/tasks/:taskId', (req, res) => {
  const db = loadDB();
  const project = db.projects.find(p => p.id == req.params.id);
  if (!project) return res.status(404).send('Projeto não encontrado');
  const index = project.tasks.findIndex(t => t.id == req.params.taskId);
  if (index === -1) return res.status(404).send('Tarefa não encontrada');
  project.tasks[index] = { ...project.tasks[index], ...req.body };
  saveDB(db);
  res.json(project.tasks[index]);
});

// Excluir tarefa
app.delete('/projects/:id/tasks/:taskId', (req, res) => {
  const db = loadDB();
  const project = db.projects.find(p => p.id == req.params.id);
  if (!project) return res.status(404).send('Projeto não encontrado');
  project.tasks = project.tasks.filter(t => t.id != req.params.taskId);
  saveDB(db);
  res.status(204).send();
});

app.listen(3001, () => console.log('✅ Backend rodando em http://localhost:3001'));
