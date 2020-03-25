import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { ListGroup, ListGroupItem, ListGroupItemText, Button, Container, Row, Col, Card, CardBody } from "shards-react";


class OrderDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Container>
                <Row>
                    <Col>
                       <Card>
                           <CardBody>
                                <Form >
                                    <h1 className="ui centered">Pickup Details</h1>
                                    
                                    <Form.Field>
                                        <label>Name </label>
                                        <input
                                        placeholder='Name'
                                        onChange={this.props.handleChange('name')}
                                        defaultValue={values.name}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Email Address </label>
                                        <input
                                        type='email'
                                        placeholder='Email Address'
                                        onChange={this.props.handleChange('email')}
                                        defaultValue={values.email}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Phone Number </label>
                                        <input
                                        placeholder='Phone Number'
                                        onChange={this.props.handleChange('phone')}
                                        defaultValue={values.phone}
                                        />
                                    </Form.Field>
                                    <Button onClick={this.saveAndContinue}>Continue </Button>
                                </Form>
                          </CardBody>
                      </Card>
                    </Col>
                </Row>
            </Container>
   
        )
    }
}

export default OrderDetails;