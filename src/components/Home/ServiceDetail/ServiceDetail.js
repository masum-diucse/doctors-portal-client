import React from 'react';

const ServiceDetail = ({service}) => {
    const {image,name,description}=service;
    return (
        <div className="col-md-4 text-center ">
            <img style={{height:'50px'}} src={image} alt=""/>
            <h5 className="mt-3 mb-3">{name}</h5>
            <p className="text-secondary">{description}</p>
        </div>
    );
};

export default ServiceDetail;