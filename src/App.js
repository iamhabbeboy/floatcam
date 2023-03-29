import React from "react";
import "./App.css";
import logo from "./floatcam-circle.png";
import Accordion from "react-bootstrap/Accordion";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import CamSection from "./components/CamSection";
import BorderSection from "./components/BorderSection";
import EffectsSection from "./components/EffectsSection";
import ThemeSection from "./components/ThemeSection";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function SettingsScreen() {
  return (
    <Form>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Camera Styles 
            &nbsp;<Badge bg="secondary" pill>1</Badge></Accordion.Header>
          <Accordion.Body>
            <ThemeSection />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Camera Settings</Accordion.Header>
          <Accordion.Body>
            <CamSection />
            <BorderSection />
            <EffectsSection />
            <div className="d-grid mx-3">
              <Button variant="primary" size="lg" >Save Setting</Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Form>
  );
}

function App() {
  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header" style={{ textAlign: "center" }}>
          <img src={logo} alt="FloatCam Logo" height="65px" width="65px" />
        </h1>
        <h1 className="header" style={{ textAlign: "center" }}>
          floatcam
        </h1>
        <SettingsScreen />
      </Container>
    </Container>
  );
}

export default App;
