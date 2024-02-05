import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DrawingsDropdown from '../components/pages/Drawings/DrawingsDropdown';

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          John Whitten
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa-solid fa-x' : 'fa-solid fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* <li className='nav-item'>
            <Link to='/' className='nav-links' onCLick={closeMobileMenu}>
              Home
            </Link>
          </li> */}
          <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/drawings' 
                  className='nav-links' 
                  onCLick={closeMobileMenu}
            >
              Drawings <i className='fa-solid fa-caret-down' />
            </Link>
            {dropdown && <DrawingsDropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/videos' className='nav-links' onCLick={closeMobileMenu}>
              Videos <i className='fa-solid fa-caret-down' />
            </Link>
            {/* {dropdown && <Dropdown />} */}
          </li>
          <li className='nav-item'>
            <Link to='/photos' className='nav-links' onCLick={closeMobileMenu}>
              Photos <i className='fa-solid fa-caret-down' />
            </Link>
            {/* {dropdown && <Dropdown />} */}
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onCLick={closeMobileMenu}>
              About
            </Link>
          </li>
          
          <div className='icons'>
            <div className='social-icon' onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')}>
              <i className="fa-brands fa-square-instagram fa-xl" />
            </div>
            <div className='social-icon' onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')}>
              <i className="fa-solid fa-envelope fa-xl" />
            </div>
          </div>

          {/* <div className="fa-brands fa-square-instagram" />
            <GrMail color="#ababab" size='20px' style={{padding: '0%'}}
              onClick={handleURL('mailto:johnwhitten.studio@gmail.com')} />
          </div>
          <div className="fa-brands fa-square-instagram" />
            <FaInstagramSquare color="#ababab" size='20px' style={{padding: '0%'}}
              onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
          </div> */}

        </ul>
        {/* <Button /> */}
      </nav>
    </>
  )
}

export default Navbar;