import React from 'react';
import { Link } from "react-router-dom";
import './index.css'

const Header = () => (
    <nav className="navbar">
        <ul className="nav-menu">
            <li>
                <Link className="heading" to="/">AMRUTAM</Link>
            </li>
            <div className="nav-links">
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/finddoctors">Find Doctors</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/about">About Us</Link>
                </li>
            </div>
            <div className="nav-buttons">
                <li>
                    <button className="login-but">Login</button>
                </li>
                <li>
                    <button className="signup-but">Sign-up</button>
                </li>
            </div>
        </ul>
    </nav>
);

export default Header;
