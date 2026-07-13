import "./Task.css"
import { format } from "date-fns";

function Task({
  id,
  status,
  description,
  created,
  toggleTask,
  deleteTask,
  editingTask,
  editing,
  updateTask,
}) {
  return (
   <li className={editing ? "editing" : status}>
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
            {created}
            {/* {format(created, "HH:mm")} */}
          </span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => {
            editingTask(id, true);
          }}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={() => {
            deleteTask(id);
          }}
        ></button>
      </div>
      <input
        type="text"
        className="edit"
        value={description}
        onChange={(event) => {
          const text = event.target.value;
          updateTask(id, text)
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            editingTask(id, false)
          }
        }
      }
      />
    </li>
  );
}
export default Task;
