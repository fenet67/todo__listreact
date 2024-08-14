
import React, { useState } from 'react';

function TdList({ tasks, editTask, deleteTask, toggleTaskCompletion }) {
  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState('');
  const [showSubtasks, setShowSubtasks] = useState({});

  const handleEdit = (id, text) => {
    setEditingId(id);
    setNewText(text);
  };

  const handleSave = (id) => {
    editTask(id, { text: newText });
    setEditingId(null);
    setNewText('');
  };

  const handleToggleSubtasks = (id) => {
    setShowSubtasks({ ...showSubtasks, [id]: !showSubtasks[id] });
  };

  return (
    <ul className="list-none p-0 m-0 w-full max-w-md">
      {tasks.map(task => (
        <li key={task.id} className="flex flex-col p-4 border-b border-gray-300 bg-white rounded-md mb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className="mr-2"
              />
              {editingId === task.id ? (
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded-md"
                />
              ) : (
                <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</span>
              )}
            </div>
            <div className="flex gap-2">
              {editingId === task.id ? (
                <button onClick={() => handleSave(task.id)} className="p-2 bg-green-500 text-white rounded-md">
                  Save
                </button>
              ) : (
                <button onClick={() => handleEdit(task.id, task.text)} className="p-2 bg-blue-500 text-white rounded-md">
                  Edit
                </button>
              )}
              <button onClick={() => deleteTask(task.id)} className="p-2 bg-red-500 text-white rounded-md">
                Delete
              </button>
              <button onClick={() => handleToggleSubtasks(task.id)} className="p-2 bg-gray-500 text-white rounded-md">
                {showSubtasks[task.id] ? 'Hide' : 'Show'} Subtasks
              </button>
            </div>
          </div>
          {showSubtasks[task.id] && (
            <div className="mt-2">
              {task.subtasks && task.subtasks.length > 0 ? (
                <ul className="list-disc ml-4">
                  {task.subtasks.map((subtask, index) => (
                    <li key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={subtask.completed}
                        onChange={() => {
                          const newSubtasks = [...task.subtasks];
                          newSubtasks[index].completed = !subtask.completed;
                          editTask(task.id, { subtasks: newSubtasks });
                        }}
                        className="mr-2"
                      />
                      <span className={subtask.completed ? 'line-through text-gray-500' : ''}>
                        {subtask.text}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No subtasks</p>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TdList;
