import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
export default class Navbar extends Component {

    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
        console.log(this.state.isOpen);
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" className="logo">Ф о н д а ц и я    К о с м о с</Link>
                        <button type="button" className="nav-btn">
                            <FaAlignRight
                                className="nav-icon"
                                onClick={this.hadleToggle} />
                        </button>
                    </div>
                    <ul className={this.state.isOpen
                        ? "nav-links show-nav"
                        : "nav-links"}>
                        <li>
                            <Link to="/" > Начало </Link>
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