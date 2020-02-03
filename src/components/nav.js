import React from 'react';
import { NavLink } from 'react-router-dom'

export default class Nav extends React.Component {

    render(){
       return (
        <nav className="top">
            <ul>
                <li>
                <NavLink exact  to="/">Home</NavLink>
                </li>
                <li>
                <NavLink exact  to="/contact-us">Contact Us</NavLink>
                </li>
                <li>
                <NavLink exact  to="/faq">FAQ</NavLink>
                </li>
            </ul>
        </nav>);
    }
}