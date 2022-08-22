import './App.css';
import Head from './Head';
import Nav from './Nav';
import Add from './Add';
import ToDo from './ToDo';
import Details from './Details';
import CreateOverlay from './CreateOverlay'
import { useState } from 'react';

function App() {

  const [inputTitle, setInputTitle] = useState('');
  const [inputDetails, setInputDetails] = useState('')
  const [date, setDate] = useState('No due date');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      < CreateOverlay 
      inputTitle={inputTitle} 
      setInputTitle={setInputTitle}
      inputDetails={inputDetails}
      setInputDetails={setInputDetails}
      date={date} 
      setDate={setDate} 
      todos={todos} 
      setTodos={setTodos}
      />
      {todos.map((todo) =>
       (<Details 
          title={todo.title}
          date={todo.date}
          key= {todo.key}
          priority={todo.priority}
          details={todo.details} 
          />))}
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
            date={todo.date}
            key= {todo.key}
            priority={todo.priority}
            details={todo.details}
          />))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
