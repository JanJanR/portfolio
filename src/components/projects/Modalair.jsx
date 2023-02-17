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
        <p onClick={onClose} className='closeair'>X</p>
        <p className='textair'>AirBroomNBroom</p>
        <div className="infoair">
          <p>Desktop |</p>
          <a href="https://airbnb-yasbrown.herokuapp.com/" target="_blank" rel="noreferrer" className='linkair'> Try it now</a>
          <a href="https://github.com/JanJanR/air_broom_and_broom" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="githubair" />
          </a>
        </div>
        <hr />
        <br />
        <div className="contentair">
          <p> This app was created by <strong>Francisco Goicoechea, Yasmin Brown, Lydia Ratto and my self </strong>
            for our first project at Le Wagon. An online marketplace to rent broomstick (AirBnB clone).
          </p>
        </div>
        <div className='techair'>
          <p> Ruby on Rails | JavaScript | HTML | CSS | PostgreSQL | Heroku</p>
        </div>
      </div>
      {/* <div className='imageair'> */}
        <Sliderair />
      {/* </div> */}
    </div>
  </div>
   );
}

export default Modalair;
