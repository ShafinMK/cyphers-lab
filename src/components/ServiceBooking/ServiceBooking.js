import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useParams } from 'react-router-dom';
import './ServiceBooking.css';

const ServiceBooking = () => {
    const [value, onChange] = useState(new Date());
    const { serviceID } = useParams();

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://shafinmk.github.io/resources-api/cyphersLab.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                // console.log(data);
            })
    }, []);

    let found = {};
    services.length ? found = services.find(service => service.id === parseInt(serviceID)) : found = {};
    // console.log(found);
    const { cost, serviceDescription, serviceInfo, serviceName, serviceThumb, serviceTime } = found;




    return (
        <div>
            <div className='container my-5'>


                <h1 className=' text-center playball-font'>{serviceName}</h1>
                <div className="row">
                    <div className="col-12 col-lg-6 p-5">

                        <h2 className='text-primary'>Intro</h2>
                        <p>{serviceInfo}</p>

                        <h2 className='text-primary'>Description</h2>
                        <p>{serviceDescription}</p>

                        <h2 className='text-primary'>Service Charge</h2>
                        <p>Price starting from (BDT) : {cost}</p>

                        <h2 className='text-primary'>Service Time (Approximate)</h2>
                        <p>{serviceTime}</p>
                    </div>
                    <div className="col-12 col-lg-6 p-5">
                        <img src={serviceThumb} className='img-fluid' alt="" />
                    </div>
                </div>
                <h1 className='text-center my-5 playball-font'>Make Appointment</h1>
                <div className='row'>
                    <div className='col-12 col-lg-6 p-5'>
                        <h2 className='text-primary'>Pre-Book to Get 4% Off!</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eos voluptatibus eaque unde. Vero officiis, inventore at praesentium id laboriosam commodi delectus optio quod odit sed voluptas itaque iste alias.</p>
                        <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#bookingConfirm">Book Service</button>

                        {/* modal start  */}
                        <div className="modal fade" id="bookingConfirm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        {/* <h5 className=" text-center">Your Appointment is Confirmed</h5> */}
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <h4 className='text-center text-success'>Booking Confirmed!</h4>
                                        <p className='text-center'>Thank's for Choosing Us</p>
                                        <img src={require('../../images/Confirmed.gif')} className='img-fluid' alt="" />
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        {/* modal end  */}
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <Calendar onChange={onChange} value={value} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBooking;