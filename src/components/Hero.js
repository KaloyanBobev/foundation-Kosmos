import React, { Component } from 'react';



export default class Hero extends Component {
    constructor({ image }) {
        super();
    }
    render() {
        return (
            <div>
                <img src={props.image} alt="cosmos" />
                <h1>Text</h1>
            </div>
        )
    }
}
