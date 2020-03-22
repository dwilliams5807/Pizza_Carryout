import React, { Component } from "react";
import { connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Main from "../pages/Main/Main.js"
import Deals from "../pages/Deals/Deals.js"
import Menu from "../pages/Menu/Menu.js"
import Cart from "../pages/Cart/Cart.js"
import { logo } from "../../images/CECLogo_Type_White_No_S.png"

import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
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
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false,
      
    };
    this.changeLocation = this.changeLocation.bind(this);
  }
  changeLocation(location) {
    this.setState({
      ...this.state,
      ...{
        selectedLocation: location
      }
    });
    console.log(this.props.selectedLocation)


  }
  
  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render(){
      
     return(
      <Navbar sticky className="" type="dark" expand="md">
      <NavbarBrand className="" href="#">
       <div>{logo}</div> 
      </NavbarBrand>
      <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
      
          <Nav navbar >

            <Dropdown
              open={this.state.dropdownOpen}
              toggle={this.toggleDropdown}
            >
              <DropdownToggle nav caret>
                {this.state.selectedLocation}
              </DropdownToggle>
              <DropdownMenu>
                
                <DropdownItem name="location" value={"South Austin"} onClick={() => {this.changeLocation("South Austin");}} >South Austin</DropdownItem>
                <DropdownItem name="location" value={"Mopac"} onClick={() => {this.changeLocation("Mopac");}} >Mopac</DropdownItem>
                <DropdownItem name="location" value={"Round Rock"} onClick={() => {this.changeLocation("Round Rock");}} >Round Rock</DropdownItem>
              
              </DropdownMenu>
            </Dropdown>
          </Nav>
       

      </Collapse>
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

