import './App.css';
import Head from './components/Head/Head';
import Nav from './components/Nav/Nav';
import Add from './components/Add/Add';
import ToDo from './components/ToDo/ToDo';
import Details from './components/Details/Details';
import CreateOverlay from './components/CreateOverlay/CreateOverlay'
import { useState, useEffect } from 'react';

function App() {

  const [inputTitle, setInputTitle] = useState('');
  const [inputDetails, setInputDetails] = useState('')
  const [currentKey, setCurrentKey] = useState(0)
  const [date, setDate] = useState('No due date');
  const [selectedToDo, setSelectedToDo] = useState()
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
  // function deleteTodo(todoIndex) {
  //   setTodos(todos.filter((v, i) => i !== todoIndex));
  // }
  const showDetails = (index) =>  {setSelectedToDo(todos[index])};
  
  useEffect (() => {
    if(selectedToDo) {
    let detailsOverlay = document.getElementsByClassName('details-overlay')[0];
    detailsOverlay.classList.remove('invisible')
    let mainPage = document.getElementById('main-page');
    mainPage.classList.add('blur');
    mainPage.classList.add('avoid-clicks')
   }
  }, [selectedToDo]);
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
      {selectedToDo && (<Details  {...selectedToDo}/>)}
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
            showDetails={() => showDetails(index)}
            // deleteTodo={() => deleteTodo(i)}
            // checkButton={() => checkButton(i)}
          />))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
