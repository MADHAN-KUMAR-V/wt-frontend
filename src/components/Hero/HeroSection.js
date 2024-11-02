import React from 'react'
import Container from 'rsuite/Container';
import './HeroSection.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Container className='hero_bg'>
        <Container>
            <img src={logo} width={200} height={80} alt='logo' className='hero_logo'/>
            <Container className='hero_slogan'>
                <p style={{fontSize:"50px"}}>Catch the Big Investors,</p>
                <p>Ride the Wave to <span style={{color:"#89FC00"}}>Success!</span></p>
                <div className='hero_btn'>
                <p><Link to={'/dashboard'}>Explore more !..</Link></p>
                </div>
            </Container>
        </Container>
    </Container>
  )
}

export default HeroSection