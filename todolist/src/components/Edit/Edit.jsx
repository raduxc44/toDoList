import { useEffect, useState } from 'react';
import './Edit.css'

function Edit ({
    priority, 
    selectedToDoForEdit,
    setSelectedToDoForEdit,
    // modifiedToDo,
    setModifiedToDo, 
    todos, 
    setTodos, 
    inputEditDetails,
    setInputEditDetails, 
    inputEditTitle,
    setInputEditTitle}) {

    const [date, setDate] = useState(selectedToDoForEdit.date);
    
    function removeEditOverlay() {

        let editOverlay = document.getElementsByClassName('edit-overlay')[0];
        editOverlay.classList.add('invisible');
        editOverlay.classList.remove('visible');
        let mainPage = document.getElementById('main-page')
        mainPage.classList.remove('blur')
        mainPage.classList.remove('avoid-clicks')
        setSelectedToDoForEdit()
    }

    // Gets the previously set priority of the ToDo and applies styling to the corresponding priority
    useEffect (() => {
        let lowPrioContainer = document.getElementsByClassName('edit-new-prio-low')[0];
        let midPrioCotainer = document.getElementsByClassName('edit-new-prio-mid')[0];
        let highPrioContainer = document.getElementsByClassName('edit-new-prio-high')[0];
        if(priority === 'low') {
            lowPrioContainer.classList.add('edit-new-prio-low-active');
            midPrioCotainer.classList.remove('edit-new-prio-mid-active');
            highPrioContainer.classList.remove('edit-new-prio-high-active');
        }
        else if(priority === 'mid') {
            midPrioCotainer.classList.add('edit-new-prio-mid-active');
            lowPrioContainer.classList.remove('edit-new-prio-low-active');
            highPrioContainer.classList.remove('edit-new-prio-high-active');
        }
        else if(priority === 'high') {
            highPrioContainer.classList.add('edit-new-prio-high-active');
            lowPrioContainer.classList.remove('edit-new-prio-low-active');
            midPrioCotainer.classList.remove('edit-new-prio-mid-active');
        }
    })

    const checkIfActive = () => {

        let lowPrioInput = document.getElementById('edit-new-low');
        let lowPrioContainer = document.getElementsByClassName('edit-new-prio-low')[0];
        let midPrioInput = document.getElementById('edit-new-mid');
        let midPrioContainer = document.getElementsByClassName('edit-new-prio-mid')[0];
        let highPrioInput = document.getElementById('edit-new-high');
        let highPrioContainer = document.getElementsByClassName('edit-new-prio-high')[0];

        if (lowPrioInput.checked) {   
            lowPrioContainer.classList.add('edit-new-prio-low-active');
            midPrioContainer.classList.remove('edit-new-prio-mid-active');
            highPrioContainer.classList.remove('edit-new-prio-high-active');
        }
        else if (midPrioInput.checked) {
            lowPrioContainer.classList.remove('edit-new-prio-low-active');
            midPrioContainer.classList.add('edit-new-prio-mid-active');
            highPrioContainer.classList.remove('edit-new-prio-high-active');
        }
        else if (highPrioInput.checked) {
            lowPrioContainer.classList.remove('edit-new-prio-low-active');
            midPrioContainer.classList.remove('edit-new-prio-mid-active');
            highPrioContainer.classList.add('edit-new-prio-high-active')
        }
        
    }

    const inputTitleHandler = e => {
        setInputEditTitle(e.target.value)
      }

    const inputDetailsHandler = e => {
        setInputEditDetails(e.target.value)
      }

    const dateHandler = e => {
        setDate(e.target.value);
    }
    const replaceTodo = (priority, date) => {
        const result = [];


        for (let i = 0; i < todos.length; i++) {
            if (i + 1 === selectedToDoForEdit.id) {
                result.push({ ...todos[i], title: inputEditTitle, details: inputEditDetails, priority, date });
            } else {
                result.push(todos[i]);
            }
        }

        return result;
    };

    const handleEditSubmit = e => {

        e.preventDefault()
        let dateWarning = document.getElementsByClassName('edit-date-warn')[0]
        
        // Checks the priority so it can add the correct styling to the toDo

        let lowPriority = document.getElementById('edit-new-low');
        if (lowPriority.checked) {  
            priority = 'low';
        }
        let midPriority = document.getElementById('edit-new-mid');
        if (midPriority.checked) {
            priority = 'mid'
        }
        let highPriority = document.getElementById('edit-new-high');
        if (highPriority.checked) {
            priority = 'high'
        }

        // ISSUE ! The modifiedToDo state doesn't get updated until the function runs for the 2nd time | TO FIX!
        // Ask how and WHY it works!!!
        let selectedYear = Number(date[0] + date[1] + date[2] + date[3])
        if(selectedYear >= 2022 && selectedYear < 2100) {
            dateWarning.style.visibility = 'hidden'
            setTodos(replaceTodo(priority, date))
            removeEditOverlay()
        }
        else {
            dateWarning.style.visibility = 'visible'
        }
        // console.log(modifiedToDo)
      };

    //   useEffect(() => {setTodos(todos => todos, todos.splice(selectedToDoForEdit.key - 1, 1, modifiedToDo))}, [setTodos ,todos ,modifiedToDo, selectedToDoForEdit.key])
      

return (
    <>
    <div className="edit-overlay">
            <div className='create-nav'>
                <h3>Edit your ToDo</h3>
                <div className="create-close-butt" onClick={removeEditOverlay}>X</div>
            </div>
            <div className='create-main-content'>
                <form onSubmit={handleEditSubmit}>
                    <div>
                        <textarea className='text-box' name="title" id="title" maxLength={40} required value={inputEditTitle} onChange={inputTitleHandler} />
                    </div>
                    <div className='create-details'>
                        <textarea name="details" maxLength={55} className='text-box' id="details" value={inputEditDetails} onChange={inputDetailsHandler} />
                    </div>
                    <div className='create-date'>
                        <label htmlFor="create-date">Due date: </label>
                        <input type="date" name="due-date" id="due-date" value={date} onChange={dateHandler}/>
                        <p className='edit-date-warn'>Please enter a valid date!</p>
                    </div>
                    <div className='priority-and-send'>
                        <div className='edit-priority'>
                            <label htmlFor="edit-priority">Priority: </label>
                            <div className='edit-new-prio-butt edit-new-prio-low'>
                                <label className='edit-prio-label' htmlFor="edit-new-low">Low</label>
                            </div>
                            <input onClick={checkIfActive} type="radio" name="edit-new-priority" id="edit-new-low" className='edit-new-prio-input'/>
                            <div className='edit-new-prio-butt edit-new-prio-mid'>
                                <label className='edit-prio-label' htmlFor="edit-new-mid">Mid</label>
                            </div>
                            <input onClick={checkIfActive} type="radio" name='edit-new-priority' id='edit-new-mid' className='edit-new-prio-input'/>
                            <div className='edit-new-prio-butt edit-new-prio-high'>
                                <label className='edit-prio-label' htmlFor="edit-new-high">High</label>
                            </div>
                            <input onClick={checkIfActive} type="radio" name="edit-new-priority" id="edit-new-high" className='edit-new-prio-input'/>
                        </div>
                        <div className='create-submit-edit'>
                            <button type='submit'>Confirm Edit</button>
                        </div>
                    </div> 
                </form>
            </div>
        </div>
        </>
    )
}

export default Edit