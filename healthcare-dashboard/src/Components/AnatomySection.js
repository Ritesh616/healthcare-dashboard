import React from 'react';
import { healthData } from '../data/healthData';
import './styles/AnatomySection.css';

const AnatomySection = () => {
    return (
        <div className="anatomy-section">
            <img src="anatomy-illustration.png" alt="Anatomy" />
            {healthData.map((item) => (
                <div key={item.id} className={`health-indicator ${item.color}`}>
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
};

export default AnatomySection;
