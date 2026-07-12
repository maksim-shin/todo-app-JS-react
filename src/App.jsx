import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Completed task",
      created: "created 17 seconds ago",
      status: "completed",
      editing: false,
    },
    {
      id: 2,
      description: "Editing task",
      created: "created 5 minutes ago",
      status: "active",
      editing: true,
    },
    {
      id: 3,
      description: "Active task",
      created: "created 5 minutes ago",
      status: "active",
      editing: false,
    },
    {
      id: 4,
      description: "test",
      created: "created 999 minutes ago",
      status: "active",
      editing: false,
    },
  ]);

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: task.status === "active" ? "completed" : "active",
          };
        }
        return task;
      }),
    );
  }

  function deleteTask(id) {
    setTasks(
      tasks.filter((task) => {
        if (task.id !== id) {
          return task;
        }
      }),
    );
  }

  function editingTask(id, isEditing) {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            editing: isEditing,
          };
        }
        return {
          ...task,
          editing: false,
        };
      }),
    );
  }

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
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editingTask={editingTask}
        />
        <Footer />
      </section>
    </section>
  );
}

export default App;
