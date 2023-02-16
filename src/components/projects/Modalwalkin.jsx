import walkin from '../../assets/landing page walkin.png'
import './modalwalkin.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Modal = ({open, onClose}) => {

  if(!open) return null

  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className='image'>
          <img src={walkin} alt="" />
        </div>
        <div className="modalRight">
          <p onClick={onClose} className='close'>X</p>
          <p className='text'>WALKIN</p>
          <div className="info">
            <p>Mobile App |</p>
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
            {/* <p>Ruby on Rails</p>
            <p>Javascript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>PostgreSQL</p>
            <p>Heroku</p> */}
            <p> Ruby on Rails | JavaScript | HTML | CSS | PostgreSQL | Heroku</p>
          </div>
        </div>
      </div>
    </div>
   );
}

export default Modal;
