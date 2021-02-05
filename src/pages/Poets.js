import React, { Component } from 'react'

import img from '../images/esteblishment.jpg';

export default class Poets extends Component {
    render() {
        return (
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
        )
    }
}
