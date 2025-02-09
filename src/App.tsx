
import './App.css'
import StatusScreen from './components/StatusScreen.tsx'
import NavBar from './components/NavBar.tsx';
import TodoList from './components/TodoList.tsx'
import Footer from "./components/Footer.tsx";
import ArtGallery from './components/ArtGallery.tsx';
import WeatherApp from './components/WeatherApp.tsx';
import Animations from './components/Animations.tsx';
import HomeNewStyle from './components/HomeNewStyle.tsx';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ChatApp from './components/ChatApp.tsx';



const routes = [
  {
    path: "/",
    element: <HomeNewStyle/>
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
  },
  {
    path: "/ChatApp",
    element: <ChatApp/>
  },
  {
    path: "/animations",
    element: <Animations/>
  }
  
 

  

]


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        {
          routes.map((route, i) => {return(<Route key={i} path={route.path} element={route.element}/>)})
        }
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
