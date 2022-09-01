import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import img from '../images/cosmos/korica-ptici-v-noshta1-190x122.jpg';
export default class Banner extends Component {
    render() {
        return (
            <>
                <div className="banner-container">
                    <div className="banner-center">
                        <div className="banner-text banner-size">
                            <Link className="btn-primary" to="/">File 1</Link>
                            <Link className="btn-primary" to="/">File 2</Link>
                            <Link className="btn-primary" to="/">File 3</Link>
                        </div>
                    </div>


                    <div className="banner-size">
                        <Link to="/books">
                            <img src={img} alt="first page" />
                        </Link>
                    </div>

                </div>

            </>
        )
    }
}
