import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { id, serviceName, serviceInfo, serviceDescription, serviceThumb, serviceTime, cost } = service;
    return (
        <div className=''  style={{height:'450px'}}>
            <div className="card h-100 text-center border-0">
                <img src={serviceThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title " style={{height:''}}>{serviceName}</h3>
                    <p className="card-text " style={{height:''}}>{serviceInfo.slice(0, 100).concat('...')}</p>

                </div>
                <div className=' px-3'>
                    <h5 className='dark-green'>Price starting from (BDT) <br /> {cost}</h5>
                </div>
            </div>

        </div>
    );
};

export default Service;