import React, { Component } from "react";
import { connect} from 'react-redux'
import {
 Navbar,
 Nav,
 NavbarBrand,
 NavLink,
 NavItem,
 Badge
} from "shards-react";

class Header extends Component{

  render(){
      
     return(
      <Navbar type="dark" theme="primary" expand="md">
      <NavbarBrand href="#">Pizza Place</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink active path="/cart">
                 <h5>Cart <Badge pill theme="danger">{this.props.total}</Badge></h5>
          </NavLink>
        </NavItem>
      </Nav>
     </Navbar>
     )
  }
}

const mapStateToProps = (state)=>{
  return{
      total: state.addedItems.length
  }
}

export default connect(mapStateToProps)(Header)

