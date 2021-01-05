import React, { Component } from 'react';

import Data from '../data/data';
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: Data
        }
    }

    render() {
        return (
            <section className="home-container">
                <h1>Учредиха клуб “Космос” в резиденция “Змейово”</h1>
                {this.state.data.map((item, i) => {
                    return (
                        <p key={item.sys.id}>
                            {item.fields.text}
                        </p>
                    )
                })}
            </section>
        )
    }
}
