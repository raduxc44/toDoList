import './App.css';
import defaultValues from './defaultValues';
import Head from './components/Head/Head';
import Nav from './components/Nav/Nav';
import ToDo from './components/ToDo/ToDo';
import Details from './components/Details/Details';
import CreateForm from './components/CreateForm/CreateForm';
import Edit from './components/Edit/Edit';
import { useState, useEffect, useMemo } from 'react';

function App() {

  const localTodos = localStorage.getItem('todos');
  const localId = localStorage.getItem('id');

  const [todos, setTodos] = useState(localTodos ? JSON.parse(localTodos) : defaultValues.defaultArr);
  const [currentId, setCurrentId] = useState(localId ? JSON.parse(localId) : defaultValues.defaultId);
  const [selectedFilter, setSelectedFilter] = useState('home');
  const [inputEditTitle, setInputEditTitle] = useState('');
  const [inputEditDetails, setInputEditDetails] = useState('');
  const [date, setDate] = useState();
  const [selectedToDoDetails, setSelectedToDoDetails] = useState();
  const [selectedToDoForEdit, setSelectedToDoForEdit] = useState();
  const [modifiedToDo, setModifiedToDo] = useState();


  const currentDate = useMemo(() => new Date(), [])
  let isoDate = currentDate.toISOString();
  let isoTodayArr = [];
  let currentDay;

  //  Formats the date object in the ideal form
  for(let i = 0; i < isoDate.length - 14; i++) {
    isoTodayArr.push(isoDate[i]);
    currentDay= isoTodayArr.join('').toString();
  }

  // Array declarations
  let todayTodos = useMemo(() => todos.filter(todo => todo.date === currentDay), [todos, currentDay])
  let yearTodos = useMemo(() => todos.filter(todo => 
    `${todo.date[0]}${todo.date[1]}${todo.date[2]}${todo.date[3]}` === 
    `${currentDay[0]}${currentDay[1]}${currentDay[2]}${currentDay[3]}`
    ), [todos, currentDay])
  let monthTodos = useMemo(() => yearTodos.filter(todo => 
    `${todo.date[5]}${todo.date[6]}` === (currentDate.getMonth() + 1).toString().padStart(2, '0')), [yearTodos, currentDate])
  let completeTodos = useMemo(() => todos.filter(todo => todo.checked), [todos])
  let incompleteTodos = useMemo(() => todos.filter(todo => !todo.checked), [todos])
  
  // Saves the selected todo by it's details/edit button in the corresponding state
  function showDetails (arr, index) {
    setSelectedToDoDetails(arr[index]);
  };
  function showEdit(arr, index) {
    const item = arr[index];
    setSelectedToDoForEdit(item);
    setInputEditDetails(item.details);
    setInputEditTitle(item.title);
  }

  // Saves these variables in local storage each time a change occurs to them
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);
  useEffect(() => {
    localStorage.setItem('id', JSON.stringify(currentId))
  })
  // if a todo has been selected, each time it gets refreshed, the details/edit menu gets rendered with the correct props
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
  useEffect (() => {
    if(selectedToDoForEdit) {
    let editForm = document.getElementsByClassName('edit-form')[0];
    editForm.classList.add('visible');
    let mainPage = document.getElementById('main-page');
    mainPage.classList.add('blur');
    mainPage.classList.add('avoid-clicks');
    }
  }, [selectedToDoForEdit])

  // The function gets the selected todo and deletes it from the main array
  function deleteToDo (arr, todoIndex) {
    for(let i = 0; i < arr.length; i++) {
      if(i === todoIndex) {
        let selectedTodo = arr[i];
        setTodos(todos.filter(todo => todo !== selectedTodo))
      }
    }
  }

  // The function gets the selected todo and adds a checked property to it, updating the main array with the modified todo
  function checkTodo(arr, todoIndex) {
    for(let i = 0; i < arr.length; i++) {
      if(i === todoIndex) {
        let selectedTodo = arr[i]
        selectedTodo.checked = !selectedTodo.checked;
        setTodos([...todos], todos.splice(todos.indexOf(selectedTodo), 1, selectedTodo))
      } 
    }
  }

  // Saves the selected array and filter for later use in rendering
  const shownTodos = useMemo(() => {
    if     (selectedFilter === 'home')       return todos;
    else if(selectedFilter === 'today')      return todayTodos;
    else if(selectedFilter === 'month')      return monthTodos;
    else if(selectedFilter === 'year')       return yearTodos;
    else if(selectedFilter === 'complete')   return completeTodos;
    else if(selectedFilter === 'incomplete') return incompleteTodos;
  }, [selectedFilter, todos, todayTodos, monthTodos, yearTodos, completeTodos, incompleteTodos])

  return (
    <div className="App">
      <CreateForm
      currentId={currentId}
      setCurrentId={setCurrentId}
      date={date}
      setDate={setDate}
      todos={todos}
      setTodos={setTodos}
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
                                setSelectedToDoForEdit={setSelectedToDoForEdit}
                                />)}
      <div id='main-page'>
      <div id='nav-with-add' className='menu-add'>
          <Nav 
          completeTodos={completeTodos}
          incompleteTodos={incompleteTodos}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          />
      </div>
      <div className='main-content'>
        <div className={`${selectedFilter} display-show`}>
          <Head />
          <div className="to-do-container">
            {shownTodos.map((todo, index) =>
            (<ToDo
              {...todo}
              key={todo.id}
              showEdit= {() => showEdit(shownTodos, index)}
              showDetails={() => showDetails(shownTodos, index)}
              deleteToDo= {() => deleteToDo(shownTodos, index)}
              checkTodo={() => checkTodo(shownTodos, index)}
            />))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
