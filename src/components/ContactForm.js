import axios from 'axios';
import React, { Component } from 'react'

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }

        this.submitEmail = this.submitEmail.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onMsgChange = this.onMsgChange.bind(this);
    }




    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onSubjectChange(event) {
        this.setState({ subject: event.target.value })
    }

    onMsgChange(event) {
        this.setState({ message: event.target.value })
    }

    submitEmail(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    render() {
        return (
            <section className="contact-form-container">
                <p>Може да се свържете с нас  и с контактната форма</p>
                <form id="contact-form" onSubmit={this.submitEmail} method="POST">
                    <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        required value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        required value={this.state.eamil}
                        onChange={this.onEmailChange}
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        id="subject"
                        required value={this.state.subject}
                        onChange={this.onSubjectChange}
                    />
                    <textarea
                        placeholder="Message"
                        id="message"
                        row="1"
                        required value={this.state.message}
                        onChange={this.onMsgChange}
                    />
                    <button type="submit" className="btn btn-primary">Изпрати</button>
                </form>
            </section>
        )
    }
}
