import React, { Component } from 'react';

import { connect} from 'react-redux'
import { ListGroup, ListGroupItem, ListGroupItemText, Button, Container, Row, Col, Card, CardBody } from "shards-react";


class Confirm extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { name, email, phone }} = this.props;
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(

                        
                          <ListGroupItem className="" key={item.id}>
                              <ListGroupItemText>
                                  {item.quantity} X {item.title}
                              </ListGroupItemText>
                          </ListGroupItem>
                      
                                             
                    )
                })
            ):
            (
                <p>Sorry, there was a problem with your order. Please contact the store.</p>
             )
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                           <h1 className="ui centered">Thank You!</h1>
                           <h4 className="ui centered">Your order has been recieved.</h4>
                           <h4 className="ui centered">Order Number {this.props.orderNumber}</h4>
                           
                       </Col>
                    </Row>

                    <Row>
                      <Col>
                           <Card>
                               <CardBody>
                                   <ListGroup>
                                       {addedItems}
                                       <ListGroupItem>Subtotal: ${this.props.subtotal} Tax: ${this.props.tax}</ListGroupItem>
                                       <ListGroupItem><h5>Total: ${this.props.total}</h5></ListGroupItem> 
                                       

                                   </ListGroup>
                               </CardBody>
                           </Card>
                        </Col>
                        <Col>
                           <Card>
                               <CardBody>
                                    <ListGroup>
                                        <ListGroupItem>Pickup name: {name}</ListGroupItem>
                                        <ListGroupItem>Order confirmation will be sent to {email}</ListGroupItem>
                                        <ListGroupItem>Phone:{phone}</ListGroupItem>
                                        <ListGroupItem>Location:{this.props.location}</ListGroupItem>
                                        <ListGroupItem>Pickup Time: Ready in 15-20 minutes</ListGroupItem>
                                    </ListGroup>
                               </CardBody>
                           </Card>
                        </Col>
                    </Row>
                </Container>
                

                
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        
        location: state.selectedLocation,
        items: state.addedItems,
        subtotal: (state.total).toFixed(2),
        tax: (state.total * 0.0825).toFixed(2),
        total: ( state.total * 0.0825 + state.total).toFixed(2),
        orderNumber: state.orderNumber
    }
  }
  
  export default connect(mapStateToProps)(Confirm)