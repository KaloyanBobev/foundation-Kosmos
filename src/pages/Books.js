import React, { Component } from 'react';

import booksData from '../data/booksData';
import Container from '../components/Container';
import ToggleBtn from '../components/ToggleBtn';

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
                <section className={this.state.visible ? "container" : "container show"}>
                    <h1>Димитър Брацов препуска със свещения дар на спомените</h1>
                    <Container data={this.state.data} />
                </section>
                <ToggleBtn
                    handleToggle={this.handleToggle}
                    visible={this.state.visible}
                />
            </>
        )
    }
}
