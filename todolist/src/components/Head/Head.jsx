import './Head.css'

function Head() {

    function showMobileNav () {
        let mobileNav = document.getElementsByClassName('menu-add')[0];
        if(mobileNav.classList.contains('show'))     mobileNav.classList.remove('show')
        else if(!mobileNav.classList.contains('show')) mobileNav.classList.add('show')
    }

    return(
        <div className='head-content'>
            <header>
                <div className='menu-div'>
                    <i onClick={showMobileNav} className="fa-solid fa-bars mobile-nav-button"></i>
                </div>
                <div className='title'>
                    <i className="fa-solid fa-check"></i>
                    <p>TO-DO</p>
                    <i className="fa-solid fa-check"></i>
                </div>
            </header>
        </div>
    )
}

export default Head