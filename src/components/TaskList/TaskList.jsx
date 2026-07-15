import "./TaskList.css"
import Task from '../Task/Task'

function TaskList({tasks, toggleTask, deleteTask, editingId, setEditingId, updateTask}) {
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
            updateTask={updateTask}
            editingId={editingId}
            setEditingId={setEditingId}
        />))}
       
        </ul>

    );
}

export default TaskList;

