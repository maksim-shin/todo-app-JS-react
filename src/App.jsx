import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import {v4 as uuid4} from "uuid"


function App() {

  const [tasks, setTasks] = useState([]);

  // -----check box (active or completed)-----
  function toggleTask(id) {
    setTasks((tasks) => 
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: task.status === "active" ? "completed" : "active",
          };
        }
        return task;
      })
    );
  };

  // -----add new task-----
  

  function addTask(text) {
    const newTask = {
      id: uuid4(),
      created: new Date(),
      description: text,
      status: "active",
    };

    setTasks((tasks) => [newTask, ...tasks]);
  };

  // -----delete task-----
  function deleteTask(id) {
    setTasks(
      tasks.filter((task) => {
        if (task.id !== id) {
          return task;
        }
      })
    );
  };

  // -----update task description-----
  function updateTask(id, text) {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            description: text,
          };
        }
        return task;
      })
    );
  };

  const [editingId, setEditingId] = useState(null);

  // -----get tasks data-----
  useEffect(() => {fetchData()}, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      
      const formattedData = data.slice(0, 5).map((task) => ({
        id: task.id,
        status: task.completed ? "completed" : "active",
        description: task.title,
        created: new Date(),
      }));

      setTasks(formattedData);

    } catch (error) {
      console.error("Error");
    }
  };

  // -----filter-----
  const[filter, setFilter] = useState("all")

  const filteredTasks = tasks.filter((task) => {
    if(filter === "active"){
      return task.status === "active";
    } else if (filter === "completed") {
      return task.status === "completed";
    } else {
      return task;
    }
  })

  // -----active tasks-----
  const activeTasks = tasks.filter((task) => {
    return task.status === "active"}).length

  // -----clear completed-----
  const clearCompleted = () => {setTasks(
    tasks.filter((task) => {
      return task.status !== "completed";
      }
    )
  )}
  

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm 
          addTask={addTask}
        />

      </header>
      <section className="main">
        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
          editingId={editingId}
          setEditingId={setEditingId}
          filteredTasks={filteredTasks}
          
        />
        <Footer
          filter={filter}
          setFilter={setFilter} 
          activeTasks={activeTasks}
          clearCompleted={clearCompleted}
        />
      </section>
    </section>
  );
}

export default App;
