import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/">
                <button className="navbar__btn btn-home">HOME</button>
            </NavLink>
            <NavLink to="/contact">
                <button className="navbar__tbn btn-contact">CONTACT</button>
            </NavLink>
        </div>
    );
}

export default Navbar;