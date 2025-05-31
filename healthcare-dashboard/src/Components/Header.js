import React from 'react';
import './styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Healthcare</h1>
            <div className="header-icons">
                <div className="search-bar">Search</div>
                <div className="notification-icon">🔔</div>
                <div className="user-profile">👤 User</div>
                <button className="add-button">+</button>
            </div>
        </header>
    );
};

export default Header;
