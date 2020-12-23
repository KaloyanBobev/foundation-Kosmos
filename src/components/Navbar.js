import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <>
                <Link to="/" > Начало </Link>
                <Link to="/about" > За нас </Link>
                <Link to="/contacts" > Контакти </Link>
            </>
        )
    }
}
