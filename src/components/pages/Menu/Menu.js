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
        <Card key={item.id}>
          <CardBody>
           <CardTitle>{item.title}</CardTitle>
           <CardImg style={{ maxWidth: "200px" }} src={item.img} alt={item.title} />
           <CardSubtitle>{item.price}</CardSubtitle>
         </CardBody>
       </Card>
      )
    })
    return ( 
      <Container> 
        <Row> 
          <Col>
          {itemList}
          </Col>
        </Row>
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