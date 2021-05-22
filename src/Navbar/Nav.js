import React from 'react';
import './Nav.css';
import logo from "../assets/logo .png"
const Nav = () => {
    return (
        <div className="Nav-cont">
            <div className="Nav-left">
                <img src={logo} alt="logo" className="logo" />
                <p className="logo-text">Flash Type</p>
            </div>
            <div className="Nav-right">
                <a target="_blank" className="Nav-link" rel="noreferrer" href="https://github.com/vighnesh777?tab=repositories">
                    REPO
                </a>
            </div>

        </div>
    )
}
export default Nav;