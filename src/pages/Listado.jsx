import { useState } from "react";

const Listado = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [task2, setTask2] = useState("");

  //   console.log(task);
  function handleInputValue(event) {
    setTask(event.target.value);
  }
  function handleInputValue2(event) {
    setTask2(event.target.value);
  }

  function handleAddTask(event) {
    event.preventDefault();

    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  }

  return (
    <>
      <div className="contpadre2">
        <div className="contitulo">
          <h1>Listado</h1>
        </div>
        <div className="cont-formulario2">
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            action=""
            onSubmit={handleAddTask}
          >
            <input type="text" value={task} onChange={handleInputValue} />
            {/* <input type="text" value={task2} onChange={handleInputValue2} /> */}
            <div className="cont-boton">
              <button>Agregar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Listado;
