import React, { Component } from 'react';

import booksData from '../data/booksData';
import Container from '../components/Container';

export default class Books extends Component {
    constructor() {
        super();
        this.state = {
            visible: true,
            data: []
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount() {
        this.setState({
            data: booksData
        })
    }

    handleToggle() {

        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        return (
            <>
                <section className={this.state.visible ? "books-container" : "books-container show"}>
                    <h1>Димитър Брацов препуска със свещения дар на спомените</h1>
                    <Container data={this.state.data} />
                </section>
                <button className="btn-primary btn" onClick={this.handleToggle}>Покажи</button>
            </>
        )
    }
}
