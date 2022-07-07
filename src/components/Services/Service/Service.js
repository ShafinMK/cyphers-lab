import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, serviceName, serviceInfo, serviceDescription, serviceThumb, serviceTime, cost } = service;
    const url = `/services/servicebooking/${id}`
    return (
        <div className=''  style={{height:'450px'}}>
             <Link to={url} style={{textDecoration:'none'}}>
            <div className="card h-100 text-center white-card">
                <img src={serviceThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                   <h4 className="card-title meridenda-font" style={{height:''}}>{serviceName}</h4>
                    {/* <h3 className="card-title " style={{height:''}}>{serviceName}</h3> */}
                    <p className="card-text text-dark" style={{height:''}}>{serviceInfo.slice(0, 100).concat('...')}</p>

                </div>
                <div className=' px-3'>
                    <h5 className='dark-green'>Price starting from (BDT) <br /> {cost}</h5>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Service;