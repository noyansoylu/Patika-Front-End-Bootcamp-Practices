export const TaskFilters = ({
  currentFilter,
  setFilter,
  clearCompletedTasks,
}) => {
  return (
    <div className="task-filters">
      <button
        className={currentFilter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={currentFilter === "active" ? "active" : ""}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={currentFilter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button onClick={clearCompletedTasks}>Clear Completed</button>
    </div>
  );
};
