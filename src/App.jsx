
import './App.css';
import TaskList from "./components/TaskList";
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';


function App() {
 

  return (

    <section className="todoapp">

      <NewTaskForm  />
  
      <section className="main">
          
        <TaskList />
        <Footer />

      </section>

    </section>

  )
}

export default App
