import React from 'react';
import { appointments } from '../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './styles/UpcomingSchedule.css';

const UpcomingSchedule = () => {
    return (
        <div className="upcoming-schedule">
            <h2>The Upcoming Schedule</h2>
            {appointments.map((appointment) => (
                <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
        </div>
    );
};

export default UpcomingSchedule;
