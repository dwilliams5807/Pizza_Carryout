import React, { Component } from 'react';

import { connect} from 'react-redux'
import { ListGroup, ListGroupItem, ListGroupItemText, Button, Container, Row, Col, Card, CardBody } from "shards-react";


class ReviewOrder extends Component{
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
                                  {item.quantity} X {item.title} ${item.price * item.quantity}
                              </ListGroupItemText>
                          </ListGroupItem>
                      
                                             
                    )
                })
            ):
            (
                <p>There are no items in your order.</p>
             )
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                           <h1 className="ui centered">Review Your Order</h1>
                           <Button onClick={this.back}>Back</Button>
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
                

                
                <Button block onClick={this.saveAndContinue}>Confirm Order</Button>
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
    }
  }
  
  export default connect(mapStateToProps)(ReviewOrder)