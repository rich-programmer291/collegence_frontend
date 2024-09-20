import React from "react";
import "./About.css"; // Optional: Include custom styles

const About = () => {
  return (
    <div className="about-me-container">
      <h1>About Collegence</h1>

      <section className="about-collegence">
        <h2>What is Collegence?</h2>
        <p>
          Collegence is an online guide portal designed to help students
          navigate through college life by providing expert guidance,
          mentorship, and resources. Whether it's academic advice, career
          planning, or extracurricular activities, Collegence connects juniors
          with experienced seniors to foster a supportive community.
        </p>
      </section>

      <section className="about-creator">
        <h2>About the Creator</h2>
        <p>
          Hi, I'm [Your Name], the developer behind Collegence. As a student who
          has experienced the ups and downs of college life, I wanted to create
          a platform where students can find answers to their questions and
          receive advice from those who have already walked the path. My
          background in web development has enabled me to design and build this
          portal to serve as a bridge between students and their mentors.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make college life easier by offering guidance and
          support through a reliable network of peers and seniors. By
          encouraging collaboration and communication, we aim to empower
          students to achieve their goals and navigate their college journey
          confidently.
        </p>
      </section>
    </div>
  );
};

export default About;
