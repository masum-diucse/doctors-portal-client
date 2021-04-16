import React, { useEffect, useState } from 'react';
import doctorImage from '../../../images/doctor-sm.png';
import DoctorsCard from '../DoctorsCard/DoctorsCard';
// const doctorData=[
//     {
//     doctorImg: doctorImage,
//     doctorName: "Dr. Coudi",
//     doctorPhone: "+880-01866-810020"
//     },
//     {
//         doctorImg: doctorImage,
//         doctorName: "Dr. Coudi",
//         doctorPhone: "+880-01866-810020"
//     },
//     {
//         doctorImg: doctorImage,
//         doctorName: "Dr. Coudi",
//         doctorPhone: "+880-01866-810020"
//     }
// ]

const Doctors = () => {
    const [doctorData,setDoctorData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/getAllDoctors')
        .then(res=> res.json())
        .then(data=>setDoctorData(data))
    },[])
    return (
        <section>
            <div className="container">
                <div className="text-center text-uppercase">
                    <h5 className="text-primary">Our Doctors</h5>
                </div>
                <div className="card-deck mt-5">
                    {
                           doctorData.map(dd=><DoctorsCard doctor={dd}></DoctorsCard>) 
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Doctors;