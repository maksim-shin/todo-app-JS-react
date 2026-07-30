    import "./App.css";
    import TaskList from "./components/TaskList/TaskList";
    import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
    import Footer from "./components/Footer/Footer";
    import { useEffect, useState } from "react";



    function App() {

      const [tasks, setTasks] = useState([]);
      const [filter, setFilter] = useState("all")

      
      

      // -----check box (active or completed)-----
      const toggleTask = (id) => {
        setTasks((tasks) => 
          tasks.map((task) => {
            if (task.id === id) {
              return {
                ...task,
                completed: !task.completed,
              };
            }
            return task;
          })
        );
      };

      // -----add new task-----
      const addTask = (text) => {
        const newTask = {
          id: Date.now(),
          created: new Date(),
          title: text,
          completed: false,
        };
        setTasks((tasks) => [newTask, ...tasks]);
      };

      // -----delete task-----
      const deleteTask = (id) => {
        setTasks((prevTasks) => 
          prevTasks.filter((task) => (task.id !== id))
        ); 
      };

      // -----update task description-----
      const updateTask = (id, text) => {
        setTasks((tasks) =>
          tasks.map((task) => {
            if (task.id === id) {
              return {
                ...task,
                title: text,
              };
            }
            return task;
          })
        );
      };

      // -----get tasks data-----
      const fetchData = async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/todos");

          if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
          const data = await response.json();

          setTasks(
            data.map((task) => ({
              ...task, 
              created: new Date(),
            })).slice(0, 10)
          );

        } catch (error) {
          console.error("Error:", error);
        }
      };

      useEffect(() => {
        fetchData()
      }, []);

      // -----filter-----
      const filteredTasks = tasks.filter((task) => {
        if(filter === "active"){
          return task.completed === false;
        } else if (filter === "completed") {
          return task.completed === true;
        } else {
          return task;
        }
      })

      // -----active tasks-----
      const activeTasks = tasks.filter((task) => {
        return task.completed === false}).length

      // -----clear completed-----
      const clearCompleted = () => {
        setTasks((prevTasks) => 
          prevTasks.filter((task) => task.completed === false)
        ) 
      };

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
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              updateTask={updateTask}
              tasks={filteredTasks}
              
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
