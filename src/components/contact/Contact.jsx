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
          <p> Got an <strong>opportunity</strong> or a <strong>question</strong>, or just want to say Hello ? Feel free to reach me out.</p>
          <div className="contactIcon">
            <a href="https://github.com/JanJanR" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="fontAwesome"/>
            </a>
            <a href="mailto:romerojohn1012@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="fontAwesome"/>
            </a>
            <a href="https://www.linkedin.com/in/john-romero-272b22256/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="fontAwesome"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
