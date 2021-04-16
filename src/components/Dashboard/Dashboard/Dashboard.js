import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        const formattedDate = date.toDateString();
        setSelectedDate(date);
    }

    useEffect(() => {
        const formattedDate = selectedDate.toDateString();
        fetch('http://localhost:5000/getAppointmentList', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ formattedDate,email: loggedInUser.email})
        }).then(res => res.json())
            .then(data => setAppointments(data));
    }, [selectedDate])

    return (
        <div>
            <div className="dashboard-container container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-5 d-flex align-items-center justify-content-center">
                    <Calendar className="my-5" onChange={handleDateChange} value={new Date()} />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;