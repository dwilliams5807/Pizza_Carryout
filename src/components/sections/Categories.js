import React, { Component } from "react";
import { connect } from 'react-redux'
import {
  Card,
  CardTitle,
  CardImg,
  Container,
  Row,
  Col,
  CardBody
} from "shards-react";


class Categories extends Component {

  handleClick = (id)=>{
    this.props.viewItems(id); 
}



  render() {
    let categoryList = this.props.categories.map(item=>{
      return (
        
          <Col className="">
            <Card className="mt-2 mb-2 item-col" style={{ maxWidth: "500px" }}  key={item.id}>
            <CardBody>
            <CardTitle style={{ position: "absolute", top: 20, right: 20 }}>{item.title}</CardTitle>
            <CardImg style={{ maxWidth: "200px" }} src={item.img} alt={item.title} />
           </CardBody>
          </Card>
        </Col>
        
      )
    })
    return ( 
      <Container className="menu-item-cont"> 
        <Row> 
          {categoryList}
          </Row>
      </Container> 
       );
  }

   
}
const mapStateToProps = (state)=>{
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(Categories);