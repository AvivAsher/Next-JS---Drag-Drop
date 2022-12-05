import { DragCard } from "../pages/DragCard";

const Data = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "Javascript" },
  { name: "Python" },
];

export function DragFile() {

  return (
    <div className="drag-container">
      <div>
        <div>
          <h3 style={{textDecoration:"underline"}}>Draged Items</h3>
        </div>
        {Data.map((e) => (
          <div 
            key={e.name}>
            <DragCard draggable name={e.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DragFile;
