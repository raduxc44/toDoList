import check from './check-mark.png'

function ToDoContainer () {
    return (
        <div className="to-do-container">
            <div className="todo one">
                <img src={check} alt="" srcset="" />
                <p>Brush teeth</p>
                <p>details</p>
                <p>remove</p>
            </div>
            <div className="todo two">
                <img src={check} alt="" srcset="" />
                <p>Brush teeth</p>
                <p>details</p>
                <p>remove</p>
            </div>
            <div className="todo three">
                <img src={check} alt="" srcset="" />
                <p>Brush teeth</p>
                <p>details</p>
                <p>remove</p>
            </div>
        </div>
    )
}

export default ToDoContainer