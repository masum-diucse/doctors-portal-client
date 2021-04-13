import React from 'react';
import './InfoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const InfoCard = ({ info }) => {
    const { title, description, icon, background } = info;
    return (
        <div className="col-md-4 text-white info-card" >
            <div className="d-flex info-container justify-content-center align-items-center" style={{ backgroundColor: background}}>
                <div>
                    <FontAwesomeIcon className="info-icon mr-3" icon={icon} />
                </div>
                <div>
                    <h6>{title}</h6>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;