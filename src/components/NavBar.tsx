import { NavLink as Link, NavLink }  from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
  return (
    <div>
        <ul className="NavBar">     
            <li><NavLink className="destination" to="/"> Home </NavLink></li>
            <li><NavLink className="destination" to="/system"> system </NavLink></li>
            <li><NavLink className="destination" to="/Todo List"> To Do List </NavLink></li>
            <li></li>
            
        </ul>
    </div>
  )
}

