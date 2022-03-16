import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import SelectBorderWidth from "./select/BorderWidth";
import SelectBorderStyle from "./select/BorderStyle";

function BorderSection() {
  return (
    <Container className="p-3">
      <Card>
        <Card.Body>
          <Card.Title>Border</Card.Title>
          <SelectBorderWidth />
          <SelectBorderStyle />

          <Card.Text as="div">
            <Form.Group controlId="formVideoBorderColor">
              <Form.Label>Color</Form.Label>
              <Form.Control type="color" defaultValue="#499979" />
            </Form.Group>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BorderSection;
