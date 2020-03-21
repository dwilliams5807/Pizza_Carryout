import React, { Component } from "react";
import { connect } from 'react-redux'
import { Button } from "shards-react";
import './Menu.css';
import { addToCart } from '../../reducers/actions/cartActions.js'
import {
  Card,
  CardTitle,
  CardImg,
  CardSubtitle,
  Container,
  Row,
  Col,
  CardBody,
  Collapse
} from "shards-react";


class Menu extends Component {
  constructor(props) {
    super(props);
    this.togglePizza = this.togglePizza.bind(this);
    this.toggleSpecialty = this.toggleSpecialty.bind(this);
    this.toggleApps = this.toggleApps.bind(this);
    this.togglePacks = this.togglePacks.bind(this);
    this.toggleDeals = this.toggleDeals.bind(this);
    this.toggleSalads = this.toggleSalads.bind(this);
    this.toggleDesserts = this.toggleDesserts.bind(this);
    this.toggleBeverages = this.toggleBeverages.bind(this);

    this.state = { collapsePizza: false, collapseSpecialty: false, collapseApps: false, collapsePacks: false, collapseDeals: false, collapseSalads: false, collapseDesserts: false, collapseBeverages: false };
  }
  togglePizza() {
    this.setState({ collapsePizza: !this.state.collapsePizza });
  }
  toggleSpecialty() {
    this.setState({ collapseSpecialty: !this.state.collapseSpecialty });
  }
  toggleApps() {
    this.setState({ collapseApps: !this.state.collapseApps });
  }
  togglePacks() {
    this.setState({ collapsePacks: !this.state.collapsePacks });
  }
  toggleDeals() {
    this.setState({ collapseDeals: !this.state.collapseDeals });
  }
  toggleSalads() {
    this.setState({ collapseSalads: !this.state.collapseSalads });
  }
  toggleDesserts() {
    this.setState({ collapseDesserts: !this.state.collapseDesserts });
  }
  toggleBeverages() {
    this.setState({ collapseBeverages: !this.state.collapseBeverages });
  }
  handleClick = (id)=>{
    this.props.addToCart(id); 
}

  render() {
    let pizzaList = this.props.pizzas.map(item=>{
      return (
        
          <Col className="">
            <Card className="mt-2 mb-2 item-col" style={{ maxWidth: "500px" }}  key={item.id}>
            <CardBody>
            <CardTitle style={{ position: "absolute", top: 20, right: 20 }}>{item.title}</CardTitle>
            <CardImg style={{ maxWidth: "200px" }} src={item.img} alt={item.title} />
            <span style={{ position: "absolute", bottom: 40, right: 100 }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button pill theme="info">+</Button></span>
            <div style={{ position: "absolute", bottom: 40, right: 20 }}>${item.price}</div>
           </CardBody>
          </Card>
        </Col>
        
      )
    })
    let specialList = this.props.specialty.map(item=>{
      return (
        
          <Col className="">
            <Card className="mt-2 mb-2 item-col" style={{ maxWidth: "500px" }}  key={item.id}>
            <CardBody>
            <CardTitle style={{ position: "absolute", top: 20, right: 20 }}>{item.title}</CardTitle>
            <CardImg style={{ maxWidth: "200px" }} src={item.img} alt={item.title} />
            <span style={{ position: "absolute", bottom: 40, right: 100 }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button pill theme="info">+</Button></span>
            <div style={{ position: "absolute", bottom: 40, right: 20 }}>${item.price}</div>
           </CardBody>
          </Card>
        </Col>
        
      )
    })
    let appList = this.props.apps.map(item=>{
      return (
        
          <Col className="">
            <Card className="mt-2 mb-2 item-col" style={{ maxWidth: "500px" }}  key={item.id}>
            <CardBody>
            <CardTitle style={{ position: "absolute", top: 20, right: 20 }}>{item.title}</CardTitle>
            <CardImg style={{ maxWidth: "200px" }} src={item.img} alt={item.title} />
            <span style={{ position: "absolute", bottom: 40, right: 100 }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button pill theme="info">+</Button></span>
            <div style={{ position: "absolute", bottom: 40, right: 20 }}>${item.price}</div>
           </CardBody>
          </Card>
        </Col>
        
      )
    })
    let packList = this.props.packs.map(item=>{
      return (
        
          <Col className="">
            <Card className="mt-2 mb-2 item-col" style={{ maxWidth: "500px" }}  key={item.id}>
            <CardBody>
            <CardTitle style={{ position: "absolute", top: 20, right: 20 }}>{item.title}</CardTitle>
            <CardImg style={{ maxWidth: "200px" }} src={item.img} alt={item.title} />
            <span style={{ position: "absolute", bottom: 40, right: 100 }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button pill theme="info">+</Button></span>
            <div style={{ position: "absolute", bottom: 40, right: 20 }}>${item.price}</div>
           </CardBody>
          </Card>
        </Col>
        
      )
    })
    let dealsList = this.props.deals.map(item=>{
      return (
        
          <Col className="">
            <Card className="mt-2 mb-2 item-col" style={{ maxWidth: "500px" }}  key={item.id}>
            <CardBody>
            <CardTitle style={{ position: "absolute", top: 20, right: 20 }}>{item.title}</CardTitle>
            <CardImg style={{ maxWidth: "200px" }} src={item.img} alt={item.title} />
            <span style={{ position: "absolute", bottom: 40, right: 100 }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button pill theme="info">+</Button></span>
            <div style={{ position: "absolute", bottom: 40, right: 20 }}>${item.price}</div>
           </CardBody>
          </Card>
        </Col>
        
      )
    })
    let saladList = this.props.salads.map(item=>{
      return (
        
          <Col className="">
            <Card className="mt-2 mb-2 item-col" style={{ maxWidth: "500px" }}  key={item.id}>
            <CardBody>
            <CardTitle style={{ position: "absolute", top: 20, right: 20 }}>{item.title}</CardTitle>
            <CardImg style={{ maxWidth: "200px" }} src={item.img} alt={item.title} />
            <span style={{ position: "absolute", bottom: 40, right: 100 }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button pill theme="info">+</Button></span>
            <div style={{ position: "absolute", bottom: 40, right: 20 }}>${item.price}</div>
           </CardBody>
          </Card>
        </Col>
        
      )
    })
    let dessertList = this.props.desserts.map(item=>{
      return (
        
          <Col className="">
            <Card className="mt-2 mb-2 item-col" style={{ maxWidth: "500px" }}  key={item.id}>
            <CardBody>
            <CardTitle style={{ position: "absolute", top: 20, right: 20 }}>{item.title}</CardTitle>
            <CardImg style={{ maxWidth: "200px" }} src={item.img} alt={item.title} />
            <span style={{ position: "absolute", bottom: 40, right: 100 }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button pill theme="info">+</Button></span>
            <div style={{ position: "absolute", bottom: 40, right: 20 }}>${item.price}</div>
           </CardBody>
          </Card>
        </Col>
        
      )
    })
    let beverageList = this.props.beverages.map(item=>{
      return (
        
          <Col className="">
            <Card className="mt-2 mb-2 item-col" style={{ maxWidth: "500px" }}  key={item.id}>
            <CardBody>
            <CardTitle style={{ position: "absolute", top: 20, right: 20 }}>{item.title}</CardTitle>
            <CardImg style={{ maxWidth: "200px" }} src={item.img} alt={item.title} />
            <span style={{ position: "absolute", bottom: 40, right: 100 }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button pill theme="info">+</Button></span>
            <div style={{ position: "absolute", bottom: 40, right: 20 }}>${item.price}</div>
           </CardBody>
          </Card>
        </Col>
        
      )
    })
    return ( 
      
   <div className="menu-div">
     <Container className="menu-item-cont"> 
        <Button block onClick={this.togglePacks}>Family and Party Packs</Button>
        <Collapse open={this.state.collapsePacks}>
          <Row> 
          {packList}
          </Row>
      
       </Collapse>
       </Container> 
      <br></br>
      <Container className="menu-item-cont"> 
         <Button block onClick={this.togglePizza}>Pizzas</Button>
          <Collapse open={this.state.collapsePizza}>
             <Row> 
            {pizzaList}
            </Row>
         </Collapse>
      </Container> 
      <br></br>
      <Container className="menu-item-cont"> 
         <Button block onClick={this.toggleSpecialty}>Specialty Pizzas</Button>
          <Collapse open={this.state.collapseSpecialty}>
             <Row> 
            {specialList}
            </Row>
         </Collapse>
      </Container> 
      <br></br>
      <Container className="menu-item-cont"> 
         <Button block onClick={this.toggleApps}>Apps and Wings</Button>
          <Collapse open={this.state.collapseApps}>
             <Row> 
            {appList}
            </Row>
         </Collapse>
      </Container> 
      <br></br>
      <Container className="menu-item-cont"> 
         <Button block onClick={this.toggleSalads}>Salad</Button>
          <Collapse open={this.state.collapseSalads}>
             <Row> 
            {saladList}
            </Row>
         </Collapse>
      </Container> 
      <br></br>
      <Container className="menu-item-cont"> 
         <Button block onClick={this.toggleDesserts}>Desserts</Button>
          <Collapse open={this.state.collapseDesserts}>
             <Row> 
            {dessertList}
            </Row>
         </Collapse>
      </Container> 
      <br></br>
      <Container className="menu-item-cont"> 
         <Button block onClick={this.toggleBeverages}>Beverages</Button>
          <Collapse open={this.state.collapseBeverages}>
             <Row> 
            {beverageList}
            </Row>
         </Collapse>
      </Container> 
      <br></br>
      <Container className="menu-item-cont"> 
         <Button block onClick={this.toggleDeals}>Deals</Button>
          <Collapse open={this.state.collapseDeals}>
             <Row> 
            {dealsList}
            </Row>
         </Collapse>
      </Container> 
    
       
   </div>
       );
  }

   
}
const mapStateToProps = (state)=>{
  return {
    items: state.items,
    pizzas: state.pizzas,
    specialty: state.specialty,
    packs: state.packs,
    deals: state.deals,
    desserts: state.desserts,
    beverages: state.beverages,
    apps: state.apps,
    salads: state.salads

  }
}

const mapDispatchToProps= (dispatch)=>{
    
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu);