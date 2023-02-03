import './navbar.css'
import logo from '../../assets/logo (1).png'
import {useState} from 'react'
import {Link} from 'react-scroll'


const Navbar = () => {
  // const [activeNav, setActiveNav] = useState('');
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(click);

  return (
    <nav className='navbar'>
      <img src= { logo } alt="logo" />
        <div>
          <Link to="aboutme" spy={true} smooth={true} offset={-80} duration={800} onClick={closeMenu}>Aboutme</Link>
          <Link to="skills" spy={true} smooth={true} offset={-120} duration={800} onClick={closeMenu}> Skills</Link>
          <a href="/"id="projects">Projects</a>
          <a href="/"id="contactme">Contact me</a>
        </div>
    </nav>
   );
};

export default Navbar;
