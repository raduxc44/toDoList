import './ToDoContainer.css'

function ToDoContainer () {
    return (
        <div className="to-do-container">
            <div className="todo high-border">
                <div className="todo-first-half">
                    <div className='high-container check-container'>
                        <i class="fa-solid fa-check high-check"></i>
                    </div>
                    <p>Brush teeth</p>
                </div>
                <div className="todo-second-half">
                    <button className="details details-high">DETAILS</button>
                    <p>due-date</p>
                    <i class="fa-solid fa-pencil icon-high"></i>
                    <i class="fa-solid fa-ban icon-high"></i>
                </div>
            </div>
            <div className="todo mid-border">
                <div className="todo-first-half">
                    <div className='mid-container check-container'>
                        <i class="fa-solid fa-check mid-check check"></i>
                    </div>
                    <p>Brush teeth</p>
                </div>
                <div className="todo-second-half">
                    <button className="details details-mid">DETAILS</button>
                    <p>due-date</p>
                    <i class="fa-solid fa-pencil icon-mid"></i>
                    <i class="fa-solid fa-ban icon-mid"></i>
                </div>
            </div>
            <div className="todo low-border">
                <div className="todo-first-half">
                    <div className='low-container check-container'>
                        <i class="fa-solid fa-check low-check check"></i>
                    </div>
                    <p>Brush teeth</p>
                </div>
                <div className="todo-second-half">
                    <button className="details details-low">DETAILS</button>
                    <p>due-date</p>
                    <i class="fa-solid fa-pencil icon-low"></i>
                    <i class="fa-solid fa-ban icon-low"></i>
                </div>
            </div>
        </div>
    )
}

export default ToDoContainer