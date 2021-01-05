import React, { Component } from 'react';

import homeData from '../data/homeData';
import HomeContainer from '../components/HomeContainer';
export default class Home extends Component {
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
            data: homeData
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
                <section className={this.state.visible ? "home-container" : "home-container show"}>
                    <h1>Учредиха клуб “Космос” в резиденция “Змейово”</h1>
                    <HomeContainer data={this.state.data} />
                </section>
                <button className="btn-primary btn" onClick={this.handleToggle}>повече</button>
            </>
        )
    }
}


