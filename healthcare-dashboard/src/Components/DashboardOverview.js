import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import './styles/DashboardOverview.css';

const DashboardOverview = () => {
    return (
        <div className="dashboard-overview">
            <AnatomySection />
            <CalendarView />
            <UpcomingSchedule />
            <ActivityFeed />
        </div>
    );
};

export default DashboardOverview;
