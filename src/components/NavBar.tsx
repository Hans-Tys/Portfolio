import { NavLink as Link, NavLink }  from "react-router-dom";
import './NavBar.css'
import { useState } from "react";
import { useEffect } from "react";

export default function NavBar() {
  const Destinations = [
    {
      title: 'home',
      destination: "/"
    },
    {
      title: 'System',
      destination: "/System"
    },
    {
      title: 'To do List',
      destination: "/ToDo list"
    },
 
    

  ]

  const [burgerOpen ,setBurgerOpen] =  useState(false)

  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    const HandelResize = () => {
      setInnerWidth(window.innerWidth);
      if(window.innerWidth > 800){
        setBurgerOpen(false)
      }
    }
    window.addEventListener("resize", HandelResize)

  }, [])

  return (
    <div>
       <div className="Hamburger" onClick={() =>{setBurgerOpen(!burgerOpen)}}>
          <span className="lineB"></span>
          <span className="lineB"></span>
          <span className="lineB"></span>
        </div>

        <div className="container-Navbar">
          <span  className="NavBar-logo">Hans Tys</span>
          <div className="lineNavBar"></div>
          <div className="NavBar">
          {
            burgerOpen || window.innerWidth > 800 ? 
            
              Destinations.map((Destination) =>{
                return(
                  <span><NavLink className="destination" to={Destination.destination} onClick={() => setBurgerOpen(false)}> {Destination.title}  </NavLink></span>
                )
              }) 
             : <></>
          }   
          </div>
        </div>
    </div>
  )
}

