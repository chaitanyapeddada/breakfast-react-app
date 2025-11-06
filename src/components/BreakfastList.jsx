import React from 'react';
import MenuItem from './MenuItem';
import menuItems from '../data/menuItems';
import '../styles/BreakfastList.css';

const BreakfastList = () => {
    return (
        <div className="menu-section">
            <h2>Breakfast Menu</h2>
            <div className="menu-grid">
                {menuItems.breakfast.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>

             <h2>Lunch Menu</h2>
            <div className="menu-grid">
                {menuItems.lunch.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default BreakfastList;