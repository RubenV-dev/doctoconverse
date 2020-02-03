import React from 'react';
import { NavLink } from 'react-router-dom'

export default class Sidebar extends React.Component {

    render(){
       return (
        <div id="outer-sidebar">
        <input type="checkbox" id="slide" name="" value="" />
        <div className="side-container">
        <label htmlFor="slide" className="toggle">☰</label>
        <aside className="sidebar">
           <ul>
               <li>
               <NavLink exact  to="/create-issue">Create an Issue</NavLink>
               </li>
               <li>
               <NavLink exact  to="/">Make an Appointment</NavLink>
               </li>
               <li>
               <NavLink exact  to="/provider-contact">Provider Contact List</NavLink>
               </li>
               <li>
               <NavLink exact  to="/">Change Provider</NavLink>
               </li>
           </ul>
        </aside>
        </div>
        </div>
        );
    }
}