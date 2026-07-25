import "./Task.css"
import { format } from "date-fns";

function Task({
  id,
  status,
  description,
  created,
  toggleTask,
  deleteTask,
  updateTask,
  editingId,
  setEditingId
}) {

  function updateText(event) {
    const text = event.target.value;
    updateTask(id, text)
  };

  function closeEditingMode (event) {
     console.log(event.key);
    if (event.key === "Enter") {setEditingId(null)}
   
    
  };
  
  return (
   <li className={editingId === id ? "editing" : status}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={status === "completed"}
          onChange={() => toggleTask(id)}
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">
            {format(created, "HH:mm")}
          </span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => setEditingId(id)}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={() => {deleteTask(id)}}
        ></button>
      </div>
      <input
        type="text"
        className="edit"
        value={description}
        onChange={updateText}
        onKeyDown={closeEditingMode}
      />
    </li>
  );
}
export default Task;
