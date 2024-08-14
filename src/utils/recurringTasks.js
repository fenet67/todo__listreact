
export const addRecurringTasks = (tasks) => {
    const today = new Date().toISOString().split('T')[0];
    return tasks.map(task => {
      if (task.recurring && task.dueDate < today) {
        return { ...task, dueDate: today, completed: false };
      }
      return task;
    });
  };
  