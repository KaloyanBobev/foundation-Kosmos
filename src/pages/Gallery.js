import React, { Component } from 'react';

import img1 from '../images/cosmos/130450932_110225667612487_2397097314206639749_o.jpg';
import img2 from '../images/cosmos/Dimitar-Bracov.jpg';
import img3 from '../images/cosmos/hristo-tanev-01-07-16-4.jpg';
import img4 from '../images/cosmos/Jordan-Atanasov1.jpg';
import img5 from '../images/cosmos/korica-ptici-v-noshta1-190x122.jpg';
import img6 from '../images/cosmos/Liliev-konkurs-05-25-15-190x122.jpg';
import img7 from '../images/cosmos/uchrediteli-klub-Kosmos-23-13.jpg';


export default class Gallery extends Component {
    render() {
        return (
            <section className="image-container">
                <h1>Фото галерия</h1>
                <a href={img4}
                    target="_blank" rel="noreferrer">
                    <img src={img4} alt="cosmos" />
                </a>
                <a href={img2}
                    target="_blank" rel="noreferrer">
                    <img src={img2} alt="cosmos" />
                </a>
                <a href={img5} target="_blank" rel="noreferrer"><img src={img5} alt="cosmos" /></a>
                <a href={img6} target="_blank" rel="noreferrer"><img src={img6} alt="cosmos" /></a>
                <a href={img3} target="_blank" rel="noreferrer"><img src={img3} alt="cosmos" /></a>
                <a href={img7} target="_blank" rel="noreferrer"><img src={img7} alt="cosmos" /></a>
                <a href={img1} target="_blank" rel="noreferrer"><img src={img1} alt="cosmos" /></a>
            </section>
        )
    }
}
