import './aboutme.css'
import computer from '../../assets/memoji computer.png'

const Aboutme = () => {
  return (
    <div className="container" id="aboutme">
      <div className="title">
        <h2>About me</h2>
      </div>
      <div className="about">
        <div className="logo-computer">
          <img src= { computer } alt="" />
        </div>
        <div className="description">
          <p>I am a Full Stack Developer passionate about designing, developing, and problem-solving applications
            and website. I graduated in a 10-weeks course at LeWagon London where I learn a lot specially in web-developent.
            I believe as a basketball player playing as a team is the key to win, so I am excited to communicate
            and work with others to accomplish great projects.
            I love to learn new things and I am excited at the prospect of collaborating with others and
            writing in a professional setting.</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
