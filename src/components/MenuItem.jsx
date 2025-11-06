import React from 'react';
import '../styles/MenuItem.css';

const MenuItem = ({ item }) => {
  return (
    <div className="menu-card">
      <div className="menu-card-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="menu-card-content">
        <h3 className="menu-item-name">{item.name}</h3>
        <p className="menu-item-description">{item.description}</p>
        <p className="menu-item-price">{item.price}</p>
      </div>
    </div>
  );
};

export default MenuItem;