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
            <div className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" className="logo"><strong>Ф о н д а ц и я    К о с м о с </strong></Link>
                        <Link to="/" > Начало </Link>
                        <Link to="/about" > За нас </Link>
                        <Link to="/contacts" > Контакти </Link>
                    </div>
                </div>
            </div>
        )
    }
}
