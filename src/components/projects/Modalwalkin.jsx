import walkin from '../../assets/landing page walkin.png'
import './modalwalkin.css'

const Modal = ({open, onClose}) => {

  if(!open) return null

  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className='image'>
          <img src={walkin} alt="" />
        </div>
        <div className="modalRight">
          <p className='titleWalkin'>WALKIN</p>
          <p onClick={onClose} className='close'>X</p>
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
