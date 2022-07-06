import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {

    const[services, setServices] = useState([]);
    useEffect(() =>{
        fetch('https://shafinmk.github.io/resources-api/cyphersLab.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


    return (
        <div className='container my-5'>
            
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    services.map(service => <Service key={service.id} className='' service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;