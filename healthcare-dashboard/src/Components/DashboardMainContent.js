import React from 'react';
import DashboardOverview from './DashboardOverview';
import './styles/DashboardMainContent.css';

const DashboardMainContent = () => {
    return (
        <main className="dashboard-main-content">
            <DashboardOverview />
        </main>
    );
};

export default DashboardMainContent;
