import './ToDo.css'

function ToDo ({checked, priority, title, checkButton, deleteTodo, date}) {

    // function openDetails () {

    //     let detailsOverlay = document.getElementsByClassName('details-overlay')[0];
    //     detailsOverlay.classList.remove('invisible')
    //     let mainPage = document.getElementById('main-page');
    //     mainPage.classList.add('blur');
    //     mainPage.classList.add('avoid-clicks')

    // }
    console.log(checked);
    return (
        <div className={`todo ${priority}-border`}>
            <div className="todo-first-half">
                <div onClick={checkButton} className={`${priority}-container check-container`}>
                    {checked && <i class={`fa-solid fa-check ${priority}-check`}></i>}
                </div>
                <p>{title}</p>
            </div>
            <div className="todo-second-half">
                <button className={`details details-${priority}`}>DETAILS</button>
                <p className='date-container'>{date}</p>
                <i class={`fa-solid fa-pencil icon-${priority}`}></i>
                <i id onClick={deleteTodo} class={`fa-solid fa-ban icon-${priority}`}></i>
            </div>
        </div>
    )
}

export default ToDo