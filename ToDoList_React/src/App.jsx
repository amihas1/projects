import React, { useState } from 'react';
import TaskEntry from './TaskEntry.jsx'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([]);   // state hook that manages our current tasks
                                            // initialized to an empty array

  function handleClick() { // this function is invoked when the user adds a new task

      if (document.getElementById("userField").value != "") { // if the text field is NOT empty
        if (document.getElementById("userField").value.length > 25) { // if the text field has more than 25 characters
          alert("Please make sure your task is less than 25 characters.");
        } else {
          const newTask = document.getElementById("userField").value; // save the value that user entered in text field
          setTasks([...tasks, newTask]); // we add this value to task array
        }
      } else { // if the text field is empty
        alert("Please enter a task.")
      }
    
  }

  // tasksToDisplay converts the array of text strings (which consists of the user's tasks) into jsx elements
  // we create a new TaskEntry component for each task, and we pass the entry as a prop to the component
  const tasksToDisplay = tasks.map((entry) => (
    <div>
      <TaskEntry entry={entry}/> 
    </div>
  ));

  return (
    <div>
    <div className = "pane"></div>
      <div className="addtask">
      <input style={{width: "250px"}} type="text" id="userField" placeholder="Enter your task here"/>
      <button className='addButton' onClick={handleClick}>ADD</button>
      </div>
      <div className="task">{tasksToDisplay}</div>
      
    </div>
  );
}

export default App;
