import { useState } from "react";
import Listado from "./pages/listado";
import TaskItem from "./pages/TaskItem";
import Stats from "./pages/Stats";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  }

  function toggleCheck(taskName) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  console.log(toDoList);
  return (
    <>
      <div className="contpadre">
        <div className="formulario">
          <Listado addTask={addTask} />
          <div className="toDoList">
            {/* <span>Lista</span> */}
            <ul className="list-items">
              {toDoList.map((task, key) => (
                <TaskItem
                  task={task}
                  key={key}
                  deleteTask={deleteTask}
                  toggleCheck={toggleCheck}
                />
              ))}
            </ul>

            {toDoList.length === 0 ? <p>Lista Vacia</p> : null}
          </div>
        </div>

        <Stats toDoList={toDoList} />
      </div>
    </>
  );
}

export default App;
