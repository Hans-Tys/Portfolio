import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css"
import  { faEnvelope, faSignature, faMobile, faGit } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="Footer"> 
        <p><FontAwesomeIcon icon={faSignature}/> - Hans Tys</p>
        <p><FontAwesomeIcon icon={faEnvelope}/> - Hans.ak.Tys@gmail.com</p>
        <p><FontAwesomeIcon icon={faMobile}/> - 0471426911</p>
        <p>This Portfolio can Be followed on <a href="https://github.com/Hans-Tys/Portfolio">github</a></p>
    </div>
  )
}
