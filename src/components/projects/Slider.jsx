import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './slider.css';
import walkin from '../../assets/walkin.png'
import walkin1 from '../../assets/walkin1.png'
import walkin2 from '../../assets/walkin2.png'
import walkin3 from '../../assets/walkin3.png'
import walkin4 from '../../assets/walkin4.png'
import walkin5 from '../../assets/walkin5.png'


const Slider = () => {
  return (
    <div className="sizeCarousel">
      <Carousel showThumbs={false} useKeyboardArrows={true}
        showStatus={false} showArrows={true} infiniteLoop={true}>
        <div className="eachSlide">
          <img src= {walkin} alt="walkin" className="imageSlide" />
        </div>
        <div className="eachSlide">
          <img src= {walkin1} alt="walkin1" className="imageSlide" />
        </div>
        <div className="eachSlide">
          <img src= {walkin2} alt="walkin2" className="imageSlide" />
        </div>
        <div className="eachSlide">
          <img src= {walkin3} alt="walkin3" className="imageSlide" />
        </div>
        <div className="eachSlide">
          <img src= {walkin4} alt="walkin4" className="imageSlide" />
        </div>
        <div className="eachSlide">
          <img src= {walkin5} alt="walkin5" className="imageSlide" />
        </div>
      </Carousel>
    </div>
   );
}

export default Slider;
