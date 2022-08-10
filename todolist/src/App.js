import './App.css';
import Head from './Head';
import Nav from './Nav';
import Add from './Add';
import ToDoContainer from './ToDoContainer';
import CreateOverlay from './CreateOverlay'

function App() {
  return (
    <div className="App">
      <Head />
      < CreateOverlay />
      <div className='main-content'>
        <div className='menu-add'>
          <Nav />
          <Add />
        </div>
        <ToDoContainer />
      </div>
    </div>
  );
}

export default App;
