import React from 'react';

function TdItem({ task, editTask, deleteTask, toggleTaskCompletion }) {
  return (
    <li className="TdItem">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <input
        type="text"
        value={task.text}
        onChange={(e) => editTask(task.id, e.target.value)}
      />
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TdItem;
