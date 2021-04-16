import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentHeader.css';
const AppointmentHeader = ({handleDateChange}) => {    
    return (
        <main className="appointment-header-container">
            <div className="container">
                <div style={{ height: '600px' }} className="row d-flex align-items-center">
                    <div className="col-md-4 ">
                        <h1 style={{ color: '#3a4256' }}>Appointment</h1>
                        <Calendar onChange={handleDateChange} value={new Date()}/>
                    </div>
                    <div className="col-md-8 d-none d-md-block">
                        <img className="img-fluid" src={chair} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AppointmentHeader;