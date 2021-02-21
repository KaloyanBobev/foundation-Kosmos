import React, { Component } from 'react'

import img from '../images/esteblishment.jpg';
import poetsData from '../data/poetsData';
import Container from '../components/Container';
import ToggleBtn from '../components/ToggleBtn';

export default class Poets extends Component {
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
            data: poetsData
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
                <section className="poets-container">
                    <h1>Учредяване на дружеството на писателите</h1>
                    <a href={img} className="image-container">
                        <img src={img} alt="esteblishment" ></img>
                    </a>
                    <a href="https://www.facebook.com/groups/487029208877556"
                        className="facebook-link">
                        Facebook страница: Приятели на списание "Птици в нощта"
                    </a>
                </section>
                <section className={this.state.visible ? "container" : "container show"}>
                    <h1>ДРУЖЕСТВО НА ПИСАТЕЛИТЕ В СТАРА ЗАГОРА</h1>
                    <h1>КРАТКА ИСТОРИЧЕСКА СПРАВКА:</h1>
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
