import React from "react";
import Container from "rsuite/esm/Container";
import { FlexboxGrid,Text } from "rsuite";
import "./AboutUs.css";
import robotImg from "../../assets/about_us_robot.png";
import dots from '../../assets/dots.png'

const AboutUs = () => {
  return (
    <Container className="about-us_container">
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={8}>
          <img src={robotImg} alt="" width={400} height={400} />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={16} >
           <Container className="about_us_content">
            <Text style={{fontSize:'40px',marginBottom:"20px",fontWeight:'bolder'}}>About WT+</Text>
            <Text style={{fontSize:'22px'}}>WT+ is a powerful whale tracker that monitors the buying and selling activities of big investors, providing you with real-time buy and sell signals. With added backtesting data, WT+ lets you analyze past performance, empowering you to trade with confidence by following the moves of market leaders.</Text>
            <div className="about_dot">
                <img src={dots} alt="" width={75} height={75}/>
            </div>
           </Container>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Container>
  );
};

export default AboutUs;
