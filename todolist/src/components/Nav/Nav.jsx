import './Nav.css'

function Nav ({
    openHome, 
    openToday, 
    openMonth, 
    openYear,
    openComplete,
    openIncomplete,
    completeCounter, 
    incompleteCounter,
    selectedFilter,
    setSelectedFilter
}) {

    function createToDo() {
        
        let createForm = document.getElementsByClassName('create-form')[0];
        createForm.classList.add('visible')
        let mainPage = document.getElementById('main-page');
        mainPage.classList.add('blur');
        mainPage.classList.add('avoid-clicks')
        let mobileNav = document.getElementsByClassName('menu-add')[0];
        if(mobileNav.classList.contains('show'))     mobileNav.classList.remove('show')

    }

    return(
        <div className="menu">
            <div onClick={() => setSelectedFilter('home')} className={`home-category category ${selectedFilter === 'home' ? 'category-active' : ''}`}>
                <p>Home</p>     
            </div>
            <div onClick={() => setSelectedFilter('today')} className={`home-category category ${selectedFilter === 'today' ? 'category-active' : ''}`}>
                <p>Today</p>
            </div>
            <div onClick={() => setSelectedFilter('month')} className={`home-category category ${selectedFilter === 'month' ? 'category-active' : ''}`}>
                <p>Month</p>
            </div>
            <div onClick={() => setSelectedFilter('year')} className={`home-category category ${selectedFilter === 'year' ? 'category-active' : ''}`}>
                <p>Year</p>
            </div>
            <div onClick={() => setSelectedFilter('complete')} className={`home-category category ${selectedFilter === 'complete' ? 'category-active' : ''}`}>
                <p>Completed</p>
                <div className='check-counter'>{completeCounter}</div>
            </div>
            <div onClick={() => setSelectedFilter('incomplete')} className={`home-category category ${selectedFilter === 'incomplete' ? 'category-active' : ''}`}>
                <p>Incomplete</p>
                <div className='check-counter'>{incompleteCounter}</div>
                </div>
            <i onClick={createToDo} className="fa-solid add-butt fa-calendar-plus fa-5x"></i>
        </div>
    )
}

export default Nav