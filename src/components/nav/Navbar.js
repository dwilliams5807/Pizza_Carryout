import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faTags, faHistory, faShoppingBag, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Card, CardBody, Badge } from "shards-react";
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


class Navbar extends React.Component {
  render() {
    return (

      
      <Router>
      <Container className="nav-menu-container fixed-bottom">
          <div className="cart-badge">
            <Badge  pill theme="danger">
             <Link className="link" to="/cart">
               <FontAwesomeIcon size="3x" icon={faShoppingBag}/>
               <h3> {this.props.total} </h3>
             </Link>
             </Badge>
             </div>
      <Card> 
            <CardBody>
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
        </CardBody>
         </Card>
      </Container>
      <Switch>
          
      <Route exact path="/" component={Main} />
      <Route exact path="/deals" component={Deals} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/previous" component={Previous} />
      <Route exact path="/profile" component={Profile} />


          
      </Switch>
      </Router>
      
    );
  }
}
const mapStateToProps = (state)=>{
  return{
      total: state.addedItems.length
  }
}

export default connect(mapStateToProps)(Navbar)

