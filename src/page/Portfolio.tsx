import React, { useRef, useEffect, useState } from 'react';
import { Anchor, Divider, Typography } from "antd";
import Home from './sections/Home'
import About from './sections/AboutMe';
import Skills from './sections/Skills';
import heroImage from "../assets/portfolio-image1.png";
import Experience from './sections/Experience';
import Work from './sections/Work';
import Project from './sections/Project';
import '../styles/Portfolio-styles.css';
import MenuDrawer from '../components/MenuDrawer';
import Footer from '../page/sections/Footer';
import Contacts from './sections/Contacts';

const { Title } = Typography;

const Portfolio: React.FC = () => {
    const divRef = useRef<HTMLDivElement>(null); // Add a useRef for the div element
    const [divHeight, setDivHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(false); // Add a state for mobile screen detection
  
    useEffect(() => {
      // Calculate the height of the div element
      const calculateDivHeight = () => {
        if (divRef.current) {
          const { height } = divRef.current.getBoundingClientRect();
          setDivHeight(height);
        }
      };
  
      calculateDivHeight();
      window.addEventListener('resize', calculateDivHeight);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', calculateDivHeight);
      };
    }, []);
  
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
  
    // Function to handle the anchor item click on mobile screens
    const handleAnchorItemClick = (href: string) => {
      const element = document.getElementById(href.substr(1));
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    };

    return (
        <>
            <div className='portfolio-container'>
                <div className='portfolio-anchor-container' ref={divRef}>
                {isMobile ? ( // Show menu drawer on mobile screens
                    <MenuDrawer onItemClick={handleAnchorItemClick} /> 
                ) : ( // Show anchor on larger screens
                    <Anchor direction='horizontal' affix={true} className='custom-anchor'>
                    <Anchor.Link href='#Home' title='Home' />
                    <span className='portfolio-span-space'></span>
                    <Anchor.Link href='#About' title='About Me' />
                    <span className='portfolio-span-space'></span>
                    <Anchor.Link href='#Skills' title='My Skills' />
                    <span className='portfolio-span-space'></span>
                    <Anchor.Link href='#Experience' title='Work Experience' />
                    <span className='portfolio-span-space'></span>
                    <Anchor.Link href='#Services' title='My Work' />
                    <span className='portfolio-span-space'></span>
                    <Anchor.Link href='#Projects' title='Projects' />
                    <span className='portfolio-span-space'></span>
                    <Anchor.Link href='#Contact' title='Contact' />
                    </Anchor>
                )}
                </div>
                <div className='portfolio-home-container'>
                    <div id="Home">
                        <img className='portfolio-image-hero'
                        src={heroImage}
                        alt="Background"
                        style={{
                            height: `calc(100% + ${divHeight}px)`,
                        }}
                        />
                        <div className='home-container'>
                            <Home />
                        </div>
                    </div>

                    <div id="About">
                            <About/>
                    </div>
                    <div className='portfolio-divider'>
                        <Divider />
                    </div>
                    <div id="Skills">
                            <Skills />
                    </div>
                    <div className='portfolio-divider'>
                        <Divider />
                    </div>
                    <div id="Experience">
                        <Experience/>
                    </div>
                    <div className='portfolio-divider'>
                        <Divider />
                    </div>
                    <div id="Services">
                        <Work/>
                    </div>
                    <div className='portfolio-divider'>
                        <Divider />
                    </div>
                    <div id="Projects">
                        <Project/>
                    </div>
                    <div className='portfolio-divider'>
                        <Divider />
                    </div>
                    <div id="Contact">
                        <Contacts />
                    </div>
                    <div className='portfolio-divider'>
                        <Divider />
                    </div>
                    <Footer/>
                </div>
            </div>
            
            
        </>
    );
}

export default Portfolio;