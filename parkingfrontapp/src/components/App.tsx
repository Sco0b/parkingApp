import React from "react";
import AppHeader from "./layout/AppHeader";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ParkingContainer from "./parking/ParkingContainer";
import TicketBoard from "./tickets/TicketBoard";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Container>
        <Row>
          <Col className="col-12 col-lg-6">
            <TicketBoard />
          </Col>
          <Col className="col-12 col-lg-6">
            <ParkingContainer />
          </Col>
        </Row>
      </Container>
      <footer className="footer">
        <p> DEMO PARK PROJECT by STEPHANIE EON</p>
      </footer>
    </div>
  );
}

export default App;
