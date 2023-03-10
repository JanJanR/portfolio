import './navbar.css'
import logo from '../../assets/logo (2).png'
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
          <Link to="aboutme" spy={true} smooth={true} offset={-150} duration={800} onClick={closeMenu}>About me</Link>
          <Link to="skills" spy={true} smooth={true} offset={-400} duration={800} onClick={closeMenu}> Skills</Link>
          <Link to="projects" spy={true} smooth={true} offset={-280} duration={800} onClick={closeMenu}> Projects</Link>
          <Link to="contact" spy={true} smooth={true} offset={-200} duration={800} onClick={closeMenu}>Contact</Link>
        </div>
    </nav>
   );
};

export default Navbar;
