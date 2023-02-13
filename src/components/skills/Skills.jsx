import './skills.css'
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
        <motion.div layout onClick={() => setIsOpen(!isOpen)} className='cards'>
          <motion.h2 layout="positon">Frontend </motion.h2>
          {isOpen && (
            <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 1}}>
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
        <motion.div layout onClick={() => setIsOpen(!isOpen)} className='cards'>
          <motion.h2 layout="positon">Backend</motion.h2>
          {isOpen && (
            <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 1}}>
              <p>Ruby|on Rails</p>
              <p>SQL</p>
              <p>Postgresql</p>
              <p>Sqlite</p>
            </motion.div>
          )}
        </motion.div>
        <motion.div layout onClick={() => setIsOpen(!isOpen)} className='cards'>
          <motion.h2 layout="positon">Others</motion.h2>
          {isOpen && (
            <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 1}}>
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
