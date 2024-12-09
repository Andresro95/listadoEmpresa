import React from "react";
import { MdDeleteSweep } from "react-icons/md";

const Stats = ({ toDoList }) => {
  let counList = toDoList.length;
  return (
    <div>
      <p>
        {counList === 0
          ? "Todo listo para funcionar."
          : `Tienes ${counList} articulo en tu lista.`}
      </p>
    </div>
  );
};

export default Stats;
