import walkin from '../../assets/landing page walkin.png'
import './modalwalkin.css'

const Modal = ({open, onClose}) => {

  if(!open) return null

  return (
    <div className="overlay">
      <div className="modalContainer">
        <img src={walkin} alt="" />
        <div className="modalRight">
          <p onClick={onClose} className='close'>X</p>
          <div className="content">
            <p>Lorem ipsum dolor sit amet. Est obcaecati fuga nam quia eaque eos asperiores autem ut nostrum consequatur
              aut rerum voluptatum id voluptas neque et sequi sapiente. Ab consequatur iusto a galisum
              sequi ut laudantium autem ex odio nihil non eligendi incidunt sit omnis impedit aut voluptatem nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
   );
}

export default Modal;
