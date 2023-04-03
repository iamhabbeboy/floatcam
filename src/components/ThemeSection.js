import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';

const { electronAPI } = window;

function ThemeSection() {
  let settings = [];
  for (var i = 0, len = localStorage.length; i < len; ++i) {
    let key = localStorage.key(i);
    let obj = localStorage.getItem(key);
    settings.push({ name: key, data: JSON.parse(obj) ?? [] });
  }

  const handleChangeEffect = (payload) => {
    const cameraConfig = [
      "set-camera-resolution",
      "set-camera-shape",
      "set-camera-mirror",
      "set-border-width",
      "set-border-style",
      "set-border-color",
      "set-video-stream",
      "set-video-filter",
    ];
    // cameraConfig.forEach((data) => {
    //   electronAPI.sendSync("shared-window-channel", {
    //     type: data,
    //     payload: {},
    //   });
    // })

    payload.forEach((data) => {
      if (cameraConfig.includes(data.type)) {
        electronAPI.sendSync("shared-window-channel", {
          type: data.type,
          payload: data.payload,
        });
      }
    });
    // if(cameraConfig.includes(payload.type)) {
    // const data = settings[0];
    // electronAPI.sendSync("shared-window-channel", {
    //   type: data.type,
    //   payload: data.payload,
    // });
  };

  return (
    <Container className="p-3">
      <ListGroup as="ol" numbered>
        {settings.map((setting) => {
          return (
            <ListGroup.Item
              className="d-flex justify-content-between align-items-start"
              onClick={(e) => handleChangeEffect(setting.data)}
            >
              <div className="ms-2 me-auto" style={{cursor: "pointer"}}>
                <div className="fw-bold">{setting.name}</div>
              </div>
              <Button variant="light" size="sm">delete</Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
}

export default ThemeSection;
