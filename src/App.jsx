import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Weather from './pages/Weather'
import ToDoList from './pages/ToDoList'
import VantaBackground from './pages/VantaBackground'
import RandomPassword from './pages/RandomPassword'
import Notes from './pages/Notes'

function App() {
  const [page,setPage]=useState('Home');

  return (
    
    <VantaBackground>
      {page==='Home' && <Home setPage={setPage} />}
      {page==='Weather' && <Weather setPage={setPage} />}
      {page=='ToDoList' && <ToDoList setPage={setPage} /> }
      {page=='RandomPassword' && <RandomPassword setPage={setPage} /> }
      {page=='NotesTaker' && <Notes setPage={setPage} /> }

      
    </VantaBackground>

    
  )
};

export default App;
