import React from 'react';

import { Link } from 'react-router-dom';
import img from '../images/not-found-image.jpg';

export default function NotFound() {
    return (
        <section className="not-found">
            <h1>Whoops! </h1>
            <h3>404 Page Not Found</h3>
            <p>Look like this page lost in open cosmos</p>
            <img src={img} alt="not found" />
            <p>Try our <Link to="/" >homepage</Link> to back to planet Earth</p>
        </section>
    )
}
