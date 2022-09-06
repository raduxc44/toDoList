import './Nav.css'

function Nav ({completeCounter, incompleteCounter}) {

    function createToDo() {
        
        let createForm = document.getElementsByClassName('create-form')[0];
        createForm.classList.add('visible')
        let mainPage = document.getElementById('main-page');
        mainPage.classList.add('blur');
        mainPage.classList.add('avoid-clicks')

    }

    return(
        <div className="menu">
            <div className="category-active category">
                <p>Home</p>     
            </div>
            <div className="today category">
                <p>Today</p>
            </div>
            <div className="this-week category">
                <p>Week</p>
            </div>
            <div className="this-month category">
                <p>Month</p>
            </div>
            <div className='completed category'>
                <p>Completed</p>
                <div className='check-counter'>{completeCounter}</div>
            </div>
            <div className='uncomplete category'>
                <p>Uncomplete</p>
                <div className='check-counter'>{incompleteCounter}</div>
                </div>
            <i onClick={createToDo} className="fa-solid add-butt fa-calendar-plus fa-5x"></i>
        </div>
    )
}

export default Nav