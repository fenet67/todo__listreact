
import React, { useState, useEffect } from 'react';
import TdInput from './components/TdInput';
import TdList from './components/TdList';
import TdFilter from './components/TdFilter';
import TdSettings from './components/TdSettings';
import { ThemeContext } from './context/ThemeContext';
import { addRecurringTasks } from './utils/recurringTasks';
import { useLocalStorage } from './hooks/useLocalStorage';
import bgImage from './assets/bg.png';

function App() {
  
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [filter, setFilter] = useState('all');

  
  const addTask = (newTask) => {
    if (newTask.text.trim() === '') return;
    const newTaskItem = {
      id: Date.now(),
      ...newTask,
    };
    setTasks([...tasks, newTaskItem]);
  };

 
  const editTask = (id, updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, ...updatedTask } : task
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

  
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.category === filter;
  });

  
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks(addRecurringTasks(tasks));
    }, 24 * 60 * 60 * 1000); // Run every 24 hours
    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <ThemeContext.Provider value={theme}>
        <div className="App bg-${theme} min-h-screen  flex flex-col items-center justify-center  bg-cover bg-center p-5 rounded-lg shadow-md" style={{ backgroundImage: `url(${bgImage})` }}>
          <p className="title text-3xl font-bold mb-8">Todo</p>
          <TdInput addTask={addTask} />
          <TdFilter filter={filter} onFilterChange={handleFilterChange} />
          <TdList
            tasks={filteredTasks}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
          <TdSettings onThemeChange={handleThemeChange} />
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
