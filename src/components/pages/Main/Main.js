import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faTags, faHistory, faShoppingBag, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Card, CardBody, Badge } from "shards-react";
import Deals from "../Deals/Deals.js"
import Menu from "../Menu/Menu.js"
import SelectLocation from "../SelectLocation/SelectLocation.js"
import Cart from "../Cart/Cart.js"
import Checkout from "../Checkout/Checkout.js"
import Animate from 'animate.css-react'
import 'animate.css/animate.css'



import "./Main.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Main extends React.Component {
  
  toggleCartOn = () => {
    this.setState({ isCartVisible: !this.state.isCartVisible === true});
  };
  toggleCartOff = () => {
    this.setState({ isCartVisible: !this.state.isCartVisible === false  });
  };

  render() {


    return (

      
      <Router>
      <Container className="nav-menu-container fixed-bottom">

        <Row>
         
  
           {/* <Col>
             <Link to="/menu">
               <FontAwesomeIcon icon={faBookOpen}/>
               <h6>Menu</h6>
             </Link>
           </Col> */}
       
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

      </Container>
      <Switch>
          
      <Route exact path="/" component={SelectLocation} />
      <Route exact path="/deals" component={Deals} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />




          
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

export default connect(mapStateToProps)(Main)

