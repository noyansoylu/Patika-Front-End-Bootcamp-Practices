import { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterPanel from "./components/FilterPanel";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (taskName) => {
    if (taskName.trim() === "") return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: taskName,
        completed: false,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return false;
  });

  return (
    <div className="app-container">
      <h1 className="app-title">To-Do List</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        toggleCompletion={toggleCompletion}
        deleteTask={deleteTask}
      />
      <FilterPanel
        setFilter={setFilter}
        currentFilter={filter}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default App;
