import './skills.css'
// import frontend from '../../assets/frontend logo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
// import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="skills-container">
      <div className="title">
        <h2>Skills</h2>
      </div>
      <div className="skills">
        <motion.div onClick={() => setIsOpen(!isOpen)} className='cards'>
          <motion.h2>Frontend</motion.h2>
          {isOpen && (
            <motion.div>
              <p>Html</p>
              <p>CSS</p>
              <p>SCSS</p>
              <p>Javascript</p>
              <p>Bootstraps</p>
              <p>TailwindCSS</p>
              <p>React</p>
            </motion.div>
          )}
        </motion.div>
        <motion.div onClick={() => setIsOpen(!isOpen)} className='cards'>
          <motion.h2>Backend</motion.h2>
          {isOpen && (
            <motion.div>
              <p>Ruby|on Rails</p>
              <p>SQL</p>
              <p>Postgresql</p>
              <p>Sqlite</p>
            </motion.div>
          )}
        </motion.div>
        <motion.div onClick={() => setIsOpen(!isOpen)} className='cards'>
          <motion.h2>Others</motion.h2>
          {isOpen && (
            <motion.div>
              <p>Git</p>
              <p>Github</p>
              <p>Bash</p>
              <p>Heroku</p>
              <p>Webpack</p>
              <p>Mapbox</p>
              <p>Vs Code</p>
              <p>Figma</p>
            </motion.div>
          )}
        </motion.div>
      </div>

    </div>
  );
}

export default Skills;

{/* <div className="skills">
  <div className="white-background">
    <div className="black-header">
    <img src= { frontend } alt="" />
      <div className="frontend">
        <h2>Frontend</h2>
      </div>
    </div>
  </div>
  <div className="white-background">
    <div className="black-header">
      <FontAwesomeIcon icon={faLaptopCode} className="laptop"/>
       <div className="backend">
        <h2>Backend</h2>
      </div>
    </div>
  </div>
  <div className="white-background">
    <div className="black-header">
    <FontAwesomeIcon icon={faTerminal} className="terminal"/>
      <div className="other">
        <h2>Other</h2>
      </div>
    </div>
  </div>
</div> */}
