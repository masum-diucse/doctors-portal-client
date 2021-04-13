import React from 'react';

const TestimonialCard = ({testimonial}) => {
    const {quote,name,from,img}=testimonial;
    return (
        <div className="card shadow-sm border-0 bg-transparent">
           <div className="card-body">
                <p className="text-justify card-text">{quote}</p>
           </div>
           <div className="card-footer bg-transparent border-0 d-flex align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p>{from}</p>
                </div>
           </div>
        </div>
    );
};

export default TestimonialCard;