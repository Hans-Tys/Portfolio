
import './App.css'
import StatusScreen from './components/StatusScreen.tsx'
import Home from './components/Home.tsx';
import NavBar from './components/NavBar.tsx';
import TodoList from './components/TodoList.tsx'
import Footer from "./components/Footer.tsx";
import ArtGallery from './components/ArtGallery.tsx';
import WeatherApp from './components/WeatherApp.tsx';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const routes = [
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/system",
    element: <StatusScreen/>
  },
  {
    path: "/Todo list",
    element: <TodoList/>
  },
  {
    path: "/ArtGallery",
    element: <ArtGallery/>
  },
  {
    path: "/WeatherApp",
    element: <WeatherApp/>
  }

]


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        {
          routes.map((route) => {return(<Route path={route.path} element={route.element}/>)})
        }
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
