import React from 'react';
import './styles/Sidebar.css';


const Sidebar = () => {
    return (
        <nav className="sidebar">
            <h2>General</h2>
            <ul>
                <li>Dashboard</li>
                <li>History</li>
                <li>Calendar</li>
                <li>Appointments</li>
                <li>Statistics</li>
                <li>Tests</li>
                <li>Chat</li>
                <li>Support</li>
                <li>Settings</li>
            </ul>
        </nav>
    );
};

export default Sidebar;
