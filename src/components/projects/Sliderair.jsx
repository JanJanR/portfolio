import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import air1 from '../../assets/airbroomnbroom1.png'
import air2 from '../../assets/airbroomnbroom2.png'
import air3 from '../../assets/airbroomnbroom3.png'
import air4 from '../../assets/airbroomnbroom4.png'
import './sliderair.css'

const Sliderair = () => {
  return (
    <div className="slideContainer">
      <Carousel showThumbs={false} useKeyboardArrows={true}
      showStatus={false} showArrows={true} infiniteLoop={true}>
        <div className="eachSlideair">
          <img src={air1} alt="air1" />
        </div>
        <div className="eachSlideair">
          <img src={air2} alt="air2" />
        </div>
        <div className="eachSlideair">
          <img src={air3} alt="air3" />
        </div>
        <div className="eachSlideair">
          <img src={air4} alt="air4" />
        </div>
      </Carousel>
    </div>
   );
}

export default Sliderair;
