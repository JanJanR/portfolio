import './skills.css'
// import { motion } from 'framer-motion';
import { useState } from 'react';
import { Carousel } from "react-carousel3";
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import ruby from "../../assets/ruby.png"
import figma from "../../assets/figma.png"
import heroku from "../../assets/heroku.png"
import javascript from "../../assets/javascript.png"
import react from "../../assets/react.png"
import rails from "../../assets/rails.png"


const Skills = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="skills-container">
      <div className="title">
        <h2>Skills</h2>
      </div>
      <div className="skills">
      <Carousel height={460} width={980} yOrigin={42} yRadius={90} autoPlay={true}>
      <div key={1}>
        <img alt="" src={ html } className='html'/>
      </div>
      <div key={2}>
        <img alt="" src={ css } className='css' />
      </div>
      <div key={3}>
        <img alt="" src={ ruby } className='ruby'/>
      </div>
      <div key={4}>
        <img alt="" src={ figma } className='figma'/>
      </div>
      <div key={5}>
        <img alt="" src={ heroku } className='heroku'/>
      </div>
      <div key={6}>
        <img alt="" src={ javascript } className='javascript'/>
      </div>
      <div key={7}>
        <img alt="" src={ react } className='react'/>
      </div>
      <div key={8}>
        <img alt="" src={ rails } className='rails'/>
      </div>
    </Carousel>
      </div>

    </div>
  );
}

export default Skills;

{/* <motion.div layout onClick={() => setIsOpen(!isOpen)} className='cards'>
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
          </motion.div> */}
