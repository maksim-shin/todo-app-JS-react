import "./NewTaskForm.css"
import { useRef } from "react";

function NewTaskForm({addTask}) {
   const inputRef = useRef();

    function newTaskMode(event) {
        if (event.key === "Enter") {
            const inputText = inputRef.current.value.trim();

            if (inputText) {
                addTask(inputText);
                inputRef.current.value = "";
            }
        }
    }


    return (
        
        <input
            className="new-todo" 
            placeholder="What needs to be done?" 
            autoFocus
            ref={inputRef}
            onKeyDown={newTaskMode}
           
        />
        
    );
}

export default NewTaskForm;