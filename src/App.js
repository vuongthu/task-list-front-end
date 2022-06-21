import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS_DATA = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [taskData, setTaskData] = useState(TASKS_DATA);

  const completeTask = (id) => {
    const tasks = taskData.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });

    setTaskData(tasks);
  };

  const deleteTask = (id) => {
    const newTasks = taskData.filter((task) => task.id !== id);
    setTaskData(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={taskData} onCompleteTask={completeTask} onDeleteTask={deleteTask}/>}</div>
      </main>
    </div>
  );
};

export default App;
