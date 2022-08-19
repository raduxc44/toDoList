import './ToDo.css'

function ToDo (props) {

    function openDetails () {

        let detailsOverlay = document.getElementsByClassName('details-overlay')[0];
        detailsOverlay.classList.remove('invisible')
        let mainPage = document.getElementById('main-page');
        mainPage.classList.add('blur');
        mainPage.classList.add('avoid-clicks')

    }

    return (
        <div className={`todo ${props.layout}-border`}>
            <div className="todo-first-half">
                <div className={`${props.layout}-container check-container`}>
                    <i class={`fa-solid fa-check ${props.layout}-check`}></i>
                </div>
                <p>{props.title}</p>
            </div>
            <div className="todo-second-half">
                <button onClick={openDetails} className={`details details-${props.layout}`}>DETAILS</button>
                <p className='date-container'>{props.date}</p>
                <i class={`fa-solid fa-pencil icon-${props.layout}`}></i>
                <i class={`fa-solid fa-ban icon-${props.layout}`}></i>
            </div>
        </div>
    )
}

export default ToDo