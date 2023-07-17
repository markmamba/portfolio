import React from "react";
import { Typography } from 'antd';
import basketball from '../../assets/basketball.png';
import coding from '../../assets/coding.png';
import photograph from '../../assets/camera.png';
import movie from '../../assets/movie.png';
import '../../styles/About-styles.css';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  return (
    <>
      <div className="about-container">
      <div>
        <Title className="about-title" style={{ fontSize: '73px', color: 'rgb(221, 230, 237)' }}>About Me</Title>
      </div>
      <div className="about-contents-container">
        <div className="image-section">
          <div className="image-row">
            <img src={basketball} alt="Basketball" className="about-image" />
            <div className="image-space"></div>
          </div>
          <div className="image-row">
            <div className="image-space"></div>
            <img src={photograph} alt="Photography" className="about-image" />
          </div>
          <div className="image-row">
            <img src={coding} alt="Programming" className="about-image" />
            <div className="image-space"></div>
          </div>
          <div className="image-row">
            <div className="image-space"></div>
            <img src={movie} alt="Movies" className="about-image" />
          </div>
        </div>
        <div className="text-section">
          <Paragraph className="about-text">
            Hi there! I'm <span style={{ fontWeight: 800}}>Mark Henson</span>, a passionate individual with a diverse range of interests and skills. When I'm not on the basketball court shooting hoops, you'll often find me immersed in the world of programming or capturing moments through the lens of my camera. <br /><br />

            I have a deep love for basketball, and it has taught me valuable lessons about teamwork, perseverance, and discipline. The thrill of the game and the camaraderie of being part of a team have always fueled my competitive spirit. <br /><br />

            In addition to my athletic pursuits, I have a keen interest in programming. I spend a significant amount of my free time studying and honing my skills in Swift, exploring the frontend and backend side of web development. I find the ever-evolving world of technology fascinating, and I'm driven to stay up-to-date with the latest advancements. <br /><br />

            Photography is another passion of mine. I enjoy capturing the beauty in everyday life and freezing those moments in time. Whether it's landscapes, portraits, or candid shots, photography allows me to express my creativity and showcase the world from my unique perspective. <br /><br />

            On the weekends, I like to wind down by cozying up with a good movie. Films have a way of transporting me to different worlds, inspiring me, and sparking my imagination. <br /><br />

            Through my web portfolio, I aim to showcase my diverse skill set, including my proficiency in programming, my eye for capturing captivating photographs, and my ability to bring creativity and a strong work ethic to any project. I believe that my experiences both on and off the court have shaped me into a well-rounded individual, ready to take on new challenges and contribute positively to the field. <br /><br />

            I'm always open to exciting opportunities, collaborations, or even just a friendly chat. Feel free to reach out to me via <span style={{ fontWeight: 700}}><a href="https://www.linkedin.com/in/mhbautista/" style={{ color: 'red'}}>LinkedIn</a></span>. I look forward to connecting with you!
          </Paragraph>
        </div>
      </div>
      </div>
    </>
  );
}

export default About;










