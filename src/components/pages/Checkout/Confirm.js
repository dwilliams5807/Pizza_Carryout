import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Confirm extends Component{


    render(){
        const {values: { name, email, phone }} = this.props;

        return(
            <div>
                <h1 className="ui centered">Your Order Has Been Placed!</h1>
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
                        <List.Content>Phone: {phone}</List.Content>
                    </List.Item>
     
                </List>

            </div>
        )
    }
}

export default Confirm;