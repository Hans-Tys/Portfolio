
import './App.css'
import StatusScreen from './components/StatusScreen.tsx'
import Home from './components/Home.tsx';
import NavBar from './components/NavBar.tsx';
import TodoList from './components/TodoList.tsx';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/system" element={<StatusScreen/>}/>
        <Route path='/Todo list' element={<TodoList/>}/>
        


      </Routes>
    </Router>
    
  )
}

export default App
