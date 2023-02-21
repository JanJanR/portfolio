import './landing.css'
import memoji from '../../assets/memoji hi.png'
import Typewriter from 'typewriter-effect';


const landing = () => {
  return (
      <div className='intro' >
        <h1>
          Hi There! I'm John Romero,
          <span>
          <Typewriter
            options={{
              strings: ["I'm a Full Stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
          </span>
        </h1>
        <img src= { memoji } alt="" />
      </div>
  );
};

export default landing;
