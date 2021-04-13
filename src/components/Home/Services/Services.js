import React from 'react';
import fluoride from '../../../images/fluride_treatment.png';
import cavity from '../../../images/cavity_filling.png';
import whitening from '../../../images/teath_whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const serviceData = [
    {
        image: fluoride,
        name: 'Fluoride Treatment',
        description: "Lorem ipsum dolor lorem ipsum dolor dolor lorem ipsum dolor Lorem ipsum dolor lorem ipsum dolor"
    }, 
    {
        image: cavity,
        name: 'Cavity Filling',
        description: "Lorem ipsum dolor lorem ipsum dolor dolor lorem ipsum dolor Lorem ipsum dolor lorem ipsum dolor"
    },
    {
        image: whitening,
        name: 'Teath Whitening',
        description: "Lorem ipsum dolor lorem ipsum dolor dolor lorem ipsum dolor Lorem ipsum dolor lorem ipsum dolor"
    }
]

const Services = () => {
    return (
        <section >
            <div className="text-center mt-5">
                <h5 style={{ color: '#1cc7c1' }}>OUR SERVICES</h5>
                <h2 style={{ color: '#3a4256' }}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(s=><ServiceDetail service={s}></ServiceDetail>)
                }   
            </div>         
        </div>
        </section>
    );
};

export default Services;