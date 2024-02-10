// import { FaYoutube, FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
// import { GrMail } from "react-icons/gr";
import bio from '../../../images/bio.jpg'
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
        
        <div className='Image' >
          <img className='Bio' src={bio} alt="me"></img>
        </div>
        
        <div className='Text' >
          <p>John Whitten is an interdisciplinary artist who uses drawing and digital tools to examine the relationship between technology, materiality, and human experience. His artwork mines the philosophical significance of what it means to wander through a sea of signals and noise that envelops our world. His work has been exhibited nationally and internationally, and he has been the recipient of numerous residencies, grants, and awards. Whitten co-founded the artist-collective galleries Well Well Projects and Carnation Contemporary and the artist-collective project Thunderstruck. He is an art educator and web developer with his home and studio located in Portland, OR. </p>
          <p id="resume">cv/resume</p>
          <div className='AboutIcons'>
            <div className='AboutIcon'>
              <i class="fa-solid fa-envelope fa-xl" onClick={handleURL('mailto:johnwhitten.studio@gmail.com')} />
            </div>
            <div className='AboutIcon'>
              <i class="fa-brands fa-square-instagram fa-xl" onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
            </div>
            <div className='AboutIcon'>
              <i class="fa-brands fa-square-github fa-xl" onClick={handleURL('https://github.com/johnwhittenstudio')} />
            </div>
            <div className='AboutIcon'>
              <i class="fa-brands fa-linkedin fa-xl" onClick={handleURL('https://www.linkedin.com/in/johnwhittenstudio/')} />
            </div>   
            <div className='AboutIcon'>
              <i class="fa-brands fa-youtube fa-xl" onClick={handleURL('https://www.youtube.com/channel/UC-V6tMaHcYExkqCy-NWzTxQ/featured')} /> 
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default About;