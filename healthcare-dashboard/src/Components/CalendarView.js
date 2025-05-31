import React from 'react';
import { appointments } from '../data/appointments';
import './styles/CalendarView.css';

const CalendarView = () => {
    return (
        <div className="calendar-view">
            <h2>October 2021</h2>
            <div className="calendar-grid">
                {/* Render calendar days and appointments here */}
                {appointments.map((appointment) => (
                    <div key={appointment.id} className="calendar-day">
                        <span>{appointment.time}</span>
                        <p>{appointment.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarView;
