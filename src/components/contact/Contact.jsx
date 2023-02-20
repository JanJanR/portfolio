import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="contact-container" id='contact'>
      <div className="title">
        <h2>Contact</h2>
      </div>
      <div className="contactCard">
        <div className="contentCard">
          <p> Got an opportunity or a question, or just want to say Hello ? Feel free to reach me out.</p>
          <div className="contactIcon">
            <a href="https://github.com/JanJanR" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub}/>
            </a>
            <FontAwesomeIcon icon={faEnvelope}/>
            <FontAwesomeIcon icon={faLinkedin}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
