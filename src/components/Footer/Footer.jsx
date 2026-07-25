import "./Footer.css"
import TasksFilter from '../TasksFilter/TasksFilter';

function Footer({filter, setFilter, activeTasks, clearCompleted}) {


    return (
        <footer className="footer">
            <span className="todo-count">{activeTasks} items left</span>
            <TasksFilter 
                filter={filter}
                setFilter={setFilter}
            />
            <button onClick={clearCompleted} className="clear-completed">Clear completed</button>
        </footer>
    );
}

export default Footer;