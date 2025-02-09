import {  NavLink }  from "react-router-dom";
import './Projects.css'

export default function Projects() {
    const Projects = [
        {
            link: "/System",
            title: "System",
            desc: "A character Screen From the Anime solo Leveling",
            bg: "https://motionbgs.com/media/2770/shadows-army-solo-leveling.jpg"  
        },
        {
            link: "/ToDo list",
            title: "To Do List",
            desc: "A simple to do list",
            bg: "https://images.pexels.com/photos/3832031/pexels-photo-3832031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            link: "/WeatherApp",
            title: "WeatherApp",
            desc: "A simple WeatherApp to show working with an API",
            bg: "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        
    
    ];
    

  return (
    <div id="projects" className="ProjectsContainer">

    
        {
            Projects.map((project, i) =>{
                 return(
                    <NavLink key={i} style={{textDecoration:"none"}} to={project.link}>
                        <div className='ProjectCard' style={{backgroundImage: `url(${project.bg})`}} >
                            <div className='ProjectText'>
                                <h5>{project.title}</h5>
                                <p>{project.desc}</p>
                            </div>
                        </div>
                    </NavLink>  
                 )
            })
        }

    </div>
  )
}
