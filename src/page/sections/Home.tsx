import React from "react";
import { Typography } from 'antd';
import '../../styles/Home-styles.css';

const { Title, Text } = Typography;

const Home: React.FC = () => {
    return (
        <div className='home-title-container'>
            <div className="home-text-contents">
                <Title className="home-title-text">
                    Hi, I am <span className="home-span-name">Mark Henson</span><br />
                    a fullstack Developer.    
                </Title>
                <Text className="home-text"
                style={{ 
                    maxWidth: '400px', 
                    overflowWrap: 'break-word', 
                    wordWrap: 'break-word', 
                    fontSize: '20px', 
                    color: 'rgb(221, 230, 237)' 
                    }}>
                    I am a passionate and dedicated fullstack developer, eager to take on freelance projects.
                    With a strong foundation in both front-end and back-end development, I strive to create innovative and user-friendly solutions.
                    As a beginner in this exciting field, I am constantly seeking opportunities to learn and grow, embracing new technologies and best practices.
                    I am committed to delivering high-quality results that exceed expectations. Let's collaborate and bring your ideas to life!
                </Text>
            </div>
        </div>
    );
}

export default Home;