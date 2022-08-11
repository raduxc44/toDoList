import './Add.css'

function Add() {

    function createToDo() {
        
        let createOverlay = document.getElementsByClassName('create-overlay')[0];
        createOverlay.classList.add('visible')
        let mainPage = document.getElementById('main-page');
        mainPage.classList.add('blur');

    }

    return(
        <div className="add-butt" onClick={createToDo}>
            <i class="fa-solid fa-calendar-plus fa-5x"></i>
        </div>
    )
}

export default Add