import React, { Component } from "react";
import { connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Main from "../pages/Main/Main.js"
import Deals from "../pages/Deals/Deals.js"
import Menu from "../pages/Menu/Menu.js"
import Cart from "../pages/Cart/Cart.js"
import { logo } from "../../images/CECLogo_Type_White_No_S.png"

import { faShoppingBag, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {
 Navbar,
 Nav,
 NavbarBrand,
 NavLink,
 NavItem,
 Badge,
 NavbarToggler,
 Collapse,
 Dropdown,
 DropdownToggle,
 DropdownMenu,
 DropdownItem
} from "shards-react";
import "./Header.css";
import { Link } from 'react-router-dom';




class Header extends Component{

  render(){
      
     return(
      <Navbar className="navbar" type="dark">
      <NavbarBrand className="" href="#">
       Chuck E. Carryout
      </NavbarBrand>
       <NavLink className="nav-link" href='/'> 
       <FontAwesomeIcon size="2x" icon={faMapMarkerAlt}/>
        {this.props.location}
       </NavLink>
     </Navbar>
     )
  }
}
const mapStateToProps = (state)=>{
  return{
      total: state.addedItems.length,
      location: state.selectedLocation
    
  }
}

export default connect(mapStateToProps)(Header)

