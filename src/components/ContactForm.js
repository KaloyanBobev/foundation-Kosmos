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
            <div className="contact-form-container">
                <h2>Може да се свържете с нас и чрез формата за контакти</h2>
                <Field
                    placeholder={"Вашето име"}
                    class={"field"}
                    label={"Name: "}
                    onChange={(event) => this.updateField('name', event.target.value)}
                    value={this.state.name} />
                <Field
                    placeholder={"Вашия имейл"}
                    class={"field"}
                    label={"Email: "}
                    onChange={(event) => this.updateField('email', event.target.value)}
                    value={this.state.email} />
                <Field
                    placeholder={"Запишете вашето съобщение"}
                    class={"message"}
                    label={"Message: "}
                    onChange={(event) => this.updateField('message', event.target.value)}
                    textarea={true}
                    value={this.state.message}
                    required={"required"}
                />
                <Button
                    email="canoncop2@abv.bg"
                    obfuscate={true}
                    formValues={this.state}
                />

            </div>
        )
    }
}