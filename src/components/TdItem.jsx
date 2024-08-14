import React from 'react';

function TdItem({ task, editTask, deleteTask, toggleTaskCompletion }) {
  return (
    <li class="flex items-center justify-between p-2.5 border-b border-gray-200 bg-white last:border-none">
      <input class="mr-2.5"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <input class="flex-1 p-2 border border-gray-200 rounded-md mr-2.5"
        type="text"
        value={task.text}
        onChange={(e) => editTask(task.id, e.target.value)}
      />
      <button class="bg-[#eabbc0] text-white border-none rounded-md p-1.5 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#f6b3ba]"
       onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TdItem;
