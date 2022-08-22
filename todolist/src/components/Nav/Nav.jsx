import './Nav.css'

function Nav () {
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
        </div>
    )
}

export default Nav