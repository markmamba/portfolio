import { Card, Typography } from "antd";
import React from "react";
import deal from '../../assets/deal.avif';
import '../../styles/Contacts-styles.css';
import { FacebookOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Contacts: React.FC = () => {
    return(
        <div className="contact-container">
            <div className="contact-title-container">
                <Title className="contact-title">
                    Contacts
                </Title>
            </div>
            <div className="contact-cards-container">
                <Card
                className="contact-card"
                cover={<div className="contact-card-cover">
                    <img
                    alt="Freelance"
                    src={deal}
                    className="contact-image" />
                    </div>}
                >
                <Title className="contact-card-title">
                    Mark Henson Bautista
                </Title>
                <div className="contact-position-container">
                    <Text className="contact-position">Fullstack Software Developer <br/></Text>
                </div>
                <div className="contact-card-text-container">
                    <Text className="contact-card-text">
                        Hello! I'm a seasoned Full Stack Developer with a background as a skilled Product Manager. 
                        Now seeking freelance and part-time projects, my unique blend of customer-centricity and technical expertise enables me to deliver exceptional results. 
                        Let's connect and explore how I can contribute to your next venture!
                    </Text>
                </div>
                <div className="contact-info">
                    <Text className="contact-card-text">
                        Location: <span className="contact-span">Japan</span> <br />
                        Email:{" "}
                        <a href="mailto:mark.hensonbautista@gmail.com" className="contact-span">
                        mark.hensonbautista@gmail.com
                        </a>
                    </Text>
                </div>

                <div className="contact-icons-container">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <TwitterOutlined className="contact-icons" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <InstagramOutlined className="contact-icons" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FacebookOutlined className="contact-icons" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedinOutlined className="contact-icons" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <GithubOutlined className="contact-icons" />
                    </a>
                </div>
                </Card>
            </div>
        </div>
    );
}

export default Contacts;