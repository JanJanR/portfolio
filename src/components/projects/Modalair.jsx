import './modalwalkin.css'
// import walkin from '../../assets/landing page walkin.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Slider from './Slider';


const Modalair = ({open, onClose}) => {

  if(!open) return null

  return (
  <div onClick={onClose} className="overlay">
    <div onClick={(e) => {
      e.stopPropagation();
    }} className="modalContainer">
      <div className='image'>
        {/* <img src={walkin} alt="" /> */}
        <Slider />
      </div>
      <div className="modalRight">
        <p onClick={onClose} className='close'>X</p>
        <p className='text'>AirBroomNBroom</p>
        <div className="info">
          <p>Desktop |</p>
          <a href="https://walk--in.herokuapp.com/" target="_blank" rel="noreferrer" className='link'> Try it now</a>
          <a href="https://github.com/JanJanR/walk-in" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="github" />
          </a>
        </div>
        <hr />
        <br />
        <div className="content">
          <p> This app was created by <strong>Francisco Goicoechea, Yasmin Brown, Lydia Ratto and my self </strong>
            for our final project at Le Wagon. Walkin it's a mobile app to answer the question "Where can
            I get a reservation tonight ?"
          </p>
        </div>
        <div className='tech'>
          <p> Ruby on Rails | JavaScript | HTML | CSS | PostgreSQL | Heroku</p>
        </div>
      </div>
    </div>
  </div>
   );
}

export default Modalair;
