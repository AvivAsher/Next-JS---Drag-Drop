import DragFile from "../components/DragFile";
import { useDrop } from "react-dnd";
import { useState } from "react";

export default function Home() {
  const [basket, setBasket] = useState([]);

  const [{ isOver }, dropRef] = useDrop({
    
    accept: "language",
    drop: (item) =>
      setBasket((basket) =>
        !basket.includes(item) ? [...basket, item] : basket
      ),
    // collect: (monitor) => ({
    //   isOver: monitor.isOver(),
    // }),
  });

  return (

    <div className="container">
      <div>
        <DragFile />
      </div>
      <div className="drop-container" ref={dropRef}>
        <div>
          <div>
            <h3 style={{textDecoration:"underline"}}>Droped Items</h3>
          </div>
          {basket.map((e) => (
            <p>
              {e.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}