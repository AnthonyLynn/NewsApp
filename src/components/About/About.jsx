import profileImage from "../../images/Profile.jpg";
import "./About.css";

function About() {
  return (
    <section className="about">
      <img src={profileImage} alt="profile" className="about__image" />
      <div>
        <h2 className="about__header">About the author</h2>
        <p className="about__description">
          Anthony Lynn is a Software Engineer with a background in game design.
          They use React, CSS, and HTML; though recently started to use
          Tailwind. After their graduation from TripleTen, a coding boot camp,
          they've helped build responsive user focused applications from Figma
          mockups.
        </p>
      </div>
    </section>
  );
}

export default About;
