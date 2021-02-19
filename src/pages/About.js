import React from 'react';

import booksData from '../data/booksData';
import Container from '../components/Container';
import ToggleBtn from '../components/ToggleBtn';
import img from '../images/cosmos/uchrediteli-klub-Kosmos-23-13.jpg';

export default class About extends React.Component {
    constructor() {
        super();
        this.state = {
            visible1: true,
            visible2: true,
            data: []
        }
        this.handleToggle1 = this.handleToggle1.bind(this);
        this.handleToggle2 = this.handleToggle2.bind(this);
    }

    componentDidMount() {
        this.setState({
            data: booksData
        })
    }

    handleToggle1() {
        this.setState({
            visible1: !this.state.visible1
        })
    }

    handleToggle2() {
        this.setState({
            visible2: !this.state.visible2
        })
    }
    render() {
        return (
            <>
                <section className={this.state.visible1 ? "container" : "container show"}>
                    <div>
                        <h1>Учредиха клуб “Космос” в резиденция “Змейово”</h1>
                        <a href={img} target="_blank" rel="noreferrer"><img src={img} className="img" alt="founders" /></a>
                        <Container data={this.state.data.slice(0, 7)} />
                    </div>
                </section>
                <ToggleBtn
                    handleToggle={this.handleToggle1}
                    visible={this.state.visible1} />

                <section className={this.state.visible2 ? "container" : "container show"}>
                    <div>
                        <h1> Димитър Брацов препуска със свещения дар на спомените</h1>
                        <Container data={this.state.data.slice(8, 22)} />
                    </div>
                </section>
                <ToggleBtn
                    handleToggle={this.handleToggle2}
                    visible={this.state.visible2} />
            </>
        )
    }
}
