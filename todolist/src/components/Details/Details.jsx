import './Details.css'

function Details ({title, priority, date, details, setSelectedToDoDetails}) {

    function removeDetails () {

        let detailsOverlay = document.getElementsByClassName('details-overlay')[0];
        detailsOverlay.classList.add('invisible');
        detailsOverlay.classList.remove('visible');
        let mainPage = document.getElementById('main-page')
        mainPage.classList.remove('blur')
        mainPage.classList.remove('avoid-clicks')
        setSelectedToDoDetails('')

    }

    return(
        <>
        <div className="details-overlay invisible">
            <div className='details-content'>
                <h2>{title}</h2>
                <div className="todo-details">
                    <div className="details-info">
                        <p><strong>Priority:</strong></p>
                        <p>{priority}</p>
                    </div>
                    <div className="details-info">
                        <p><strong>Due Date:</strong></p>
                        <p>{date.split('-').reverse().join('-')}</p>
                    </div>
                    <div className="details-info">
                        <p><strong>Details:</strong></p>
                        <p>{details}</p>
                    </div>
                </div>
            </div>
            <div onClick={removeDetails} className='details-close'>X</div>
        </div>
        </>
    ) 
}

export default Details