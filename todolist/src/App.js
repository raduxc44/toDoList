import './App.css';
import Head from './components/Head/Head';
import Nav from './components/Nav/Nav';
import ToDo from './components/ToDo/ToDo';
import Details from './components/Details/Details';
import CreateForm from './components/CreateForm/CreateForm';
import Edit from './components/Edit/Edit';
import { useState, useEffect } from 'react';

function App() {

  const [inputTitle, setInputTitle] = useState('');
  const [inputDetails, setInputDetails] = useState('');
  const [inputEditTitle, setInputEditTitle] = useState();
  const [inputEditDetails, setInputEditDetails] = useState();
  const [currentId, setCurrentId] = useState(4);
  const [date, setDate] = useState();
  const [selectedToDoDetails, setSelectedToDoDetails] = useState();
  const [selectedToDoForEdit, setSelectedToDoForEdit] = useState();
  const [modifiedToDo, setModifiedToDo] = useState();
  const [completeCounter, setCompleteCounter] = useState(0);
  const [incompleteCounter, setIncompleteCounter] = useState(3);
  const [thisMonthCounter, setThisMonthCounter] = useState(1)
  const [todos, setTodos] = useState(
[{
  "id" : 1,
  "title": "Brush Teeth",
  "date": "2022-09-15",
  "priority": "mid",
  "details": "details1",
  "checked": false,
},
{
  "id" : 2,
  "title": "Wash the dog",
  "date": "2022-12-01",
  "priority": "low",
  "details": "details2",
  "checked": false,
},
{
  "id" : 3,
  "title": "Mow the lawn",
  "date": "2022-06-05",
  "priority": "high",
  "details": "details3",
  "checked": false,
}]);

  // Saves the selected todo by it's details button in the selectedToDo state
  function showDetails (index) {
    setSelectedToDoDetails(todos[index]);
  };


  function showEdit(index) {
    const item = todos[index];

    setSelectedToDoForEdit(item);
    setInputEditDetails(item.details);
    setInputEditTitle(item.title);
  }
  // if a toDo has been selected, each time it gets refreshed, the details Overlay gets rendered with the correct props
  // also, the main page content gets disabled and blurred
  useEffect (() => {
    if(selectedToDoDetails) {
    let detailsOverlay = document.getElementsByClassName('details-overlay')[0];
    detailsOverlay.classList.remove('invisible');
    let mainPage = document.getElementById('main-page');
    mainPage.classList.add('blur');
    mainPage.classList.add('avoid-clicks');
   }
  }, [selectedToDoDetails]);

  // the function return the the todos left after the deletion
    function deleteToDo (index) {
      setTodos(todos.filter((todo, todoIndex) => todoIndex !== index));
      let selected = todos.filter((todo, todoIndex) => todoIndex === index);
      for(let i = 0; i < selected.length; i++) {
        if(selected[i].checked) setCompleteCounter(prevCompletedCounter => prevCompletedCounter - 1)
        else                    setIncompleteCounter(prevCompletedCounter => prevCompletedCounter - 1)
      }
    }

  // The function gets the selected to do and adds a checked property to it, returning an updated array

    function checkButton(todoIndex) {
      
      let updatedTodos = [];
      for(let i = 0; i < todos.length; i++) {
        let checkedTodo = todos[i];
        if(i === todoIndex) {
          checkedTodo.checked = !checkedTodo.checked;
          if(checkedTodo.checked) {
            setCompleteCounter(prevCompletedCounter => prevCompletedCounter + 1)
            setIncompleteCounter(prevUncheckedCounter => prevUncheckedCounter - 1)
          }
          else {
            setCompleteCounter(prevCompletedCounter => prevCompletedCounter - 1)
            setIncompleteCounter(prevUncheckedCounter => prevUncheckedCounter + 1)
          }
        }
        updatedTodos.push(checkedTodo);
      }
      setTodos(updatedTodos);
    }


    function checkCategory() {
    // Category filters
    let todayTodos = [];
    let weekTodos = [];
    let monthTodos = []

    let todoDate;
    let todoMonth;

    let currentDate = new Date();

    for(let i = 0; i < todos.length; i++) {

      // //Today check

      // if(todos[i].date[8] === '0') {
      //   todoDate = todos[i].date[9];
      // }
      // else {
      //   todoDate = todos[i].date[8] + todos[i].date[9] 
      // }

      // console.log(todoDate)


      //Month check
      if(todos[i].date[5] === '0') {
        todoMonth = todos[i].date[6] - 1;
      }
      else {
        todoMonth = todos[i].date[5] + todos[i].date[6] - 1;
      }
      if(todoMonth === currentDate.getMonth()) {
        monthTodos.push(todos[i])
      }
    }
    console.log(monthTodos)
    // if (category === "checked") {
    //   filteredTodos = filteredTodos.filter(todoItem => todoItem.checked);
    // }

    // // Renders
    // return filteredTodos.map((todo, index) => 
    //       (<ToDo 
    //         {...todo}
    //         id={index}
    //         checkButton= {() => checkButton(index)}
    //         showEdit= {() => showEdit(index)}
    //         showDetails={() => showDetails(index)}
    //         deleteToDo= {() => deleteToDo(index)}
    //       />))
  }


    // Picks a todo for editing and shows the edit overlay with it's data


    useEffect (() => {
      if(selectedToDoForEdit) {
      let editOverlay = document.getElementsByClassName('edit-overlay')[0];
      editOverlay.classList.add('visible');
      let mainPage = document.getElementById('main-page');
      mainPage.classList.add('blur');
      mainPage.classList.add('avoid-clicks');
      }
    }, [selectedToDoForEdit])

  return (
    <div className="App">
      <CreateForm 
      inputTitle={inputTitle}
      setInputTitle={setInputTitle}
      inputDetails={inputDetails}
      setInputDetails={setInputDetails}
      currentId={currentId}
      setCurrentId={setCurrentId}
      date={date}
      setDate={setDate}
      todos={todos}
      setTodos={setTodos}
      incompleteCounter={incompleteCounter}
      setIncompleteCounter={setIncompleteCounter}
      />
      {selectedToDoDetails && (<Details  {...selectedToDoDetails} setSelectedToDoDetails={setSelectedToDoDetails}/>)}
      {selectedToDoForEdit && (<Edit {...selectedToDoForEdit}
                                selectedToDoForEdit={selectedToDoForEdit}
                                modifiedToDo={modifiedToDo}
                                setModifiedToDo={setModifiedToDo}
                                todos={todos} setTodos={setTodos}
                                inputEditTitle={inputEditTitle}
                                setInputEditTitle={setInputEditTitle}
                                inputEditDetails={inputEditDetails}
                                setInputEditDetails={setInputEditDetails}
                                setDate={setDate}
                                setSelectedToDoForEdit={setSelectedToDoForEdit}/>)}
      <div id='main-page'>
      <div className='menu-add'>
          <Nav thisMonthCounter={thisMonthCounter} completeCounter={completeCounter} incompleteCounter={incompleteCounter}/>
      </div>
      <div className='main-content'>
        <Head />
        <div className="to-do-container">
          {todos.map((todo, index) =>
          (<ToDo
            {...todo}
            id={index}
            showEdit= {() => showEdit(index)}
            showDetails={() => showDetails(index)}
            deleteToDo= {() => deleteToDo(index)}
            checkButton={() => checkButton(index)}
          />))}
        </div>
      </div>
      </div>
            <div><button onClick={checkCategory}>Check Category</button></div>
    </div>
  );
}

export default App;
