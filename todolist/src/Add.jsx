import './Add.css'
import CreateOverlay from './CreateOverlay'

function Add() {

    function createToDo() {
        
        let createOverlay = document.getElementsByClassName('create-overlay')[0];
        createOverlay.classList.add('visible')
        let head = document.getElementsByClassName('head')[0];
        head.classList.add('blur')
        let navMenu = document.getElementsByClassName('menu')[0];
        navMenu.classList.add('blur')
        let addContainer = document.getElementsByClassName('add-butt')[0];
        addContainer.classList.add('blur')
        let toDoContainer = document.getElementsByClassName('to-do-container')[0];
        toDoContainer.classList.add('blur')

    }

    return(
        <div className="add-butt" onClick={createToDo}>
            <i class="fa-solid fa-calendar-plus fa-5x"></i>
        </div>
    )
}

export default Add