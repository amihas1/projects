import React, { useState } from 'react';

function TaskEntry(props) {
    
    // we create state hooks for the three main functionalities of each entry (highlight, erase, complete/checked)
    const [highlight, setHighlight] = useState(false); // by default, task is not highlighted
    const [erase, setErase] = useState(false); // by default, task is not erased
    const [check, setCheck] = useState(false); // by default, task is not checked off (or marked as complete)


    function handleHighlightButton() { // this function is invoked when user hightlights a task
        highlight === true ? setHighlight(false) : setHighlight(true);
    }

    function handleEraseButton() { // this function is invoked when user erases a task from the list
        erase === true ? setErase(false) : setErase(true);
    }

    function handleCheckButton() { // this function is invoked when user checks off a task (or marks task as complete)
        check === false ? setCheck(true) : setCheck(false);
    }

    let checkButtonStyle; // the check button will either be checked or unchecked

    if (!erase) { // if the user has not erased the task yet
        if (check) { // if the user has checked off the task
            checkButtonStyle = <button className="checkButtonClicked" onClick={handleCheckButton}></button>;
        } else { // if the user has NOT checked off the task
            checkButtonStyle = <button className="checkButtonUnclicked" onClick={handleCheckButton}></button>;
        }
        return (   // the four elements nested in the div element include the check button, the task, the erase button, and the highlight button  
            <div>  
                {checkButtonStyle}
                <span style={{backgroundColor: highlight ? "#e2b30b" : "white", width: "250px", color: check ? "green" : (highlight ? "white" : "black"), textDecoration: check ? "line-through" : ""}}>{props.entry}</span>
                <button className="eraseButton" onClick={handleEraseButton}>X</button>
                <button className="highlightButton" onClick={handleHighlightButton}>★</button>
            </div>)
     
    } 

}

export default TaskEntry;

