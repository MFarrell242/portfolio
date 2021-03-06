import React from 'react';
import "./navStyle.css";

export default function Nav() {
    return(
        <nav className="navBar">
            <h2 className="siteName">Michael Farrell</h2><br/>
            <a className="navLink" href="/">Home</a>
            <a className="navLink" href="/Portfolio">Portfolio</a>
            <a className="navLink" href="/Contact">Contact</a>
        </nav>
    );
}