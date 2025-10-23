import React from 'react';

const columns = ['A Fazer', 'Em Progresso', 'Concluído'];

export default function KanbanBoard({ tasks, onMove, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {columns.map(status => {
        const filtered = tasks.filter(t => t.status === status);
        return (
          <div
            key={status}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-4 transition hover:shadow-lg"
          >
            <h2 className="text-xl font-bold text-primary mb-4 text-center">
              {status} <span className="text-gray-500 text-sm">({filtered.length})</span>
            </h2>
            <div className="space-y-3">
              {filtered.map(task => (
                <div
                  key={task.id}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start">
                    <p className="font-medium text-gray-700">{task.title}</p>
                    <button
                      onClick={() => onDelete(task.id)}
                      className="text-red-600 hover:text-red-800 transition"
                      title="Excluir tarefa"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="flex flex-wrap justify-end gap-1 mt-2">
                    {columns.map(col => (
                      col !== status && (
                        <button
                          key={col}
                          onClick={() => onMove(task.id, col)}
                          className="text-xs bg-primary text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition"
                        >
                          {col}
                        </button>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
