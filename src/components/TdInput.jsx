
import React, { useState } from 'react';

const categories = ['Work', 'Personal', 'Grocery', 'Other'];

function TdInput({ addTask }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Work');
  const [dueDate, setDueDate] = useState('');

  const handleAddTask = () => {
    if (text.trim() === '') return;
    addTask({ text, category, dueDate, completed: false, subtasks: [], recurring: false });
    setText('');
    setDueDate('');
  };

  return (
    <div className="flex flex-col mb-6 w-full max-w-md">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md"
          placeholder="Enter task"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleAddTask}
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TdInput;
