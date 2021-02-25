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
        this.updateField = this.updateField.bind(this);
    }

    updateField(field, value) {
        this.setState({ [field]: value });
    }

    render() {
        return (
            <div>
                <Field onChange={(event) => this.updateField('name', event.target.value)}
                    value={this.state.name} />
                <Field onChange={(event) => this.updateField('email', event.target.value)}
                    value={this.state.email} />
                <Field
                    onChange={(event) => this.updateField('message', event.target.value)}
                    textarea={true}
                    value={this.state.message} />
                <Button

                    email="kaloyanbodev@gmail.com"
                    formValues={this.state}
                />

            </div>
        )
    }
}