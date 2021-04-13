import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const DoctorsCard = ({ doctor }) => {
    const { doctorImg, doctorName, doctorPhone } = doctor;
    return (
        <div className="card shadow-sm border-0 bg-transparent">
            <img className="card-img-top" src={doctorImg} alt="" />
            <div className="card-body text-center">
                <h5>{doctorName}</h5>
                <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt} />{doctorPhone}</p>
            </div>
        </div>
    );
};

export default DoctorsCard;