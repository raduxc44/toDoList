import './Nav.css'

function Nav () {

    function createToDo() {
        
        let createForm = document.getElementsByClassName('create-form')[0];
        createForm.classList.add('visible')
        let mainPage = document.getElementById('main-page');
        mainPage.classList.add('blur');
        mainPage.classList.add('avoid-clicks')

    }


    return(
        <div className="menu">
            <div className="home">Home</div>
            <div className="today">Today</div>
            <div className="this-week">Week</div>
            <div className="this-month">Month</div>
            <div className="interests">Interests</div>
                <div className="interest">Web Dev</div>
                <div className="interest">Painting</div>
                <div className="interest">Meditating</div>
            <div className="Notes">Notes</div>
            <i onClick={createToDo} className="fa-solid add-butt fa-calendar-plus fa-5x"></i>
        </div>
    )
}

export default Nav