
import './App.css'
import StatusScreen from './components/StatusScreen.tsx'
import Home from './components/Home.tsx';
import NavBar from './components/NavBar.tsx';
import TodoList from './components/TodoList.tsx'
import ContactPage from './components/ContactPage.tsx';
import Footer from "./components/Footer.tsx";
import ArtGallery from './components/ArtGallery.tsx';


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
        <Route path='/ArtGallery' element={<ArtGallery/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
