import React from 'react';
import './styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ appointment }) => {
    return (
        <div className="simple-appointment-card">
            <h3>{appointment.title}</h3>
            <p>Time: {appointment.time}</p>
        </div>
    );
};

export default SimpleAppointmentCard;
