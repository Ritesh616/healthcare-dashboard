import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import DashboardMainContent from './DashboardMainContent';
import './styles/App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="main-content">
                <Sidebar />
                <DashboardMainContent />
            </div>
        </div>
    );
};

export default App;
