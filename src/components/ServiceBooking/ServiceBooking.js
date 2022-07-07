import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ServiceBooking.css';

const ServiceBooking = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div className='container my-5'>
                

                <h1 className=' text-center'>Service Name</h1>
                <div className="row">
                    <div className="col-12 col-lg-6 p-5">

                        <h2>Intro</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum provident libero assumenda saepe soluta praesentium architecto est quas explicabo quod?</p>

                        <h2>Description</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deserunt consectetur eum blanditiis at quod aut adipisci magni, rerum minima iste perspiciatis autem quisquam officia, quae quam error voluptate provident, est mollitia debitis quidem atque? Eligendi qui quos placeat cupiditate!</p>

                        <h2>Service Charge</h2>
                        <p>2300 tk</p>

                        <h4>Service Time (Approximate)</h4>
                        <p>2 hours</p>
                    </div>
                    <div className="col-12 col-lg-6 p-5">
                        <img src="https://i.ibb.co/yNzPDh9/laptopfix.jpg" className='img-fluid' alt="" />
                    </div>
                </div>
                <h1 className='text-center my-5'>Make Appointment</h1>
                <div className='row'>
                    <div className='col-12 col-lg-6 p-5'>
                        <h3>Pre-Book to Get 4% Off!</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eos voluptatibus eaque unde. Vero officiis, inventore at praesentium id laboriosam commodi delectus optio quod odit sed voluptas itaque iste alias.</p>
                        <button className='btn btn-danger'>Book Service</button>
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