const TaskList = ({ tasks, toggleCompletion, deleteTask }) => (
    <ul className="task-list">
        {tasks.map((task) => (
            <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onClick={() => toggleCompletion(task.id)}
            />
            {task.name}
            <button onClick={() => deleteTask(task.id)}>X</button>
            </li>
        ))}
    </ul>
);

export default TaskList;
