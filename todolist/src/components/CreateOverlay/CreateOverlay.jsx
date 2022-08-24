import './CreateOverlay.css'

function CreateOverlay ({
    currentKey, 
    setCurrentKey, 
    inputTitle,
    setInputTitle, 
    inputDetails, 
    setInputDetails, 
    date, 
    setDate, 
    todos, 
    setTodos
}) {

    // Disables the entire overlay
    function removeOverlay () {

        let createOverlay = document.getElementsByClassName('create-overlay')[0];
        
        createOverlay.classList.remove('visible')
        
        let mainPage = document.getElementById('main-page')
        mainPage.classList.remove('blur')
        mainPage.classList.remove('avoid-clicks')
        console.log(todos)

    }

    // Applies styling to the selected priority
    const checkIfActive = () => {

        let lowPrioInput = document.getElementById('create-new-low');
        let lowPrioContainer = document.getElementsByClassName('create-new-prio-low')[0];
        let midPrioInput = document.getElementById('create-new-mid');
        let midPrioContainer = document.getElementsByClassName('create-new-prio-mid')[0];
        let highPrioInput = document.getElementById('create-new-high');
        let highPrioContainer = document.getElementsByClassName('create-new-prio-high')[0];

        if (lowPrioInput.checked) {   
            lowPrioContainer.classList.add('create-new-prio-low-active');
            midPrioContainer.classList.remove('create-new-prio-mid-active');
            highPrioContainer.classList.remove('create-new-prio-high-active');
        }
        else if (midPrioInput.checked) {
            lowPrioContainer.classList.remove('create-new-prio-low-active');
            midPrioContainer.classList.add('create-new-prio-mid-active');
            highPrioContainer.classList.remove('create-new-prio-high-active');
        }
        else if (highPrioInput.checked) {
            lowPrioContainer.classList.remove('create-new-prio-low-active');
            midPrioContainer.classList.remove('create-new-prio-mid-active');
            highPrioContainer.classList.add('create-new-prio-high-active')
        }
        
    }

    // Creates the todo object when the form is submitted

    const handleSubmit = e => {

        e.preventDefault();

        // Checks the priority so it can add the correct styling to the toDo
        let lowPriority = document.getElementById('create-new-low');
        if (lowPriority.checked) {
            setTodos([...todos, {title: inputTitle, details: inputDetails, key: currentKey, date: date.split("-").reverse().join("-"), priority: 'low'}])
            setCurrentKey(currentKey => currentKey + 1)
        }
        let midPriority = document.getElementById('create-new-mid');
        if (midPriority.checked) {
            setTodos([...todos, {title : inputTitle, details: inputDetails, key: currentKey, date: date.split("-").reverse().join("-"), priority: 'mid'}])
            setCurrentKey(currentKey => currentKey + 1)
        }
        let highPriority = document.getElementById('create-new-high');
        if (highPriority.checked) {
            setTodos([...todos, {title : inputTitle, details: inputDetails, key: currentKey, date: date.split("-").reverse().join("-"), priority: 'high'}])
            setCurrentKey(currentKey => currentKey + 1)
        }
      };
    
      //Targets the title selected by the user in the form
      const inputTitleHandler = e => {
        setInputTitle(e.target.value)
      }

      //Targets the details field
      const inputDetailsHandler = e => {
        setInputDetails(e.target.value)
      }

      //Targets the data selected by the user in the form
      const dateHandler = e => {
        if(e.target.value) {setDate(e.target.value)} else {setDate('No due date')}
      }

    return(
        <div className="create-overlay">
            <div className='create-nav'>
                <h3>Create a new ToDo</h3>
                <div className="create-close-butt" onClick={removeOverlay}>X</div>
            </div>
            <div className='create-main-content'>
                <div className='create-sidebar'>
                    <ul>
                        <li>
                            <p>ToDo</p>
                        </li>
                        <li>
                            <p>Interest</p>
                        </li>
                        <li>
                            <p>Note</p>
                        </li>
                    </ul>
                </div>
                <form onSubmit={handleSubmit}>
                    <div><textarea className='text-box' value={inputTitle} name="title" id="title" onChange={inputTitleHandler} maxLength={40} required placeholder={'Title'}></textarea></div>
                    <div className='create-details'>
                        <textarea name="details" maxLength={40} className='text-box' id="details" onChange={inputDetailsHandler} placeholder='Details'></textarea>
                    </div>
                    <div className='create-date'>
                        <label htmlFor="create-date">Due date: </label>
                        <input value={date} onChange={dateHandler} type="date" name="due-date" id="due-date" />
                    </div>
                    <div className='priority-and-send'>
                        <div className='create-priority'>
                            <label htmlFor="create-priority">Priority: </label>
                            <div className='create-new-prio-butt create-new-prio-low'>
                                <label className='prio-label' htmlFor="create-new-low">Low</label>
                            </div>
                            <input onClick={checkIfActive} type="radio" required name="create-new-priority" id="create-new-low" className='create-new-prio-input'/>
                            <div className='create-new-prio-butt create-new-prio-mid'>
                                <label className='prio-label' htmlFor="create-new-mid">Mid</label>
                            </div>
                            <input onClick={checkIfActive} type="radio" required name='create-new-priority' id='create-new-mid' className='create-new-prio-input'/>
                            <div className='create-new-prio-butt create-new-prio-high'>
                                <label className='prio-label' htmlFor="create-new-high">High</label>
                            </div>
                            <input onClick={checkIfActive} type="radio" required name="create-new-priority" id="create-new-high" className='create-new-prio-input'/>
                        </div>
                        <div className='create-submit'>
                            <button type='submit'>Add</button>
                        </div>
                    </div> 
                </form>
            </div>
        </div>
    )

}

export default CreateOverlay