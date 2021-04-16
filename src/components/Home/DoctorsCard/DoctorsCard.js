import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const DoctorsCard = ({ doctor }) => {
    const { name, image } = doctor;
    const doctorPhone = "+880-01866-810020";
    return (
        <div className="card  shadow-sm border-0 bg-transparent">
            <div className="d-flex justify-content-center">
                <img style={{ height: '100px', width: '100px' }} src={`data:image/png;base64,${image.img}`} />
                {/* <img className="card-img-top" src={`http://localhost:5000/${img}`} alt="" /> */}
                <div className="card-body text-center">
                    <h5>{name}</h5>
                    <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt} />{doctorPhone}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorsCard;