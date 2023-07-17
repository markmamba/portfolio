import React from "react";
import { Typography, Card } from 'antd';
import transtechLogo from '../../assets/transtech-logo.png';
import hivelocityLogo from '../../assets/hv-logo.png';
import gruuwLogo from '../../assets/gruuw-logo.png';
import '../../styles/Experience-styles.css';

const { Title, Text } = Typography;

const Experience: React.FC = () => {
  return (
      <>
      <div className="experience-container">
        <div className="experience-title-container">
          <Title className="experience-title" style={{ textAlign: 'left' }}>
            Work Experience
          </Title>
       </div>
      <div className="experience-cards-container">
        <Card
          className="experience-card"
          cover={<div className="experience-card-cover">
            <img
              alt="Transtech"
              src={transtechLogo}
              className="transtech-logo" />
          </div>}
        >
          <Title className="experience-card-title">
            Transtech Co., Ltd.<br />
            Customer Assistant<br />
            (2020-03~2021~09)
            {/* <span className="company-name">Transtech Co., Ltd.</span><br />
            <span className="position">Customer Assistant</span><br />
            <span className="duration">(2020-03~2021~09)</span> */}
          </Title>
          <Text className="experience-card-text">
            I provided exceptional customer service for a package cargo service,
            specializing in shipments from Japan to the Philippines.
            I assisted customers in placing orders, supported package pick-up requests,
            and provided timely updates on package status.
            My expertise in handling Japanese customers' payment inquiries and delivering
            accurate package information ensured high customer satisfaction.
            I excelled in multitasking, prioritizing tasks, and maintaining effective communication channels.
            With a customer-centric approach and strong problem-solving skills,
            I consistently exceeded expectations.
          </Text>
        </Card>
        <Card
          className="experience-card"
          cover={<div className="hivelo-card-cover">
            <img
              alt="Hivelocity"
              src={hivelocityLogo}
              className="hivelo-logo" />
          </div>}
        >
          <Title className="experience-card-title">
            <span className="company-name">Hivelocity Inc.</span><br />
            <span className="position">Junior Web Director/ Product Manager</span><br />
            <span className="duration">(2021-10~2023~03)</span>
          </Title>
          <Text className="experience-card-text">
            As a Junior Web Director/Product Manager, I successfully promoted and managed product development
            while ensuring timely delivery. I supervised a cross-functional team, made minor project decisions,
            and maintained comprehensive project documentation. With strong organizational and communication skills,
            I facilitated seamless collaboration and achieved project milestones.
          </Text>
        </Card>
        <Card
          className="experience-card"
          cover={<div className="experience-card-cover">
            <img
              alt="Gruuw"
              src={gruuwLogo}
              className="gruuw-logo" />
          </div>}
        >
          <Title className="experience-card-title">
            <span className="company-name">Gruuw KK</span><br />
            <span className="position">Software Developer</span><br />
            <span className="duration">(2023-04~Present)</span>
          </Title>
          <Text className="experience-card-text">
            As a Fullstack Software Developer,
            I am responsible for handling bug fixes, implementing new features,
            and maintaining both the backend and frontend of the project.
            With expertise in both front-end and back-end development,
            I ensure the smooth operation and continuous improvement of the software.
          </Text>
        </Card>
      </div>
      </div>
      </>
  );
}

export default Experience;
