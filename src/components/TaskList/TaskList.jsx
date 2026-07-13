import "./TaskList.css"
import Task from '../Task/Task'

function TaskList({tasks, toggleTask, deleteTask, editingTask, updateTask}) {
    return (
        <ul className="todo-list">
            {tasks.map ((task) => (<Task
            key={task.id}
            id={task.id}
            status={task.status}
            description={task.description}
            created={task.created}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editingTask={editingTask}
            editing={task.editing}
            updateTask={updateTask}
        />))}
       
        </ul>

    );
}

export default TaskList;

