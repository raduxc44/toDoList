import './ToDoContainer.css'

function ToDoContainer () {
    return (
        <div className="to-do-container">
            <div className="todo high-border">
                <div className="todo-first-half">
                    <i class="fa-solid fa-check high-check"></i>
                    <p>Brush teeth</p>
                </div>
                <div className="todo-second-half">
                    <button className="details details-high">DETAILS</button>
                    <p>due-date</p>
                    <i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-ban"></i>
                </div>
            </div>
            <div className="todo mid-border">
                <div className="todo-first-half">
                    <i class="fa-solid fa-check mid-check"></i>
                    <p>Brush teeth</p>
                </div>
                <div className="todo-second-half">
                    <button className="details details-mid">DETAILS</button>
                    <p>due-date</p>
                    <i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-ban"></i>
                </div>
            </div>
            <div className="todo low-border">
                <div className="todo-first-half">
                    <i class="fa-solid fa-check low-check"></i>
                    <p>Brush teeth</p>
                </div>
                <div className="todo-second-half">
                    <button className="details details-low">DETAILS</button>
                    <p>due-date</p>
                    <i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-ban"></i>
                </div>
            </div>
        </div>
    )
}

export default ToDoContainer