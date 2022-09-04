import './App.css';
import Head from './components/Head/Head';
import Nav from './components/Nav/Nav';
import Add from './components/Add/Add';
import ToDo from './components/ToDo/ToDo';
import Details from './components/Details/Details';
import CreateOverlay from './components/CreateOverlay/CreateOverlay'
import Edit from './components/Edit/Edit';
import { useState, useEffect } from 'react';

function App() {

  const [inputTitle, setInputTitle] = useState('');
  const [inputDetails, setInputDetails] = useState('');
  const [inputEditTitle, setInputEditTitle] = useState();
  const [inputEditDetails, setInputEditDetails] = useState();
  const [currentKey, setCurrentKey] = useState(0);
  const [date, setDate] = useState('No due date');
  const [selectedToDoDetails, setSelectedToDoDetails] = useState()
  const [selectedToDoForEdit, setselectedToDoForEdit] = useState()
  const [modifiedToDo, setModifiedToDo] = useState()
  const [todos, setTodos] = useState(
[{
  "key" : 1,
  "title": "Brush Teeth",
  "date": "15-10-2022",
  "priority": "mid",
  "details": "details1",
  "checked": false,
},
{
  "key" : 2,
  "title": "Wash the dog",
  "date": "01-12-2022",
  "priority": "low",
  "details": "details2",
  "checked": true,
},
{
  "key" : 3,
  "title": "Mow the lawn",
  "date": "05-06-2022",
  "priority": "high",
  "details": "details3",
  "checked": false,
}]);

  // Saves the selected todo by it's details button in the selectedToDo state
  function showDetails (index) {
    setSelectedToDoDetails(todos[index])
  };
  
  // if a toDo has been selected, each time it gets refreshed, the details Overlay gets rendered with the correct props
  // also, the main page content gets disabled and blurred
  useEffect (() => {
    if(selectedToDoDetails) {
    let detailsOverlay = document.getElementsByClassName('details-overlay')[0];
    detailsOverlay.classList.remove('invisible')
    let mainPage = document.getElementById('main-page');
    mainPage.classList.add('blur');
    mainPage.classList.add('avoid-clicks')
   }
  }, [selectedToDoDetails]);

  // the function return the the todos left after the deletion
    function deleteToDo (index) {
      setTodos(todos.filter((todo, todoIndex) => todoIndex !== index))
    }
  // function checkButton(todoIndex) {
  //   setTodos(
  //     todos.reduce((a, $, i) => {
  //       const checkedToDo = todos[i];
  //       if (i === todoIndex) checkedToDo.checked = !checkedToDo.checked;
  //       a.push(checkedToDo)
  //       return a;
  //     }, [])
  //   );
  // }
  // console.log(todos.filter((todo) => todo.checked).length);

    // Picks a todo for editing and shows the edit overlay with it's data

    function showEdit(index) {
      setselectedToDoForEdit(todos[index])
    }

    useEffect (() => {
      if(selectedToDoForEdit) {
      let editOverlay = document.getElementsByClassName('edit-overlay')[0];
      editOverlay.classList.add('visible')
      let mainPage = document.getElementById('main-page');
      mainPage.classList.add('blur');
      mainPage.classList.add('avoid-clicks')
      }
    }, [selectedToDoForEdit])

  return (
    <div className="App">
      <CreateOverlay 
      inputTitle={inputTitle} 
      setInputTitle={setInputTitle}
      inputDetails={inputDetails}
      setInputDetails={setInputDetails}
      currentKey={currentKey}
      setCurrentKey={setCurrentKey}
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
                                setselectedToDoForEdit={setselectedToDoForEdit}/>)}
      <div id='main-page'>
      <Head />
      <div className='main-content'>
        <div className='menu-add'>
          <Nav />
          <Add />
        </div>
        <div className="to-do-container">
          {todos.map((todo, index) => 
          (<ToDo 
            {...todo}
            key={index}
            showEdit= {() => showEdit(index)}
            showDetails={() => showDetails(index)}
            deleteToDo= {() => deleteToDo(index)}
            // checkButton={() => checkButton(i)}
          />))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
