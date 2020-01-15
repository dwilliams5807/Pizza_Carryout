import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";

export default class FixedBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    // this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
    //   collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

//   toggleNavbar() {
//     this.setState({
//       ...this.state,
//       ...{
//         collapseOpen: !this.state.collapseOpen
//       }
//     });
//   }

  render() {
    return (
      <Navbar sticky type="light" theme="light">
        <NavbarBrand href="#">Shards React</NavbarBrand>
        {/* <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar> */}
          <Nav navbar>
            <NavItem>
              <NavLink active href="#">
                Deals
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink Active href="#">
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink Active href="#">
                Bag
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink Active href="#">
                Previous
              </NavLink>
            </NavItem>
            
            <Dropdown
              open={this.state.dropdownOpen}
              toggle={this.toggleDropdown}
            >
              <DropdownToggle nav caret>
                UserName
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Manage Prefrences</DropdownItem>
                <DropdownItem>Locations</DropdownItem>
                <DropdownItem>Sign Out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>

        {/* </Collapse> */}
      </Navbar>
    );
  }
}