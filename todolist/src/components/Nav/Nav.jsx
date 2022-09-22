// import { useMemo } from 'react';
import './Nav.css'

function Nav ({
    completeTodos,
    incompleteTodos,
    selectedFilter,
    setSelectedFilter
}) {

    let completeCounter = completeTodos.length;
    let incompleteCounter = incompleteTodos.length;

    function hideMobileNav() {
        let mobileNav = document.getElementsByClassName('menu-add')[0];
        mobileNav.classList.remove('show')
    }

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
            <div onClick={() => {setSelectedFilter('home'); hideMobileNav()}} className={`category ${selectedFilter === 'home' ? 'category-active' : ''}`}>
                <p>Home</p>     
            </div>
            <div onClick={() => {setSelectedFilter('today'); hideMobileNav()}} className={`category ${selectedFilter === 'today' ? 'category-active' : ''}`}>
                <p>Today</p>
            </div>
            <div onClick={() => {setSelectedFilter('month'); hideMobileNav()}} className={`category ${selectedFilter === 'month' ? 'category-active' : ''}`}>
                <p>Month</p>
            </div>
            <div onClick={() => {setSelectedFilter('year'); hideMobileNav()}} className={`category ${selectedFilter === 'year' ? 'category-active' : ''}`}>
                <p>Year</p>
            </div>
            <div onClick={() => {setSelectedFilter('complete'); hideMobileNav()}} className={`category ${selectedFilter === 'complete' ? 'category-active' : ''}`}>
                <p>Completed</p>
                <div className='check-counter'>{completeCounter}</div>
            </div>
            <div onClick={() => {setSelectedFilter('incomplete'); hideMobileNav()}} className={`category ${selectedFilter === 'incomplete' ? 'category-active' : ''}`}>
                <p>Incomplete</p>
                <div className='check-counter'>{incompleteCounter}</div>
                </div>
            <i onClick={createToDo} className="fa-solid add-butt fa-calendar-plus fa-5x"></i>
        </div>
    )
}

export default Nav