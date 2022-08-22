import './App.css';
import Head from './components/Head/Head';
import Nav from './components/Nav/Nav';
import Add from './components/Add/Add';
import ToDo from './components/ToDo/ToDo';
import Details from './components/Details/Details';
import CreateOverlay from './components/CreateOverlay/CreateOverlay'
import { useState } from 'react';

function App() {

  const [inputTitle, setInputTitle] = useState('');
  const [inputDetails, setInputDetails] = useState('')
  const [currentKey, setCurrentKey] = useState(0)
  const [date, setDate] = useState('No due date');
  const [createOverlay, setCreateOverlay] = useState(false)
  const [todos, setTodos] = useState([
{
    "title": "title1",
    "date": "No due date",
    "priority": "mid",
    "details": "details1",
    "checked": false,
},
{
  "title": "title2",
  "date": "No due date",
  "priority": "mid",
  "details": "details1",
  "checked": false,
},
{
  "title": "title3",
  "date": "No due date",
  "priority": "mid",
  "details": "details1",
  "checked": false,
}]);
  // function deleteTodo(todoIndex) {
  //   setTodos(todos.filter((v, i) => i !== todoIndex));
  // }
  function checkButton(todoIndex) {
    setTodos(
      todos.reduce((a, $, i) => {
        const checkedT = todos[i];
        if (i === todoIndex) checkedT.checked = !checkedT.checked;
        a.push(checkedT)
        return a;
      }, [])
    );
  }
  console.log(todos.filter((todo) => todo.checked).length);
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
      {todos.map((todo) =>
       (<Details 
          {...todo}
          />))}
      <div id='main-page'>
      <Head />
      <div className='main-content'>
        <div className='menu-add'>
          <Nav />
          <Add />
        </div>
        <div className="to-do-container">
          {todos.map((todo, i) => 
          (<ToDo 
            {...todo}
            // deleteTodo={() => deleteTodo(i)}
            checkButton={() => checkButton(i)}
          />))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
