import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faTags, faHistory, faShoppingBag, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from "shards-react";
import sideBar from "../profileSlide/profileSlide.js"
import "./Navbar.css";


export default class NavContainer extends React.Component {
  render() {
    return (
      <Container className="nav-menu-container">
  

        <Row>
          <Col>
          <FontAwesomeIcon icon={faTags}/>
          <h6>Deals</h6>
          </Col>
          <Col>
          <FontAwesomeIcon icon={faBookOpen}/>
          <h6>Menu</h6>
          </Col>
          <Col>
          <FontAwesomeIcon icon={faShoppingBag}/>
          <h6>Bag</h6>
          </Col>
          <Col>
          <FontAwesomeIcon icon={faHistory}/>
          <h6>Previous</h6>
          </Col>
          <Col>
          <FontAwesomeIcon icon={faUserCircle}/>
          <h6>Profile</h6>
          </Col>
        </Row>

      </Container>
    );
  }
}