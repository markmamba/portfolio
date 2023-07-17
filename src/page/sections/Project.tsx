import React, { useEffect, useState } from "react";
import { Typography, Card, Carousel, Button } from 'antd';
import railway from '../../assets/jr_railway.webp'
import barber from '../../assets/barber_004f3dd39d.webp';
import job from '../../assets/job-management.png';
import '../../styles/Project-styles.css';
import { useNavigate, useParams } from 'react-router-dom';

const { Title, Text } = Typography;

const Project: React.FC = () => {
    const { id } = useParams<{ id: string | undefined }>();
    const navigate = useNavigate();
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  
    useEffect(() => {
      if (id) {
        const projectId = parseInt(id, 10);
        setSelectedProjectId(projectId);
      }
    }, [id]);
  
    const handleProjectClick = (projectId: number) => {
      setSelectedProjectId(projectId);
      navigate(`/project/${projectId}`);
    };
  
    const projects = [
      {
        name: "Job Management",
        description: "The project involved the development of a comprehensive system application that encompassed both a mobile app and an admin system. The mobile app provided a user-friendly platform for job seekers to apply for jobs, while the admin system enabled efficient management of user applications and partner clients' job postings. Additionally, the system facilitated credit management and job slot monitoring, providing a holistic solution for job application management. The application streamlined the recruitment process, improving efficiency and ensuring seamless communication between job seekers, administrators, and partner clients. By centralizing all these functionalities into a single system, the project significantly enhanced job application management and facilitated informed decision-making.",
        image: job,
        id: 1,
      },
      {
        name: "Innovation System",
        description: "The application developed aimed to enhance the internal technology development projects of a prominent railway company. Prior to the development of this application, project management was reliant on Excel, which proved to be a time-consuming and error-prone process. The new application not only improves upon the limitations of the Excel-based system but also provides a comprehensive platform to organize all the necessary information required for project approval. This innovative solution simplifies the project creation and editing processes for system administrators, managers, and department administrators, streamlining the entire workflow and significantly reducing the potential for errors. The successful implementation of this application marks a significant improvement in the management of the railway company's internal technology development projects, ensuring enhanced efficiency and productivity.",
        image: railway,
        id: 2,
      },
      {
        name: "Hair Treatment Reservation",
        description: "Barber Reservation is a cutting-edge reservation application developed to streamline the appointment management process for a hair salon. The primary objective of this project was to provide a user-friendly interface that would empower employees to efficiently manage reservations, ultimately reducing their workload and enhancing overall operational efficiency. To achieve this, we designed and implemented a custom calendar using CSS and Vuetify. This visually appealing and functional calendar offers a seamless solution for organizing appointments, enabling admins to effortlessly manage reservations by simply clicking, dragging, and dropping them within the calendar interface. The introduction of this application has resulted in significant benefits for the company's stores, including reduced operational costs and improved data management practices, leading to a more streamlined and efficient business operation.",
        image: barber,
        id: 3,
      },
    ];
  
    const initialSlide = selectedProjectId
      ? projects.findIndex((project) => project.id === selectedProjectId)
      : 0;
  
    return (
      <div className="project-container">
        <div className="title-container">
          <Title level={1} className="project-title">
            Projects
          </Title>
        </div>
        <div className="carousel-container">
          <Carousel className="custom-carousel" initialSlide={initialSlide}>
            {projects.map((project) => (
              <div key={project.id} onClick={() => handleProjectClick(project.id)}>
                <Card className="project-card">
                  <div className="card-cover">
                    <img alt={project.name} src={project.image} className="card-image" />
                  </div>
                  <div className="card-content">
                    <Title level={4} className="card-title">
                      {project.name}
                    </Title>
                    <Text className="card-description">
                      {project.description}
                    </Text>
                    <Button onClick={() => handleProjectClick(project.id)}>
                      View Details
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  };
  
  export default Project;