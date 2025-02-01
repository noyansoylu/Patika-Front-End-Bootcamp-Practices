const FilterPanel = ({ setFilter, currentFilter, clearCompleted }) => (
  <div className="filter-panel">
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
    <button onClick={clearCompleted}>Clear Completed</button>
  </div>
);

export default FilterPanel;
