import { Typography } from "antd";
import React from "react";
import '../../styles/Footer-styles.css';

const { Text } = Typography;

const Footer: React.FC = () => {
    return(
        <div className='footer-container'>
            <Text className='footer-text'>© 2023. All rights reserved by Mark Bautista</Text>
        </div>
    );
}

export default Footer;