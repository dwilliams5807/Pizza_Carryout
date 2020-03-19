import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Card,
    CardTitle,
    CardImg,
    Container,
    Row,
    Col,
    CardBody,
    Button
  } from "shards-react";

class Categories extends Component {

    handleClick = (id)=>{

        let categoryItems = this.props(id).items.map(item=> {
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
            <Container className="menu-item-cont"> 
              <Row> 
                {categoryItems}
                </Row>
            </Container> 
             );
    }
    
    render() {
        let categoryList = this.props.categories.map(category=> {
        return (
            <div>
                <Col>
                <Card key={category.id} onClick={()=>{this.handleClick(category.id)}}>
                 <CardBody>
                 <CardTitle>{category.title}</CardTitle>
                </CardBody>
                 </Card>

                </Col>
            </div>
        )
    })
    return ( 
        <Container> 
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