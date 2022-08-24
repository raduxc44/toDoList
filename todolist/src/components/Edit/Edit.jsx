import './Edit.css'

function Edit () {

    function removeEditOverlay() {

        let editOverlay = document.getElementsByClassName('edit-overlay')[0];
        editOverlay.classList.add('invisible');
        editOverlay.classList.remove('visible');
        let mainPage = document.getElementById('main-page')
        mainPage.classList.remove('blur')
        mainPage.classList.remove('avoid-clicks')

    }

    const checkIfActive = () => {

        let lowPrioInput = document.getElementById('edit-new-low');
        let lowPrioContainer = document.getElementsByClassName('edit-new-prio-low')[0];
        let midPrioInput = document.getElementById('edit-new-mid');
        let midPrioContainer = document.getElementsByClassName('edit-new-prio-mid')[0];
        let highPrioInput = document.getElementById('edit-new-high');
        let highPrioContainer = document.getElementsByClassName('edit-new-prio-high')[0];
        console.log(lowPrioInput)

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