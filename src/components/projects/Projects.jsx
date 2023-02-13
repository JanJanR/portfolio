import walkin from '../../assets/Mockup Walkin (1).png'
import clone from '../../assets/AirBroomNBroom.png'
import './projects.css'

const projects = () => {
  return (
    <div className="project-container">
      <div className="title">
        <h2>Projects</h2>
      </div>
      <div className="projects">
        <div className="final-project">
          <img src= {walkin} alt="" />
        </div>
        <div className="airbnb-clone">
          <img src={clone} alt="" />
        </div>
      </div>
    </div>
   );
}

export default projects;
