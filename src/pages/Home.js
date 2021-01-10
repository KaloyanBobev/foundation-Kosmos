import React, { Component } from 'react';

import homeData from '../data/homeData';
import Container from '../components/Container';
import ToggleBtn from '../components/ToggleBtn';
//import Client from '../contentful';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            visible: true,
            data: []
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    // getData = async () => {
    //     try {
    //         Client.getEntries({
    //             content_type: "cosmosApp",
    //             order: 'sys.createdAt'
    //         }).then((response) => {
    //             this.setState({
    //                 data: response.items
    //             })
    //         }
    //         )
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    componentDidMount() {

        // this.getData();
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
                <section className={this.state.visible ? "container" : "container show"}>
                    <h1>Учредиха клуб “Космос” в резиденция “Змейово”</h1>
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


