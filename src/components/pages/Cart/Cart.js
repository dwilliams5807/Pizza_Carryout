import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from '../../reducers/actions/cartActions'

import {
    Card,
    CardTitle,
    CardImg,
    CardHeader,
    Button,
    Container,
    Row,
    Col,
    CardBody,
    ListGroup,
    ListGroupItem,
    ListGroupItemText
  } from "shards-react";
  
class Cart extends Component{
   //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(

                        
                          <ListGroupItem className="" key={item.id}>
                              <ListGroupItemText>
                                  {item.quantity} X {item.title} @ ${item.price}/ Ea
                              </ListGroupItemText>
                             <ListGroupItemText>
                              <Link to='/cart'>
                              <Button onClick={()=>{this.handleAddQuantity(item.id)}}>+</Button>
                              <Button onClick={()=>{this.handleSubtractQuantity(item.id)}}>-</Button>
                              </Link>
                              </ListGroupItemText>
                    
                  
                          </ListGroupItem>
                      
                                             
                    )
                })
            ):

             (
                <p>The cart is empty. Click on Menu to order something.</p>
             )
       return(
            <Container>
                 <h5>Your Order:</h5>
                 <ListGroup>
                    
                    
                        {addedItems}
                     
               
                </ListGroup>
                  
                  <p>Subtotal: ${this.props.subtotal}</p>
                  <p>Tax: ${this.props.tax}</p>
                  <h5>Total: ${this.props.total}</h5>
                <Button>
                    Checkout
                </Button>

            </Container>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        subtotal: (state.total).toFixed(2),
        tax: (state.total * 0.0825).toFixed(2),
        total: ( state.total * 0.0825 + state.total).toFixed(2),
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)