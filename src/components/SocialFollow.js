import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
        <div className="social-container">
            <h3>Social Follow</h3>
            <a href="https://www.youtube.com/"
                className="youtube social"
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/groups/487029208877556/"
                className="facebook social"
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/"
                className="twitter social"
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/"
                className="instagram social"
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    )
}
