import './App.css';
import Head from './Head';
import Nav from './Nav';
import Add from './Add';
import ToDo from './ToDo';
import CreateOverlay from './CreateOverlay'
import { useState } from 'react';

function App() {

  const [inputTitle, setInputTitle] = useState('');
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      < CreateOverlay inputTitle={inputTitle} setInputTitle={setInputTitle} todos={todos} setTodos={setTodos}/>
      <div id='main-page'>
      <Head />
      <div className='main-content'>
        <div className='menu-add'>
          <Nav />
          <Add />
        </div>
        <div className="to-do-container">
          {todos.map((todo) => 
          (<ToDo 
            title={todo.title}  
            details={todo.details}
          />))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
