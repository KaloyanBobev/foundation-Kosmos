import React, { Component } from 'react';

import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
export default class Navbar extends Component {

    state = {
        isOpen: false
    }

    hadleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" >
                            <img src={logo} alt="logo fondation Cosmos" />
                        </Link>
                        <button type="button" className="nav-btn">
                            <FaAlignRight
                                className="nav-icon"
                                onClick={this.hadleToggle} />
                        </button>
                    </div>
                    <ul onClick={this.hadleToggle} className={this.state.isOpen
                        ? "nav-links show-nav"
                        : "nav-links"}>
                        <li>
                            <Link to="/" > Начало </Link>
                        </li>
                        <li>
                            <Link to="/books" >Списание "Птици в нощта" </Link>
                        </li>
                        <li>
                            <Link to="/poets" > Дружество на писателите </Link>
                        </li>
                        <li>
                            <Link to="/gallery" > Фото галерия </Link>
                        </li>
                        <li>
                            <Link to="/about" > За нас </Link>
                        </li>
                        <li>
                            <Link to="/contacts" > Контакти </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}
