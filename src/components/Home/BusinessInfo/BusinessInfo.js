import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

import { faClock,faMapMarkerAlt,faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
const infosData=[
    {
        title:"Opening Hours",
        description: "Lorem ipsum dolor sit amet",
        icon:faClock,
        background: '#1cc7c1',
        
    },
    {
        title:"Visit our location",
        description: "Brooklyn,NY 10036,United States",
        icon:faMapMarkerAlt,
        background: '#3a4256'
    },
    {
        title:"Contact us now",
        description: "+000123456789",
        icon:faPhoneAlt,
        background: '#1cc7c1'
    },
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(i=><InfoCard info={i}></InfoCard>)
                }   
            </div>         
        </section>
    );
};

export default BusinessInfo;