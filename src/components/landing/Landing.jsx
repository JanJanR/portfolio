import './landing.css'
import memoji from '../../assets/memoji hi.png'
import Typewriter from 'typewriter-effect';


const landing = () => {
  return (
      <div className='intro' >
        <h1>
          Hi There! I'm John Romero,
          <Typewriter
            options={{
              strings: ["I am a Full Stack Developer"],
              autoStart: true,
              loop: true,
              pauseFor: 1500,
              delay: 100,
            }}
          />
        </h1>
        <img src= { memoji } alt="" />
      </div>
  );
};

export default landing;
