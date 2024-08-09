import React from 'react';
import TdItem from './TdItem';  

function TdList({ tasks, editTask, deleteTask, toggleTaskCompletion }) {
  return (
    <ul className="TdList">
      {tasks.map(task => (
        <TdItem
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
}

export default TdList;
