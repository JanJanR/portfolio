import './projects.css'
import walkin from '../../assets/Mockup Walkin (1).png'
import clone from '../../assets/AirBroomNBroom.png'
import Modal from './Modalwalkin';
import { useState } from 'react';

const Projects = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="project-container">
      <div className="title">
        <h2>Projects</h2>
      </div>
      <div className="projects">
        <div className="card">
          <div className="final-project">
            <img src= {walkin} alt="" />
            <p className='descriptionProject'>Walkin is a mobile app that helps people to find a table for tonight to make a reservation.</p>
            <div className="btn">
              <button onClick={() => setOpenModal(true)}>Learn More</button>
              <Modal open={openModal} onClose={() => setOpenModal(false)} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="airbnb-clone">
            <img src={clone} alt="" />
            <p className='descriptionProject'>AirBroomNBroom (AirBnB clone) is a market place for broomstick rental.</p>
            <div className="btn">
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default Projects;
