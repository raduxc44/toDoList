import './App.css';
import Nav from './Nav';
import Menu from './Menu';
import Add from './Add';
import ToDoContainer from './ToDoContainer';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='main-content'>
        <div className='menu-add'>
          <Menu />
          <Add />
        </div>
        <ToDoContainer />
      </div>
    </div>
  );
}

export default App;
