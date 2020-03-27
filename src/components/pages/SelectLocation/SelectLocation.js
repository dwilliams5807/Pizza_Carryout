import React, { Component } from 'react'
import { FormSelect, FormRadio, Button } from "shards-react";
import { connect } from 'react-redux';
import { setLocation } from '../../reducers/actions/cartActions.js'
import { cartVisible } from '../../reducers/actions/cartActions.js'

import {
    Form,
    Select,
  } from 'antd';


import Menu from '../Menu/Menu'
import {
    Link
  } from "react-router-dom";


export class SelectLocation extends Component {
    componentDidMount() {
        this.props.cartVisible(false); 
        
      }
    //to add the quantity
    setLocation = (location)=>{
        this.props.setLocation(location);
        return (
            <Menu/>
        )
    }

    onFinish = values => {
        console.log('Received values of form: ', values);
      };

    render() {
        return (
            <div>
                <h1>Select a Location</h1>

                {/* <Form
                    name="validate_other"
                    onFinish={onFinish}
                    initialValues={{
                        ['input-number']: 3,
                        ['checkbox-group']: ['A', 'B'],
                        rate: 3.5,
                    }}>


                </Form> */}
         
       
              <FormRadio value="South Austin" checked={this.props.selectedLocation === "South Austin"} onChange={() => {this.setLocation("South Austin");}}>South Austin</FormRadio>
     
              <FormRadio value="Mopac" checked={this.props.selectedLocation === "Mopac"} onChange={() => {this.setLocation("Mopac");}}>Mopac</FormRadio>
              <FormRadio value="Round Rock" checked={this.props.selectedLocation === "Round Rock"} onChange={() => {this.setLocation("Round Rock");}}>Round Rock</FormRadio>
     
                <Link to='/menu'>
                    <Button>Continue</Button>
                </Link>
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
