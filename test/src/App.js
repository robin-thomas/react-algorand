import React, { useState } from "react";
import "./App.css";

import { MDBBtn } from "mdbreact";
import { Row, Col } from "react-bootstrap";

import Algorand from "react-algorand";

function App() {
  const [color, setColor] = useState("danger");

  const colors = [
    "danger",
    "primary",
    "dark",
    "warning",
    "success",
    "secondary",
    "info"
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <Col>
            <Algorand color={color} />
          </Col>
          <Col>
            {colors.map(color => (
              <MDBBtn key={color} color={color} onClick={() => setColor(color)}>
                {color}
              </MDBBtn>
            ))}
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
