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
            <a href="https://walk--in.herokuapp.com/" target="_blank" rel="noreferrer"> Live </a>
            <FontAwesomeIcon icon={faGithub} className="github" />
          </div>
          <hr />
          <br />
          <div className="content">
            <p> This app was created by Francisco Goicoechea, Yasmin Brown, Lydia Ratto and my self
              for our final project at Le Wagon. Walkin it's a mobile app to answer the question "Where can
              I get a reservation tonight ?"
            </p>
          </div>
        </div>
      </div>
    </div>
   );
}

export default Modal;
