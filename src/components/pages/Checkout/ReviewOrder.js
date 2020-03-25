import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';
import { connect} from 'react-redux'


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

        return(
            <div>
                <h1 className="ui centered">Review Your Order</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Pickup name: {name}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>Order confirmation will be sent to {email}</List.Content>
                    </List.Item>

                    <List.Item>
                        <List.Icon name='phone' />
                        <List.Content>Phone:{phone}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='phone' />
                        <List.Content></List.Content>
                    </List.Item>
     
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Confirm Order</Button>
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