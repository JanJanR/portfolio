import './modalair.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Sliderair from './Sliderair';


const Modalair = ({open, onClose}) => {

  if(!open) return null

  return (
  <div onClick={onClose} className="overlay">
    <div onClick={(e) => {
      e.stopPropagation();
    }} className="modalairContainer">
      <div className="modalairRight">
        <p onClick={onClose} className='close-air'>X</p>
        <p className='text-air'>AirBroomNBroom</p>
        <div className="info-air">
          <p>Desktop |</p>
          <a href="https://airbnb-yasbrown.herokuapp.com/" target="_blank" rel="noreferrer" className='link-air'> Try it now</a>
          <a href="https://github.com/JanJanR/air_broom_and_broom" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="github-air" />
          </a>
        </div>
        <hr />
        <br />
        <div className="content-air">
          <p> This app was created by <strong>Francisco Goicoechea, Yasmin Brown, Lydia Ratto and my self </strong>
            for our first project at Le Wagon. An online marketplace to rent broomstick (AirBnB clone).
          </p>
        </div>
        <div className='tech-air'>
          <p> Ruby on Rails | JavaScript | HTML | CSS | PostgreSQL | Heroku</p>
        </div>
        <Sliderair />
      </div>
    </div>
  </div>
   );
}

export default Modalair;
