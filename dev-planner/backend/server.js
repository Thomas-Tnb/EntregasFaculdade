const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const DB_PATH = './db.json';

// Ler banco
const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));

// Salvar banco
const writeDB = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

// Listar projetos
app.get('/projects', (req, res) => {
  const db = readDB();
  res.json(db.projects);
});

// Obter projeto por ID
app.get('/projects/:id', (req, res) => {
  const db = readDB();
  const project = db.projects.find(p => p.id == req.params.id);
  if (!project) return res.status(404).json({ error: 'Projeto não encontrado' });
  res.json(project);
});

// Criar projeto
app.post('/projects', (req, res) => {
  const db = readDB();
  const newProject = {
    id: Date.now(),
    name: req.body.name,
    tasks: [],
  };
  db.projects.push(newProject);
  writeDB(db);
  res.json(newProject);
});

// Criar tarefa
app.post('/projects/:id/tasks', (req, res) => {
  const db = readDB();
  const project = db.projects.find(p => p.id == req.params.id);
  if (!project) return res.status(404).json({ error: 'Projeto não encontrado' });

  const newTask = {
    id: Date.now(),
    title: req.body.title,
    status: req.body.status || 'A Fazer',
  };
  project.tasks.push(newTask);
  writeDB(db);
  res.json(newTask);
});

// Atualizar tarefa (mover de coluna)
app.put('/projects/:id/tasks/:taskId', (req, res) => {
  const db = readDB();
  const project = db.projects.find(p => p.id == req.params.id);
  if (!project) return res.status(404).json({ error: 'Projeto não encontrado' });

  const task = project.tasks.find(t => t.id == req.params.taskId);
  if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });

  task.status = req.body.status || task.status;
  writeDB(db);
  res.json(task);
});

// Excluir tarefa
app.delete('/projects/:id/tasks/:taskId', (req, res) => {
  const db = readDB();
  const project = db.projects.find(p => p.id == req.params.id);
  if (!project) return res.status(404).json({ error: 'Projeto não encontrado' });

  project.tasks = project.tasks.filter(t => t.id != req.params.taskId);
  writeDB(db);
  res.json({ success: true });
});

app.listen(PORT, () => console.log(`✅ Servidor rodando em http://localhost:${PORT}`));
