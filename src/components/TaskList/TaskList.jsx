import "./TaskList.css";
import Task from "../Task/Task";

function TaskList({
  tasks,
  toggleTask,
  deleteTask,
  editingId,
  setEditingId,
  updateTask,
}) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          completed={task.completed}
          title={task.title}
          created={task.created}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
          editingId={editingId}
          setEditingId={setEditingId}
        />
      ))}
    </ul>
  );
}

export default TaskList;