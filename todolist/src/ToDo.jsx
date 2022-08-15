import './ToDo.css'

function ToDo (props) {

    return (
        <div className="todo high-border">
            <div className="todo-first-half">
                <div className='high-container check-container'>
                    <i class="fa-solid fa-check high-check"></i>
                </div>
                <p>{props.title}</p>
            </div>
            <div className="todo-second-half">
                <button className="details details-high">DETAILS</button>
                <p>due-date</p>
                <i class="fa-solid fa-pencil icon-high"></i>
                <i class="fa-solid fa-ban icon-high"></i>
            </div>
        </div>
    )
}

export default ToDo