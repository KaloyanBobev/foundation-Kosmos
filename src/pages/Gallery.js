import React, { Component } from 'react';
import Image from '../components/Image.js';
import imageData from '../data/imageData';
export default class Gallery extends Component {
    render() {
        return (
            <section className="image-container">
                <h1>Фото галерия</h1>
                <Image data={imageData} />

            </section>
        )
    }
}
