import React from 'react'
import Container from 'rsuite/Container';
import './Home.css'
import HeroSection from '../components/Hero/HeroSection';
import AboutUs from '../components/About Us/AboutUs';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <Container>
        <HeroSection />
        <AboutUs />
        <Features />
        <Footer />
    </Container>
  )
}

export default Home