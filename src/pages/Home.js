import React, { Component } from 'react'

import Hero from '../components/Hero';
import image from '../images/Cosmos-hero-1.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Hero image={image} />
            </div>
        )
    }
}
