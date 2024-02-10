// import { FaYoutube, FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
// import { GrMail } from "react-icons/gr";
// import bio from '../../../images/bio.JPG'
import NavBar from "../../Navbar"
import './About.css'

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}

const About = () => {
  return ( 
    <div className='AboutContainer'>
        <NavBar />
      <div className='About' id="about">
        <div className='Text' >
          {/* <img className='Bio' src={bio} alt="me"></img> */}
          <p>please get in touch</p>
        </div>
        <div className='AboutIcons'>
          <i class="fa-solid fa-envelope fa-xl" onClick={handleURL('mailto:johnwhitten.studio@gmail.com')} />
          <i class="fa-brands fa-square-instagram fa-xl" onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
          <i class="fa-brands fa-square-github fa-xl" onClick={handleURL('https://github.com/johnwhittenstudio')} />
          <i class="fa-brands fa-linkedin fa-xl" onClick={handleURL('https://www.linkedin.com/in/johnwhittenstudio/')} />
          <i class="fa-brands fa-youtube fa-xl" onClick={handleURL('https://www.youtube.com/channel/UC-V6tMaHcYExkqCy-NWzTxQ/featured')} /> 
      </div>
      </div>
    </div>
   );
}
 
export default About;