import './navbar.css'
import logo from '../../assets/logo (1).png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src= { logo } alt="logo" />
        <div>
          <a href="/">About me</a>
          <a href="/">Skills</a>
          <a href="/">Projects</a>
          <a href="/">Contact me</a>
        </div>
    </nav>
   );
};

export default Navbar;
