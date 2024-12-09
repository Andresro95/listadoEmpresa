import React from "react";
import { MdDeleteSweep } from "react-icons/md";

const TaskItem = ({ task, deleteTask, toggleCheck }) => {
  return (
    <li className="items">
      <div className="items-text">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => toggleCheck(task.taskName)}
        />
        <p
          style={{ paddingLeft: "8px", fontSize: "18px" }}
          className={task.checked ? "isChecked" : ""}
        >
          {task.taskName}
        </p>
      </div>
      <MdDeleteSweep
        className="deleteIcon"
        onClick={() => deleteTask(task.taskName)}
      />
    </li>
  );
};

export default TaskItem;
