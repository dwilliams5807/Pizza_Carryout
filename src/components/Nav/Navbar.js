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
import Animate from 'animate.css-react'
import 'animate.css/animate.css'



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
           <Animate
           change="bounce"
           >
          <div className="cart-badge">
          
          <Badge  theme="light">
             <Link className="cart-link" to="/cart">
               <FontAwesomeIcon size="5x" icon={faShoppingBag}/>
               <h3> {this.props.totalUnits} </h3>
             </Link>
             </Badge>
             </div>
             </Animate>
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
      total: state.addedItems.length,
      totalUnits: state.totalUnits
  }
}

export default connect(mapStateToProps)(Navbar)

