import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState()
  const addTask =(newTask) => {
    if(newTask.trim() === '')return;
    const newTaskItem = {
      id:Dte.now(),
      text:newTasl,
      completed:true,
        };
        setTasks([...tasks,newTaskItem]);
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
    <>
       <div className="TodoApp">
      <h1>Todo List</h1>
      <TodoInput addTask={addTask} />
      <TodoList
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        />
        </div>
    </>
  );
}

export default App
