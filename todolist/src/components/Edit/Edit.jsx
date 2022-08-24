import './Edit.css'

function Edit () {

    function removeEditOverlay() {

        let editOverlay = document.getElementsByClassName('details-overlay')[0];
        editOverlay.classList.add('invisible');
        editOverlay.classList.remove('visible');
        let mainPage = document.getElementById('main-page')
        mainPage.classList.remove('blur')
        mainPage.classList.remove('avoid-clicks')

    }

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

return (
    <>
    <div className="edit-overlay">
            <div className='create-nav'>
                <h3>Edit your ToDo</h3>
                <div className="create-close-butt" onClick={removeEditOverlay}>X</div>
            </div>
            <div className='create-main-content'>
                <form>
                    <div><textarea className='text-box' name="title" id="title" maxLength={40} required placeholder='Old Title Dummy'></textarea></div>
                    <div className='create-details'>
                        <textarea name="details" maxLength={40} className='text-box' id="details"  placeholder='Old Details Dummy'></textarea>
                    </div>
                    <div className='create-date'>
                        <label htmlFor="create-date">Due date: </label>
                        <input type="date" name="due-date" id="due-date" />
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