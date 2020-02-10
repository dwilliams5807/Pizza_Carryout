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

export default class Header extends Component{

  render(){
      
     return(
      <Navbar type="dark" theme="light" expand="md">
      <NavbarBrand href="#">Pizza Place</NavbarBrand>
      <Nav>
       
      </Nav>
     </Navbar>
     )
  }
}


