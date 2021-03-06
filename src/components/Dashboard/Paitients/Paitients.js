import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../Sidebar/Sidebar';

const Paitients = () => {
    const [patients,setPatients]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/getAllPaitients')
        .then(res => res.json())
        .then(data=>setPatients(data))
    },[])
    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <AppointmentDataTable patients={patients} />
            </div>
        </div>
    );
};

export default Paitients;