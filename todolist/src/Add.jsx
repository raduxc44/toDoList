import './Add.css'

function Add() {

    function createToDo() {
        
        console.log('a')


    }

    return(
        <div className="add-butt" onClick={createToDo}>
            <i class="fa-solid fa-calendar-plus fa-5x"></i>
        </div>
    )
}

export default Add