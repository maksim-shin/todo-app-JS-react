import Task from './Task'

function TaskList() {
    return (
        <ul className="todo-list">
            <Task
            status="completed"
            description="Completed task"
            created="created 17 seconds ago"
        />
        <Task
            status="editing"
            description="Editing task"
            created="created 5 minutes ago"
        />
        <Task
            description="Active task"
            created="created 5 minutes ago"
        />

         <Task
            description="test"
            created="created 999 minutes ago"
        />
        </ul>

    );
}

export default TaskList;

