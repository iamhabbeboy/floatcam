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
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function SettingsScreen() {
  const [action, setAction] = React.useState([]);
  const setActionHandler = (obj) => {
    const foundRecord = action.find((item) => item.type === obj.type);
    if (foundRecord) {
      const index = action.indexOf(foundRecord);
      action[index] = obj;
      setAction(action);
      return;
    }
    const data = [...action, obj];
    setAction(data);
  };

  const handleSaveSetting = async () => {
    const rand = Math.floor(Math.random() * 1000);
    localStorage.setItem(`settings-${rand}`, JSON.stringify(action));
  };
  return (
    <Form>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Camera Styles &nbsp;
            <Badge bg="secondary" pill>
              {localStorage.length}
            </Badge>
          </Accordion.Header>
          <Accordion.Body>
            <ThemeSection />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Camera Settings</Accordion.Header>
          <Accordion.Body>
            <CamSection setAction={setActionHandler} />
            <BorderSection />
            <EffectsSection />
            <div className="d-grid mx-3">
              <Button variant="primary" size="lg" onClick={handleSaveSetting}>
                Save Setting
              </Button>
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
