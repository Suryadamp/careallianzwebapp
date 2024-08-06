// src/components/Sidebar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>CareAlliaz</h2>
      <ul>
        <li>
      <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
              
            Product Inventory
          </NavLink>
             </li>
        <li>      <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >Shopping Cart</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
