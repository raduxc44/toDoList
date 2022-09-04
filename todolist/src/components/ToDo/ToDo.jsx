import './ToDo.css'

function ToDo ({checked, priority, title, checkButton, date, showDetails, showEdit ,deleteToDo}) {
    return (
        <div className={`todo ${priority}-border`}>
            <div className="todo-first-half">
                <div onClick={checkButton} className={`${priority}-container check-container`}>
                    {checked && <i className={`fa-solid fa-check ${priority}-check`}></i>}
                </div>
                <p>{title}</p>
            </div>
            <div className="todo-second-half">
                <button onClick={showDetails} className={`details details-${priority}`}>DETAILS</button>
                <p className='date-container'>{date}</p>
                <i onClick={showEdit} className={`fa-solid fa-pencil icon-${priority}`}></i>
                <i onClick={deleteToDo} className={`fa-solid fa-ban icon-${priority}`}></i>
            </div>
        </div>
    )
}

export default ToDo