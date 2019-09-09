import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    document.addEventListener('DOMContentLoaded', () => {

        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);      
        if ($navbarBurgers.length > 0) {
        
            $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
    });

    return (
        <div className="navbar">
            <div id="navLinks" className="navbar-menu">
                <NavLink exact activeClassName="is-active" className="navbar-item" to={'/'}>Users</NavLink>
                <NavLink exact activeClassName="is-active" className="navbar-item" to={'/tasks'}>Tasks</NavLink>
            </div>
            <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navLinks">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
        </div>
    )

}

export default Navbar;
