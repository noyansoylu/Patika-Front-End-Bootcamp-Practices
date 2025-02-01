import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const AddTask = (e) => {
    if (e.key === "Enter") {
      addTask(taskName);
      setTaskName("");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyPress={AddTask}
      />
    </div>
  );
};

export default TaskInput;
