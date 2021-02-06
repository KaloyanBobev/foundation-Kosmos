import React from 'react';

import booksData from '../data/booksData';
import Container from '../components/Container';
import ToggleBtn from '../components/ToggleBtn';
import img from '../images/cosmos/uchrediteli-klub-Kosmos-23-13.jpg';

export default class About extends React.Component {
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
                    <div>
                        <h1>Учредиха клуб “Космос” в резиденция “Змейово”</h1>
                        <a href={img} target="_blank" rel="noreferrer"><img src={img} className="img" alt="founders" /></a>
                        <Container data={this.state.data} />
                    </div>
                </section>
                <ToggleBtn
                    handleToggle={this.handleToggle}
                    visible={this.state.visible}
                />
            </>
        )
    }
}
