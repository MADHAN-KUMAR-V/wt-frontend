import React from "react";
import { Container, Text, Panel } from "rsuite";
import "./Features.css";
import data from "../../assets/data.png";
import automation from "../../assets/automation.png";
import ai from "../../assets/ai.png";

const Features = () => {
  return (
    <Container className="features_container">
      <Text className="features_heading">How we make a difference</Text>

      <Container className="features_card_container">
        <Panel
          shaded
          bordered
          bodyFill
          style={{ display: "inline-block", width: 300 }}
          className="card_left"
        >
          <Container className="img">
            <img src={data} height={150} width={150} alt="" />
          </Container>
          <Panel header="Data">
            <p>
              <small>
                Gain a trading edge with data-driven signals. WT+ whale tracking
                unlocks insights, empowering smarter investment decisions.
              </small>
            </p>
          </Panel>
        </Panel>

        <Panel
          shaded
          bordered
          bodyFill
          style={{ display: "inline-block", width: 300 }}
          className="card_center"
        >
          <Container className="img">
            <img src={automation} height={150} width={150} alt="" />
          </Container>
          <Panel header="Automation">
            <p>
              <small>
                Streamline your trades and boost returns with WT+ whale
                tracking, freeing up your time to focus on strategic investment
                decisions.
              </small>
            </p>
          </Panel>
        </Panel>

        <Panel
          shaded
          bordered
          bodyFill
          style={{ display: "inline-block", width: 300 }}
          className="card_right"
        >
          <Container className="img">
            <img src={ai} height={150} width={150} alt="" />
          </Container>
          <Panel header="AI">
            <p>
              <small>
                Unlock whale insights to personalize your trades, automate
                signals, and gain a market edge. Transform your portfolio with
                WT+'s cutting-edge tracking solutions.
              </small>
            </p>
          </Panel>
        </Panel>
      </Container>
    </Container>
  );
};

export default Features;
