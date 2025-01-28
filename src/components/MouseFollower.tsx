import { useState, useEffect } from "react"
import './MouseFollower.css'


export default function MouseFollower() {

  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  })

  const mouseMove = (e: any) => {
    setMousePos({
        x: e.clientX,
        y: e.clientY
    })
    
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove)

    return () => {
        window.removeEventListener("mousemove", mouseMove)
    }
  }, [])
  
  
  return (
    <div className="mouseCircle" style={{top: mousePos.y, left:mousePos.x }}></div>
  )
}
