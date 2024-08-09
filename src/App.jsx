import React, { useState } from 'react';
import TdInput from './TdInput';  
import TdList from './TdList';    
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  console.log('App component rendered!');
  const addTask = (newTask) => {
    if (newTask.trim() === '') return;
    const newTaskItem = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskItem]);
  };

  const editTask = (id, newText) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <p class="title"><b>Todo List</b></p>

      <TdInput addTask={addTask} />
      <TdList
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
}

export default App;
