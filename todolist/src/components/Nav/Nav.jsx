import './Nav.css'

function Nav ({
    openHome, 
    openToday, 
    openMonth, 
    openYear,
    openComplete,
    openIncomplete,
    completeCounter, 
    incompleteCounter
}) {

    function createToDo() {
        
        let createForm = document.getElementsByClassName('create-form')[0];
        createForm.classList.add('visible')
        let mainPage = document.getElementById('main-page');
        mainPage.classList.add('blur');
        mainPage.classList.add('avoid-clicks')

    }

    return(
        <div className="menu">
            <div onClick={openHome} className="category-active category home-category">
                <p>Home</p>     
            </div>
            <div onClick={openToday} className="category today-category">
                <p>Today</p>
            </div>
            <div onClick={openMonth} className="month-category category">
                <p>Month</p>
            </div>
            <div onClick={openYear} className="year-category category">
                <p>Year</p>
            </div>
            <div onClick={openComplete} className='complete-category category'>
                <p>Completed</p>
                <div className='check-counter'>{completeCounter}</div>
            </div>
            <div className='incomplete-category category'>
                <p>Incomplete</p>
                <div className='check-counter'>{incompleteCounter}</div>
                </div>
            <i onClick={createToDo} className="fa-solid add-butt fa-calendar-plus fa-5x"></i>
        </div>
    )
}

export default Nav