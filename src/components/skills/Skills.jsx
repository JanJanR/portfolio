import './skills.css'
import frontend from '../../assets/frontend logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="title">
        <h2>Skills</h2>
      </div>
      <div className="skills">
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
             <div className="backend">
              <h2>Backend</h2>
            </div>
          </div>
        </div>
        <div className="white-background">
          <div className="black-header">
            <div className="other">
              <h2>Other</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
