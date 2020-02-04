import React, { Component } from "react";
import { connect } from 'react-redux'
import './Menu.css';
import {
  Card,
  CardTitle,
  CardImg,
  CardSubtitle,
  Container,
  Row,
  Col,
  CardBody
} from "shards-react";


class Menu extends Component {

  render() {
    let itemList = this.props.items.map(item=>{
      return (
        <Row> 
          <Col className="">
        <Card className="mt-2 mb-2 item-col" style={{ maxWidth: "500px" }}  key={item.id}>
          <CardBody>
           <CardTitle style={{ position: "absolute", top: 20, right: 20 }}>{item.title}</CardTitle>
           <CardImg style={{ maxWidth: "200px" }} src={item.img} alt={item.title} />
             <div style={{ position: "absolute", bottom: 40, right: 20 }}>${item.price}</div>
         </CardBody>
       </Card>
       </Col>
        </Row>
      )
    })
    return ( 
      <Container className="menu-item-cont"> 
        
          {itemList}
         
      </Container> 
       );
  }

   
}
const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}
export default connect(mapStateToProps)(Menu);