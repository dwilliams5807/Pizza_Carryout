import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    Card,
    CardTitle,
    CardImg,
    CardHeader,
    Button,
    Container,
    Row,
    Col,
    CardBody
  } from "shards-react";
class Cart extends Component{

    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(

                        
                          <Col className="">
                             <Card classname="mt-2 mb-2 cart-col" style={{ maxWidth: "300px" }} key={item.id}>
                              <CardImg style={{height: "50px", width: "75px"}} src={item.img} />
                              <CardBody>
                              <CardTitle>{item.title}</CardTitle>
                              <p><b>Price: ${item.price}</b></p>
                              <p><b>Quantity: {item.quantity}$</b></p> 
                              <Button>+</Button>
                              <Button>-</Button>
                             </CardBody>
                    
                           </Card>
                          </Col>
                      
                                             
                    )
                })
            ):

             (
                <p>The cart is empty. Click on Menu to order something.</p>
             )
       return(
            <Container>
                 <h5>Your Order:</h5>
                <Row> 
                    
                    
                        {addedItems}
                     
               
                </Row>
            </Container>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart)