import './landing.css'
import memoji from '../../assets/memoji hi.png'

const landing = () => {
  return (
      <div className='intro' >
        <h1>
          Hi There! I'm John,
          I'm a Full Stack Developer
        </h1>
        <img src= { memoji } alt="" />
      </div>
  );
};

export default landing;
