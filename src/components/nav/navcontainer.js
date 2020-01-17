import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faTags, faHistory, faShoppingBag, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from "shards-react";
import Main from "../main/main"
import Deals from "../deals/deals.js"
import Menu from "../menu/menu.js"
import Bag from "../bag/bag.js"
import Previous from "../previous/previous.js"
import Profile from "../profile/profile.js"

import "./Navbar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class NavContainer extends React.Component {
  render() {
    return (
      <Router>
      <Container className="nav-menu-container">
  

        <Row>
          <Col>
            <Link to="/deals">
              <FontAwesomeIcon icon={faTags}/>
              <h6>Deals</h6>
           </Link>
          </Col>
           <Col>
             <Link to="/menu">
               <FontAwesomeIcon icon={faBookOpen}/>
               <h6>Menu</h6>
             </Link>
           </Col>
           <Col>
             <Link to="/bag">
               <FontAwesomeIcon icon={faShoppingBag}/>
               <h6>Bag</h6>
             </Link>
           </Col>
           <Col>
             <Link to="/previous">
               <FontAwesomeIcon icon={faHistory}/>
               <h6>Previous</h6>
            </Link>
          </Col>
          <Col>
             <Link to="/profile">
               <FontAwesomeIcon icon={faUserCircle}/>
               <h6>Profile</h6>
             </Link>
          </Col>
        </Row>

      </Container>
      <Switch>
          
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/bag">
            <Bag />
          </Route>
          <Route path="/previous">
            <Previous />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Main />
          </Route>
          
        </Switch>
      </Router>
    );
  }
}