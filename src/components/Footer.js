import React, { Component } from 'react'

import SocialFollow from './SocialFollow';

export default class Footer extends Component {
    render() {
        let dateNow = new Date;
        return (
            <section className="footer-container">
                <SocialFollow />
                <h4>Всички права запазени. CopyRight ©  {dateNow.getFullYear()} година</h4>

            </section>
        )
    }
}
