import React, { Component } from "react";
import { connect } from 'react-redux'
import './Menu.css';
import { addToCart, cartVisible } from '../../reducers/actions/cartActions.js'
import { icon} from '../../../images/chuck-icon.png'


import  store  from '../../reducers/store/store.js'


import {
  Button,
  Card,
  CardTitle,
  CardImg,
  CardSubtitle,
  Container,
  Row,
  Col,
  CardBody,
  Collapse,
  Modal,
  ModalBody,
  ModalHeader
} from "shards-react";
import toggleCartOn from '../Main/Main.js'
import Main from "../Main/Main";




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
    this.toggleInd = this.toggleInd.bind(this);
    this.toggleMed = this.toggleMed.bind(this);
    this.toggleLar = this.toggleLar.bind(this);
    this.toggleIndSpecial = this.toggleIndSpecial.bind(this);
    this.toggleMedSpecial = this.toggleMedSpecial.bind(this);
    this.toggleLarSpecial = this.toggleLarSpecial.bind(this);


   

    this.state = {  collapsePizza: false, collapseInd: false, collapseMed: false, collapseLar: false, collapseSpecialty: false, collapseIndSpecial: false, collapseMedSpecial: false, collapseLarSpecial: false, collapseApps: false, collapsePacks: false, collapseDeals: false, collapseSalads: false, collapseDesserts: false, collapseBeverages: false };
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
  toggleInd() {
    this.setState({ collapseInd: !this.state.collapseInd });
  }
  toggleMed() {
    this.setState({ collapseMed: !this.state.collapseMed });
  }
  toggleLar() {
    this.setState({ collapseLar: !this.state.collapseLar });
  }
  toggleIndSpecial() {
    this.setState({ collapseIndSpecial: !this.state.collapseIndSpecial });
  }
  toggleMedSpecial() {
    this.setState({ collapseMedSpecial: !this.state.collapseMedSpecial });
  }
  toggleLarSpecial() {
    this.setState({ collapseLarSpecial: !this.state.collapseLarSpecial });
  }

  handleClick = (id)=>{
    this.props.addToCart(id); 
    this.props.cartVisible(true); 
}

componentDidMount() {
  this.props.cartVisible(true); 
  
}


  render() {
    

      
    // let pizzaList = this.props.pizzas.map(item=>{
    //   return (
        
    //  <Col sm="12" md="6" className="">
    //     <Container fluid className='centered'>
    //      <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
    //      <CardBody>
    //      <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
    //      <img style={{ height: "120px"}} src={item.img} alt={item.title} />

    //      <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
         
    //     </CardBody>
    //    </Card>
    //    </Container>
    //  </Col>
        
    //   )
    // })
    
    // let specialList = this.props.specialty.map(item=>{
    //   return (
        
    //     <Col sm="12" md="6" className="">
    //     <Container fluid className='centered'>
    //      <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
    //      <CardBody>
    //        <Row>
    //          <Col className={item.style} sm='5'>
    //            <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
    //             </Col>
    //             <Col >
    //             <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
    //             </Col>
    //             </Row>
    //             <Row>
    //               <Col sm='12'>
    //                 <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
    //             </Col>
    //             </Row>
    //             </CardBody>
    //           </Card>
    //           </Container>
    //         </Col>
        
    //   )
    // })
    let appList = this.props.apps.map(item=>{
      return (
        
        <Col sm="12" md="6" className="">
        <Container fluid className='centered'>
         <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
         <CardBody>
           <Row>
             <Col className={item.style} sm='5'>
               <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
                </Col>
                <Col >
                <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
                </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
                </Col>
                </Row>
                </CardBody>
              </Card>
              </Container>
            </Col>
        
      )
    })
    let packList = this.props.packs.map(item=>{
      return (
        
        <Col sm="12" md="6" className="">
        <Container fluid className='centered'>
         <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
         <CardBody>
           <Row>
             <Col className={item.style} sm='5'>
               <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
                </Col>
                <Col >
                <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
                </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
                </Col>
                </Row>
                </CardBody>
              </Card>
              </Container>
            </Col>
        
      )
    })
    let dealsList = this.props.deals.map(item=>{
      return (
        
        <Col sm="12" md="6" className="">
        <Container fluid className='centered'>
         <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
         <CardBody>
           <Row>
             <Col className={item.style} sm='5'>
               <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
                </Col>
                <Col >
                <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
                </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
                </Col>
                </Row>
                </CardBody>
              </Card>
              </Container>
            </Col>
        
      )
    })
    let saladList = this.props.salads.map(item=>{
      return (
        
        <Col sm="12" md="6" className="">
        <Container fluid className='centered'>
         <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
         <CardBody>
           <Row>
             <Col className={item.style} sm='5'>
               <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
                </Col>
                <Col >
                <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
                </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
                </Col>
                </Row>
                </CardBody>
              </Card>
              </Container>
            </Col>
        
      )
    })
    let dessertList = this.props.desserts.map(item=>{
      return (
        
        <Col sm="12" md="6" className="">
        <Container fluid className='centered'>
         <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
         <CardBody>
           <Row>
             <Col className={item.style} sm='5'>
               <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
                </Col>
                <Col >
                <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
                </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
                </Col>
                </Row>
                </CardBody>
              </Card>
              </Container>
            </Col>
        
      )
    })
    let beverageList = this.props.beverages.map(item=>{
      return (
        
        <Col sm="12" md="6" className="">
        <Container fluid className='centered'>
         <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
         <CardBody>
           <Row>
             <Col className={item.style} sm='5'>
               <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
                </Col>
                <Col >
                <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
                </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
                </Col>
                </Row>
                </CardBody>
              </Card>
              </Container>
            </Col>
        
      )
    })
    let indList = this.props.ind.map(item=>{
      
      return (
        
    <Col sm="12" md="6" className="">
        <Container fluid className='centered'>
         <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
         <CardBody>
           <Row>
             <Col className={item.style} sm='5'>
               <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
                </Col>
                <Col >
                <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
                </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
                </Col>
                </Row>
                </CardBody>
              </Card>
              </Container>
            </Col>
        
      )
    })
    let medList = this.props.med.map(item=>{
      return (
        
        <Col sm="12" md="6" className="">
        <Container fluid className='centered'>
         <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
         <CardBody>
           <Row>
             <Col className={item.style} sm='5'>
               <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
                </Col>
                <Col >
                <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
                </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
                </Col>
                </Row>
                </CardBody>
              </Card>
              </Container>
            </Col>
        
      )
    })
    let larList = this.props.large.map(item=>{
      return (
        
        <Col sm="12" md="6" className="">
        <Container fluid className='centered'>
         <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
         <CardBody>
           <Row>
             <Col className={item.style} sm='5'>
               <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
                </Col>
                <Col >
                <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
                </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
                </Col>
                </Row>
                </CardBody>
              </Card>
              </Container>
            </Col>
        
      )
    })
    let indSpecialList = this.props.indSpecial.map(item=>{
      
      return (
        
    <Col sm="12" md="6" className="">
        <Container fluid className='centered'>
         <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
         <CardBody>
           <Row>
             <Col className={item.style} sm='5'>
               <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
                </Col>
                <Col >
                <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
                </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
                </Col>
                </Row>
                </CardBody>
              </Card>
              </Container>
            </Col>
        
      )
    })
    let medSpecialList = this.props.medSpecial.map(item=>{
      return (
        
        <Col sm="12" md="6" className="">
        <Container fluid className='centered'>
         <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
         <CardBody>
           <Row>
             <Col className={item.style} sm='5'>
               <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
                </Col>
                <Col >
                <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
                </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
                </Col>
                </Row>
                </CardBody>
              </Card>
              </Container>
            </Col>
        
      )
    })
    let larSpecialList = this.props.largeSpecial.map(item=>{
      return (
        
        <Col sm="12" md="6" className="">
        <Container fluid className='centered'>
         <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
         <CardBody>
           <Row>
             <Col className={item.style} sm='5'>
               <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
                </Col>
                <Col >
                <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
                </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
                </Col>
                </Row>
                </CardBody>
              </Card>
              </Container>
            </Col>
        
      )
    })
    return ( 
      
   <div className="menu-div">  

         <Container className="menu-item-cont"> 
         <Button theme="info" className="add-button" block onClick={this.toggleDeals}><h5 className='cat-button-text'>Deals</h5></Button>
          <Collapse open={this.state.collapseDeals}>
             <Row> 
            {dealsList}
            </Row>
         </Collapse>
      </Container>      
      <br></br>
     
     <Container className="menu-item-cont"> 
        <Button theme="info" className="cat-button" block onClick={this.togglePacks}><h5 className='cat-button-text'>Family and Party Packs</h5></Button>
        <Collapse open={this.state.collapsePacks}>
          <Row>
          {packList}
          </Row>
      
       </Collapse>
       </Container> 
      <br></br>
      <Container className="menu-item-cont"> 
         <Button theme="info" className="cat-button" block onClick={this.togglePizza}><h5 className='cat-button-text'>Pizzas</h5></Button>
          <Collapse open={this.state.collapsePizza}>
          <Button theme="info" className="add-button" block onClick={this.toggleInd}><h5 className='cat-button-text'>Individual</h5></Button>
            <Collapse open={this.state.collapseInd}>
             <Row> 
            {indList}
            </Row>
           </Collapse>
           <Button theme="info" className="add-button" block onClick={this.toggleMed}><h5 className='cat-button-text'>Medium</h5></Button>
           <Collapse open={this.state.collapseMed}>
             <Row> 
            {medList}
            </Row>
           </Collapse>
           <Button theme="info" className="add-button" block onClick={this.toggleLar}><h5 className='cat-button-text'>Large</h5></Button>
           <Collapse open={this.state.collapseLar}>
             <Row> 
            {larList}
            </Row>
           </Collapse>
         </Collapse>
      </Container> 
      <br></br>
      <Container className="menu-item-cont"> 
         <Button theme="info" className="cat-button" block onClick={this.toggleSpecialty}><h5 className='cat-button-text'>Specialty Pizzas</h5></Button>
          <Collapse open={this.state.collapseSpecialty}>
          <Button theme="info" className="add-button" block onClick={this.toggleIndSpecial}><h5 className='cat-button-text'>Individual</h5></Button>
            <Collapse open={this.state.collapseIndSpecial}>
             <Row> 
            {indSpecialList}
            </Row>
           </Collapse>
           <Button theme="info" className="add-button" block onClick={this.toggleMedSpecial}><h5 className='cat-button-text'>Medium</h5></Button>
           <Collapse open={this.state.collapseMedSpecial}>
             <Row> 
            {medSpecialList}
            </Row>
           </Collapse>
           <Button theme="info" className="add-button" block onClick={this.toggleLarSpecial}><h5 className='cat-button-text'>Large</h5></Button>
           <Collapse open={this.state.collapseLarSpecial}>
             <Row> 
            {larSpecialList}
            </Row>
           </Collapse>
         </Collapse>
      </Container> 
      <br></br>
      <Container className="menu-item-cont"> 
         <Button theme="info" className="cat-button" block onClick={this.toggleApps}><h5 className='cat-button-text'>Apps and Wings</h5></Button>
          <Collapse open={this.state.collapseApps}>
             <Row> 
            {appList}
            </Row>
         </Collapse>
      </Container> 
      <br></br>
      <Container className="menu-item-cont"> 
         <Button theme="info" className="cat-button" block onClick={this.toggleSalads}><h5 className='cat-button-text'>Salad</h5></Button>
          <Collapse open={this.state.collapseSalads}>
             <Row> 
            {saladList}
            </Row>
         </Collapse>
      </Container> 
      <br></br>
      <Container className="menu-item-cont"> 
         <Button theme="info" className="cat-button" block onClick={this.toggleDesserts}><h5 className='cat-button-text'>Desserts</h5></Button>
          <Collapse open={this.state.collapseDesserts}>
             <Row> 
            {dessertList}
            </Row>
         </Collapse>
      </Container> 
      <br></br>
      <Container className="menu-item-cont"> 
         <Button theme="info" className="cat-button" block onClick={this.toggleBeverages}><h5 className='cat-button-text'>Beverages</h5></Button>
          <Collapse open={this.state.collapseBeverages}>
             <Row> 
            {beverageList}
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
    salads: state.salads,
    visible: state.isCartVisible,
    ind: state.individualPizzas,
    med: state.mediumPizzas,
    large: state.largePizzas,
    indSpecial: state.indSpecialty,
    medSpecial: state.medSpecialty,
    largeSpecial: state.larSpecialty,
  }
}

const mapDispatchToProps= (dispatch)=>{
    
  return{
      addToCart: (id)=>{dispatch(addToCart(id))},
      cartVisible: (visible)=>{dispatch(cartVisible(visible))},

      
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);