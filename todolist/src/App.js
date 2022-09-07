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
  const [todayTodos, setTodayTodos] = useState([]);
  const [monthTodos, setMonthTodos] = useState([]);
  const [yearTodos, setYearTodos] = useState([]);
  const [todos, setTodos] = useState(
[{
  "id" : 1,
  "title": "Brush Teeth",
  "date": "2023-09-15",
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
  "date": "2022-09-07",
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
    let todoMonth;
    let todoYear;

    // Brings the full date in yyyy-mm-dd format
    let currentDate = new Date();
    let isoDate = currentDate.toISOString();
    let isoTodayArr = [];
    let currentDay;
    let currentYear;
    for(let i = 0; i < isoDate.length - 14; i++) {
      isoTodayArr.push(isoDate[i]);
      currentDay= isoTodayArr.join('').toString();
    }

    for(let i = 0; i < todos.length; i++) {

      //Today check
      if(todos[i].date === currentDay && !todayTodos.includes(todos[i])) {
        setTodayTodos(prevTodayTodos => [...prevTodayTodos, todos[i]]);
      }

      //Month check
      if(todos[i].date[5] === '0') {
        todoMonth = todos[i].date[6] - 1;
      }
      else {
        todoMonth = todos[i].date[5] + todos[i].date[6] - 1;
      }
      if(todoMonth === currentDate.getMonth() && !monthTodos.includes(todos[i])) {
        setMonthTodos(prevMonthsTodos => [...prevMonthsTodos, todos[i]]);
      }

      
      // Year check
      
      todoYear = `${todos[i].date[0]}${todos[i].date[1]}${todos[i].date[2]}${todos[i].date[3]}`;
      currentYear = `${currentDay[0]}${currentDay[1]}${currentDay[2]}${currentDay[3]}`;
      if(currentYear === todoYear && !yearTodos.includes(todos[i])) {
        setYearTodos(prevYearTodos => [...prevYearTodos, todos[i]]);
      }

    }
    
    // if (category === "checked") {
    //   filteredTodos = filteredTodos.filter(todoItem => todoItem.checked);
    // }

    // // Renders
  }

  function openHome () {
    
    checkCategory();

    let homeButton = document.getElementsByClassName('home-category')[0];
    let todayButton = document.getElementsByClassName('today-category')[0];
    let monthButton = document.getElementsByClassName('month-category')[0];
    let yearButton = document.getElementsByClassName('year-category')[0];

    let homeTodos = document.getElementsByClassName('home')[0];
    let todayTodos = document.getElementsByClassName('today')[0];
    let monthTodos = document.getElementsByClassName('month')[0];
    let yearTodos = document.getElementsByClassName('year')[0];

    homeButton.classList.add('category-active');
    todayButton.classList.remove('category-active');
    monthButton.classList.remove('category-active');
    yearButton.classList.remove('category-active');

    homeTodos.classList.add('display-show')
    todayTodos.classList.remove('display-show');
    monthTodos.classList.remove('display-show');
    yearTodos.classList.remove('display-show');

    todayTodos.classList.add('display-hide');
    monthTodos.classList.add('display-hide');
    yearTodos.classList.add('display-hide');

  }

  function openToday () {

    checkCategory();

    let homeButton = document.getElementsByClassName('home-category')[0];
    let todayButton = document.getElementsByClassName('today-category')[0];
    let monthButton = document.getElementsByClassName('month-category')[0];
    let yearButton = document.getElementsByClassName('year-category')[0];

    let homeTodos = document.getElementsByClassName('home')[0];
    let todayTodos = document.getElementsByClassName('today')[0];
    let monthTodos = document.getElementsByClassName('month')[0];
    let yearTodos = document.getElementsByClassName('year')[0];

    homeButton.classList.remove('category-active');
    todayButton.classList.add('category-active');
    monthButton.classList.remove('category-active');
    yearButton.classList.remove('category-active');

    homeTodos.classList.remove('display-show');
    todayTodos.classList.add('display-show');
    monthTodos.classList.remove('display-show');
    yearTodos.classList.remove('display-show');

    homeTodos.classList.add('display-hide');
    todayTodos.classList.remove('display-hide');
    monthTodos.classList.add('display-hide');
    yearTodos.classList.add('display-hide');
  }

  function openMonth () {

    checkCategory();

    let homeButton = document.getElementsByClassName('home-category')[0];
    let todayButton = document.getElementsByClassName('today-category')[0];
    let monthButton = document.getElementsByClassName('month-category')[0];
    let yearButton = document.getElementsByClassName('year-category')[0];

    let homeTodos = document.getElementsByClassName('home')[0];
    let todayTodos = document.getElementsByClassName('today')[0];
    let monthTodos = document.getElementsByClassName('month')[0];
    let yearTodos = document.getElementsByClassName('year')[0];

    homeButton.classList.remove('category-active');
    todayButton.classList.remove('category-active');
    monthButton.classList.add('category-active');
    yearButton.classList.remove('category-active');

    homeTodos.classList.remove('display-show');
    todayTodos.classList.remove('display-show');
    monthTodos.classList.add('display-show');
    yearTodos.classList.remove('display-show');

    homeTodos.classList.add('display-hide');
    todayTodos.classList.add('display-hide');
    monthTodos.classList.remove('display-hide');
    yearTodos.classList.add('display-hide');

    }

  function openYear () {

    checkCategory();

    let homeButton = document.getElementsByClassName('home-category')[0];
    let todayButton = document.getElementsByClassName('today-category')[0];
    let monthButton = document.getElementsByClassName('month-category')[0];
    let yearButton = document.getElementsByClassName('year-category')[0];
  
    let homeTodos = document.getElementsByClassName('home')[0];
    let todayTodos = document.getElementsByClassName('today')[0];
    let monthTodos = document.getElementsByClassName('month')[0];
    let yearTodos = document.getElementsByClassName('year')[0];
  
    homeButton.classList.remove('category-active');
    todayButton.classList.remove('category-active');
    monthButton.classList.remove('category-active');
    yearButton.classList.add('category-active');
  
    homeTodos.classList.remove('display-show');
    todayTodos.classList.remove('display-show');
    monthTodos.classList.remove('display-show');
    yearTodos.classList.add('display-show');
  
    homeTodos.classList.add('display-hide');
    todayTodos.classList.add('display-hide');
    monthTodos.classList.add('display-hide');
    yearTodos.classList.remove('display-hide');
  
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
          <Nav 
          completeCounter={completeCounter} 
          incompleteCounter={incompleteCounter}
          todos={todos}
          todayTodos={todayTodos}
          monthTodos={monthTodos}
          yearTodos={yearTodos}
          openHome={openHome}
          openToday={openToday}
          openMonth={openMonth}
          openYear={openYear}
          />
      </div>
      <div className='main-content'>
        <div className='home display-show'>
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
        <div className='today display-hide'>
          <Head />
          <div className='to-do-container'>
            {todayTodos.map((todo, index) =>
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
        <div className='month display-hide'>
          <Head />
          <div className='to-do-container'>
            {monthTodos.map((todo, index) =>
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
        <div className='year display-hide'>
          <Head />
          <div className='to-do-container'>
            {yearTodos.map((todo, index) =>
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
      </div>
    </div>
  );
}

export default App;
