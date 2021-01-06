import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import img from '../images/cosmos/korica-ptici-v-noshta1-190x122.jpg';
export default class Banner extends Component {
    render() {
        return (
            <>
                <div className="banner-container">
                    <div className="banner-center">
                        <div className="banner-text">
                            <h1>Фондация Космос</h1>
                            <h3>Димитър Брацов</h3>
                            <Link className="btn-primary" to="/">Начало</Link>
                        </div>

                    </div>
                    <img src={img} alt="first page" />
                </div>

            </>
        )
    }
}
