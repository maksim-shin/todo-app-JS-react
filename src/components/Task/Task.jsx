  import { useState, useEffect, useRef } from "react";
import "./Task.css"
  import { format } from "date-fns";

  function Task({
    id,
    completed,
    title,
    created,
    toggleTask,
    deleteTask,
    updateTask,
  }) {

    const [editing, setEditing] = useState(false);
    const [editText, setEditText] = useState(title);
    const inputRef = useRef(null);
    
    const updateText = (event) => {
      setEditText(event.target.value)
    };

    const closeEditingMode = (event) => {
      if (event.key === "Enter") {
        updateTask(id, editText);
        setEditing(false);
      }

      if (event.key === "Escape") {
        setEditing(false);
      }
    };

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
    
    return (
    <li className={editing ? "editing" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => toggleTask(id)}
          />
          <label>
            <span className="description">{title}</span>
            <span className="created">
              {format(created, "HH:mm")}
            </span>
          </label>
          <button
            className="icon icon-edit"
            onClick={() => {
              setEditText(title);
              setEditing(true);
            }}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={() => {deleteTask(id)}}
          ></button>
        </div>
        <input
          ref={inputRef}
          type="text"
          className="edit"
          value={editText}
          onChange={updateText}
          onKeyDown={closeEditingMode}
        />
      </li>
    );}
  
  export default Task;
