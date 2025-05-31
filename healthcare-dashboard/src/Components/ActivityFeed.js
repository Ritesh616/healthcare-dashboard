import React from 'react';
import './styles/ActivityFeed.css';

const ActivityFeed = () => {
    return (
        <div className="activity-feed">
            <h2>Activity</h2>
            <p>3 appointments this week</p>
            {/* Static bar chart representation */}
            <div className="bar-chart">
                <div className="bar" style={{ height: '50%' }}></div>
                <div className="bar" style={{ height: '70%' }}></div>
                <div className="bar" style={{ height: '30%' }}></div>
            </div>
        </div>
    );
};

export default ActivityFeed;
