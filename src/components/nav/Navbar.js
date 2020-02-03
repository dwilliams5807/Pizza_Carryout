import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faTags, faHistory, faShoppingBag, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from "shards-react";
import Main from "../pages/Main/Main.js"
import Deals from "../pages/Deals/Deals.js"
import Menu from "../pages/Menu/Menu.js"
import Cart from "../pages/Cart/Cart.js"
import Previous from "../pages/Previous/Previous.js"
import Profile from "../pages/Profile/Profile.js"

import "./Navbar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class Navbar extends React.Component {
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
             <Link to="/cart">
               <FontAwesomeIcon icon={faShoppingBag}/>
               <h6>Cart</h6>
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
          <Route path="/cart">
            <Cart />
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