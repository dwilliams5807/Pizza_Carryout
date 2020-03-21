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
    CardBody
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

                        
                          <Col className="">
                             <Card classname="mt-2 mb-2 cart-col" style={{ maxWidth: "300px" }} key={item.id}>
                              <CardImg style={{height: "100px", width: "200px"}} src={item.img} />
                              <CardBody>
                              <CardTitle>{item.title}</CardTitle>
                              <p><b>Price: ${item.price}</b></p>
                              <p><b>Quantity: {item.quantity}</b></p>
                              <Link to='/cart'>
                              <Button onClick={()=>{this.handleAddQuantity(item.id)}}>+</Button>
                              <Button onClick={()=>{this.handleSubtractQuantity(item.id)}}>-</Button>
                              </Link>
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
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)