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
        <div className="card">
          <div className="final-project">
            <img src= {walkin} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="airbnb-clone">
            <img src={clone} alt="" />
          </div>
        </div>
      </div>
    </div>
   );
}

export default projects;
