import './CreateOverlay.css'

function CreateOverlay ({inputTitle ,setInputTitle, todos, setTodos}) {

    // Disables the entire overlay
    function removeOverlay () {

        let createOverlay = document.getElementsByClassName('create-overlay')[0];
        
        createOverlay.classList.remove('visible')
        
        let mainPage = document.getElementById('main-page')
        mainPage.classList.remove('blur')
        mainPage.classList.remove('avoid-clicks')

    }

    // Creates the todo object when the form is submitted

    const handleSubmit = e => {

        e.preventDefault();
        setTodos([...todos, {title: inputTitle, id: Math.floor(Math.random() * 1000) }])
    
      };
    
      //Selects the title target
      const inputTitleHandler = e => {
        setInputTitle(e.target.value)
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
                        <textarea name="details" className='text-box' id="details" placeholder='Details'></textarea>
                    </div>
                    <div className='create-date'>
                        <label htmlFor="create-date">Due date: </label>
                        <input type="date" name="due-date" id="due-date" />
                    </div>
                    <div className='priority-and-send'>
                        <div className='create-priority'>
                            <label htmlFor="create-priority">Priority: </label>
                            <div className='create-new-prio-butt create-new-prio-low'>
                                <label htmlFor="create-new-low">Low</label>
                            </div>
                            <input type="radio" required name="create-new-priority" id="create-new-low" className='create-new-prio-input'/>
                            <div className='create-new-prio-butt create-new-prio-mid'>
                                <label htmlFor="create-new-mid">Mid</label>
                            </div>
                            <input type="radio" required name='create-new-priority' id='create-new-mid' className='create-new-prio-input'/>
                            <div className='create-new-prio-butt create-new-prio-high'>
                                <label htmlFor="create-new-high">High</label>
                            </div>
                            <input type="radio" required name="create-new-priority" id="create-new-high" className='create-new-prio-input'/>
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