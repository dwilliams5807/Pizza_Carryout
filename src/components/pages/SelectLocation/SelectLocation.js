import React, { Component } from 'react'
import { Button, Card, CardBody, Alert } from "shards-react";
import { connect } from 'react-redux';
import { setLocation } from '../../reducers/actions/cartActions.js'
import { cartVisible } from '../../reducers/actions/cartActions.js'
import './SelectLocation.css';
import { Form } from 'react-bootstrap';

  import {

    Container,
    Row,
    Col,

  } from "shards-react";

import {
    Link
  } from "react-router-dom";



export class SelectLocation extends Component {
  constructor(props) {
    super(props);
    this.dismiss = this.dismiss.bind(this);
    this.state = { visible: true };
  }
    componentDidMount() {
        this.props.cartVisible(false); 
        
      }
    //to add the quantity
    setLocation = (event)=>{
        
        this.props.setLocation(event.target.value);

    }

    onFinish = values => {
        console.log('Received values of form: ', values);
      };

      dismiss() {
        this.setState({ visible: false });
      }

    render() {
        return (
          <div>
          <Alert dismissible={this.dismiss} open={this.state.visible}>
          <strong>Note: </strong>This ordering system is a <strong> demo. </strong> It <strong>does not accept real orders. </strong> feel free <br/> to place as many pretend orders as you would like.
          </Alert>
    
        <Container className="center">
            <Card >
                <CardBody className="masthead">
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Card>
              <CardBody>
              <Row>
                <Col>
                  <div>
                    <h1>Select a Location</h1>
                 </div>
                </Col>
              </Row>
            <Row>
                <Col>
              {/* <FormRadio value="South Austin" checked={this.props.selectedLocation === "South Austin"} onChange={() => {this.setLocation("South Austin");}}>South Austin</FormRadio>
     
              <FormRadio value="Mopac" checked={this.props.selectedLocation === "Mopac"} onChange={() => {this.setLocation("Mopac");}}>Mopac</FormRadio>
              <FormRadio value="Round Rock" checked={this.props.selectedLocation === "Round Rock"} onChange={() => {this.setLocation("Round Rock");}}>Round Rock</FormRadio> */}
                       <Form.Group controlId="locationForm.ControlSelectLocation">
                            <Form.Control as="select" onChange={ this.setLocation.bind(this)}>
                            <option value="Select Location">Select Location</option>
                            <option value="South Austin">South Austin</option>
                            <option value="North Austin">North Austin</option>
                            <option value="Round Rock">Round Rock</option>
                            </Form.Control>
                        </Form.Group>
     
                <Link to='/menu'>
                    <Button style={{ fontFamily: 'CECFont'}}>Start Order</Button>
                </Link>
                </Col>
            </Row>
        </CardBody>
            </Card>
         </Container>
         </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
    selectedLocation: state.selectedLocation
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        setLocation: (location)=>{dispatch(setLocation(location))},
        cartVisible: (visible)=>{dispatch(cartVisible(visible))},
 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectLocation)
