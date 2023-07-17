import React, { useEffect, useState } from "react";
import { Typography, Card } from 'antd';
import reactLogo from '../../assets/logo512.png';
import laravelLogo from '../../assets/laravel-logo.png';
import swiftLogo from '../../assets/swift-logo.png';
import aiLogo from '../../assets/ai-logo.png';
import psLogo from '../../assets/ps-logo.png';
import prLogo from '../../assets/pr-logo.png';
import xdLogo from '../../assets/xd-logo.png';
import officeLogo from '../../assets/office-logo.png';
import '../../styles/Skills-styles.css';

const { Title } = Typography;

const Skills: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false); 

    useEffect(() => {
        // Function to detect if the screen width is smaller than 768px (mobile size)
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 1444);
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
    return (
        <>
        <div className="skills-container">
            <div className="skills-title-container">
                <Title className="skills-title-text">
                    My Skills
                </Title>
            </div>
            {isMobile ? (
                    <div className="skills-cards-container">
                    <div className="skills-cards-flex-container">
                        <Card className="skills-card-content-body">
                            <img className="skills-image-icon" src={reactLogo} alt="react" />
                        </Card>
                        <Card className="skills-card-content-body">
                            <img className="skills-image-icon" src={laravelLogo} alt="react"  />
                        </Card>
                    </div>
                    <div className="skills-cards-flex-container">
                        <Card className="skills-card-content-body">
                            <img className="skills-image-icon swift-icon" src={swiftLogo} alt="react"  />
                        </Card>
                        <Card className="skills-card-content-body">
                            <img className="skills-image-icon" src={psLogo} alt="react"  />
                        </Card>
                    </div> 
                    <div className="skills-cards-flex-container">
                        <Card className="skills-card-content-body">
                            <img className="skills-image-icon" src={prLogo} alt="react"  />
                        </Card>
                        <Card className="skills-card-content-body">
                            <img className="skills-image-icon" src={xdLogo} alt="react"  />
                        </Card>
                    </div>
                    <div className="skills-cards-flex-container">
                        <Card className="skills-card-content-body">
                            <img className="skills-image-icon" src={aiLogo} alt="react"  />
                        </Card>
                        <Card className="skills-card-content-body">
                            <img className="skills-image-icon" src={officeLogo} alt="react"  />
                        </Card>
                    </div>
                </div>
            ):(
                <div className="skills-cards-container">
                <div className="skills-cards-flex-container">
                    <Card className="skills-card-content-body">
                        <img className="skills-image-icon" src={reactLogo} alt="react" />
                    </Card>
                    <Card className="skills-card-content-body">
                        <img className="skills-image-icon" src={laravelLogo} alt="react"  />
                    </Card>
                    <Card className="skills-card-content-body">
                        <img className="skills-image-icon" src={swiftLogo} alt="react"  />
                    </Card>
                </div>
                <div className="skills-cards-flex-container">
                    <Card className="skills-card-content-body">
                        <img className="skills-image-icon" src={psLogo} alt="react"  />
                    </Card>
                    <Card className="skills-card-content-body">
                        <img className="skills-image-icon" src={prLogo} alt="react"  />
                    </Card>
                </div> 
                <div className="skills-cards-flex-container">
                    <Card className="skills-card-content-body">
                        <img className="skills-image-icon" src={xdLogo} alt="react"  />
                    </Card>
                    <Card className="skills-card-content-body">
                        <img className="skills-image-icon" src={aiLogo} alt="react"  />
                    </Card>
                    <Card className="skills-card-content-body">
                        <img className="skills-image-icon" src={officeLogo} alt="react"  />
                    </Card>
                </div>
            </div>
            )}
            
        </div>
        
        </>
    );
}

export default Skills;