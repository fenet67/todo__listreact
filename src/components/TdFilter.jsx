
import React from 'react';

const filters = ['all', 'Work', 'Personal', 'Grocery', 'Other'];

function TdFilter({ filter, onFilterChange }) {
  return (
    <div className="flex gap-2 mb-4">
      {filters.map(f => (
        <button
          key={f}
          onClick={() => onFilterChange(f)}
          className={`p-2 rounded-md ${filter === f ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default TdFilter;
