import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsData from '../data/projectData.json';
import { Typography, Button, Divider } from "antd";
import job from '../assets/job-management.png';
import railway from '../assets/jr_railway.webp';
import barber from '../assets/barber_004f3dd39d.webp';
import '../styles/Project-details-styles.css';
import Footer from "./sections/Footer";

const { Title, Text } = Typography;

const ScrollToTop: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  return null;
};

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const navigate = useNavigate();

  if (!id) {
    return <div>Invalid project ID</div>;
  }

  const projectId = parseInt(id, 10);
  const project = projectsData.find((project) => project.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  let imageSrc = "";
  if (project.image === "job") {
    imageSrc = job;
  } else if (project.image === "railway") {
    imageSrc = railway;
  } else if (project.image === "barber") {
    imageSrc = barber;
  }

  const handleGoBack = () => {
    // Scroll to the project section after a short delay to allow the navigation to complete
    setTimeout(() => {
      const projectSection = document.getElementById('part-6');
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    
    navigate('/portfolio');
  };

  return (
    <>
      <ScrollToTop />
      <Button className="back-button" onClick={handleGoBack}>Back</Button>
      <div className="container">
        <Title className="proj-details-title">
          {project.name}
        </Title>
      </div>
      <div className="details-image-container">
        {imageSrc && <img className="image" src={imageSrc} alt={project.name} />}
      </div>
      <div className="container">
        <Title className="details-description-title">
          Description
        </Title>
        <Text className="details-description-text">
          {project.description}
        </Text>
        <Title className="details-description-title">
          Role
        </Title>
        <Text className="details-description-text">
          {project["role-overview"]}
        </Text>
        <Title className="details-description-title">
          Technology
        </Title>
        <Text className="details-description-text">
          {project.technologies}
        </Text>
        <div className='portfolio-divider'>
            <Divider />
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default ProjectDetails;

