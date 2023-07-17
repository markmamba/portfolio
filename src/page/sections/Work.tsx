import React from "react";
import { Typography, Card } from 'antd';
import fullstack from '../../assets/coding.png';
import mobile from '../../assets/mobile-app.png';
import prodMan from '../../assets/supply-chain.png';
import '../../styles/Work-styles.css';

const { Title, Text } = Typography;

const Work: React.FC = () => {
    return(
        <>
            <div className="work-container">
            <div className='work-title-container'>
            <Title className='work-title-text'>
                What I Do
            </Title>
        </div>
        <div className="work-card-container">
                <Card className="work-card-content-body"
                    cover={
                        <div className="work-cover-image-container">
                        <img 
                            className="work-cover-image"
                            alt="Product Management"
                            src={prodMan}
                        />
                        </div>
                    }
                    >
                    <div>
                        <Title className="work-card-title">
                        Product Management
                        </Title>
                        <Text className="work-card-text">
                        As a skilled Product Manager, I possess the expertise to effectively oversee product development, 
                        strategy, and lifecycle management. With a customer-centric approach, I excel in market research, 
                        defining product roadmaps, and collaborating cross-functionally to deliver innovative and 
                        successful products.
                        </Text>
                    </div>
                </Card>
                <Card className="work-card-content-body"
                    cover={
                        <div className="work-cover-image-container">
                        <img 
                            className="work-cover-image"
                            alt="Mobile Development"
                            src={mobile}
                        />
                        </div>
                    }
                    >
                    <div>
                        <Title className="work-card-title">
                        Mobile Development
                        </Title>
                        <Text className="work-card-text">
                        As a Mobile Developer specializing in Swift and iOS app development, 
                        I bring expertise in creating exceptional mobile experiences. 
                        With a deep understanding of iOS development frameworks and best practices, 
                        I excel in designing and implementing robust and user-friendly applications. 
                        From concept to deployment, I am adept at crafting elegant and efficient code 
                        that meets client requirements and exceeds user expectations. 
                        My passion for mobile development and commitment to staying updated with the 
                        latest industry trends drive me to deliver high-quality and visually 
                        stunning iOS applications.
                        </Text>
                    </div>
                </Card>
                <Card className="work-card-content-body"
                    cover={
                        <div className="work-cover-image-container">
                        <img 
                            className="work-cover-image"
                            alt="FullStack"
                            src={fullstack}
                        />
                        </div>
                    }
                    >
                    <div>
                        <Title className="work-card-title">
                        Software Development
                        </Title>
                        <Text className="work-card-text">
                        As a Fullstack Software Developer, I possess a versatile skill set that combines 
                        frontend and backend expertise. With proficiency in React.js for frontend development 
                        and Laravel framework for backend development, I can create robust and dynamic websites 
                        from start to finish. Leveraging the power of React.js, I craft intuitive user interfaces 
                        and engaging user experiences. Additionally, my expertise in Laravel enables me to 
                        design efficient and scalable backend systems, ensuring seamless data management 
                        and secure functionality. With a holistic approach to software development, 
                        I deliver high-quality solutions that meet client requirements and exceed expectations.
                        </Text>
                    </div>
                </Card>
            </div>
            </div>
        </>
    );
}

export default Work;