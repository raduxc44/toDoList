import './CreateOverlay.css'

function CreateOverlay () {

    return(
        <div className="create-overlay">
            <form>
                <h3>Create a new ToDo</h3>
                <div className="create-close-butt">X</div>
            </form>
            <div className='sidebar'>
                <ul>
                    <li>
                        <h2>ToDo</h2>
                    </li>
                    <li>
                        <h2>Interest</h2>
                    </li>
                    <li>
                        <h2>Note</h2>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default CreateOverlay