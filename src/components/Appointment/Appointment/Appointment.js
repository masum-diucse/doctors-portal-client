import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import TopBar from '../../Shared/TopBar/TopBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date());    
    const handleDateChange=date=>{
        setSelectedDate(date);
    }
    return (
        <div>
            <TopBar></TopBar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;