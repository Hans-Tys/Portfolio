import { NavLink, useLocation } from "react-router-dom";
import './NavBar.css'
import { useState } from "react";
import { useEffect } from "react";

export default function NavBar() {
  const location = useLocation();
  const { pathname } = location;

  const Destinations = [
    {
      title: 'home',
      destination: "/"
    },

  ]

  const [burgerOpen, setBurgerOpen] = useState(false)

  const [, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    const HandelResize = () => {
      setInnerWidth(window.innerWidth);
      if (window.innerWidth > 800) {
        setBurgerOpen(false)
      }
    }
    window.addEventListener("resize", HandelResize)

  }, [])

  console.log(location);

  return (
    <div>
      <div className="Hamburger" onClick={() => { setBurgerOpen(!burgerOpen) }}>
        <span className="lineB"></span>
        <span className="lineB"></span>
        <span className="lineB"></span>
      </div>

      <div className="container-Navbar">
        <span className="NavBar-logo">Hans Tys</span>
        <div className="lineNavBar"></div>
        <div className="NavBar">
          {
            burgerOpen || window.innerWidth > 800 ?
              <>
                {Destinations.map((Destination) => {
                  return (
                    <span><NavLink className="destination" to={Destination.destination} onClick={() => setBurgerOpen(false)}> {Destination.title}  </NavLink></span>
                  )
                }
                )
                }
                {
                  pathname === '/' ? <a href="#projects">Projects</a> : <a href="/">back</a>
                }
                </> : <></>
          }
        </div>
      </div>
    </div>
  )
}

