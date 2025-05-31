import React from 'react';
import { healthData } from '../data/healthData';
import './styles/HealthStatusCards.css';

const HealthStatusCards = () => {
    return (
        <div className="health-status-cards">
            {healthData.map((item) => (
                <div key={item.id} className="health-card">
                    <h3>{item.name}</h3>
                    <p>Status: {item.status}</p>
                </div>
            ))}
        </div>
    );
};

export default HealthStatusCards;
