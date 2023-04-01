import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";

const { electronAPI } = window;

function ThemeSection() {
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("settings");
    if (!data) return;
    setSettings(JSON.parse(data) ?? []);
  }, []);

  const handleChangeEffect = () => {
    const data = settings[0];
    electronAPI.sendSync("shared-window-channel", {
      type: data.type,
      payload: data.payload,
    });
  };

  return (
    <Container className="p-3">
      <div onClick={handleChangeEffect}>Settings</div>
    </Container>
  );
}

export default ThemeSection;
