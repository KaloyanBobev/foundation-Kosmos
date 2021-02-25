import React, { Component } from 'react';
import Field from './Field';
import Button from './Button';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render() {
        return (
            <div>
                <Field onChange={ } value={this.state.name} />
                <Field onChange={ } value={this.state.email} />
                <Field textarea onChange={ } value={this.state.message} />
                <Button formValues={this.state} email="kaloyanbodev@gmail.com" />

            </div>
        )
    }
}