import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { Container, Row, Col } from "shards-react";
import "./Navbar.css";


export default class NavContainer extends React.Component {
  render() {
    return (
      <Container className="nav-menu-container">
  

        <Row>
          <Col>Deals</Col>
          <Col>Menu</Col>
          <Col>Bag</Col>
          <Col>Previous</Col>
          <Col>Profile</Col>
        </Row>

      </Container>
    );
  }
}