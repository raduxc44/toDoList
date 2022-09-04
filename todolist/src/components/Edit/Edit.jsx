import { useEffect } from 'react';
import './Edit.css'

function Edit ({
    title, 
    details, 
    date,
    setDate,
    priority, 
    selectedToDoForEdit,
    setselectedToDoForEdit,
    modifiedToDo,
    setModifiedToDo, 
    todos, 
    setTodos, 
    currentKey, 
    setCurrentKey, 
    inputEditDetails,
    setInputEditDetails, 
    inputEditTitle,
    setInputEditTitle}) {

    function removeEditOverlay() {

        let editOverlay = document.getElementsByClassName('edit-overlay')[0];
        editOverlay.classList.add('invisible');
        editOverlay.classList.remove('visible');
        let mainPage = document.getElementById('main-page')
        mainPage.classList.remove('blur')
        mainPage.classList.remove('avoid-clicks')
        setselectedToDoForEdit()

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
        if(e.target.value) {setDate(e.target.value)} else {setDate('No due date')}
      }

    const handleEditSubmit = e => {

        e.preventDefault()
        removeEditOverlay()
        console.log(todos)
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
        setModifiedToDo({title : inputEditTitle, details: inputEditDetails, date: date.split("-").reverse().join("-"), priority: priority})
        // Ask how and WHY it works!!!
        if(modifiedToDo)setTodos(todos => todos, todos.splice(selectedToDoForEdit.key - 1, 1, modifiedToDo))
        console.log(modifiedToDo)
      };
      

return (
    <>
    <div className="edit-overlay">
            <div className='create-nav'>
                <h3>Edit your ToDo</h3>
                <div className="create-close-butt" onClick={removeEditOverlay}>X</div>
            </div>
            <div className='create-main-content'>
                <form onSubmit={handleEditSubmit}>
                    <div><textarea className='text-box' name="title" id="title" maxLength={40} required onChange={inputTitleHandler} defaultValue={title}></textarea></div>
                    <div className='create-details'>
                        <textarea name="details" maxLength={40} className='text-box' id="details" defaultValue={details} onChange={inputDetailsHandler} ></textarea>
                    </div>
                    <div className='create-date'>
                        <label htmlFor="create-date">Due date: </label>
                        <input type="date" name="due-date" id="due-date" defaultValue={date} onChange={dateHandler}/>
                    </div>
                    <div className='priority-and-send'>
                        <div className='edit-priority'>
                            <label htmlFor="edit-priority">Priority: </label>
                            <div className='edit-new-prio-butt edit-new-prio-low'>
                                <label className='edit-prio-label' htmlFor="edit-new-low">Low</label>
                            </div>
                            <input onClick={checkIfActive} type="radio" required name="edit-new-priority" id="edit-new-low" className='edit-new-prio-input'/>
                            <div className='edit-new-prio-butt edit-new-prio-mid'>
                                <label className='edit-prio-label' htmlFor="edit-new-mid">Mid</label>
                            </div>
                            <input onClick={checkIfActive} type="radio" required name='edit-new-priority' id='edit-new-mid' className='edit-new-prio-input'/>
                            <div className='edit-new-prio-butt edit-new-prio-high'>
                                <label className='edit-prio-label' htmlFor="edit-new-high">High</label>
                            </div>
                            <input onClick={checkIfActive} type="radio" required name="edit-new-priority" id="edit-new-high" className='edit-new-prio-input'/>
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