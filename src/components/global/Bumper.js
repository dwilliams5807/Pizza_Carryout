import React, { Component } from 'react'
import "./Bumper.css";


export class Bumper extends Component {
    render() {
        return (
            <div className="bumper">
                {this.props.children}
            </div>
        )
    }
}

export default Bumper
