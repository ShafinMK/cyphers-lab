import React from 'react';
import Team from '../Home/Team/Team';

const About = () => {
    return (
        <div>
            <div className='container my-5'>

                <h1 className='text-center my- 5 py-5 playball-font'>About Us</h1>
                <div className="row align-items-center">
                    <div className="col-12 col-lg-7 p-5 ">
                        <div>
                            <h1 className='mb-4 playball-font'>We Care About Your Computer</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, accusamus! Sed consectetur non accusamus temporibus omnis. Qui, quasi pariatur! Nesciunt magnam nulla repellendus?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, id?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus, magni cupiditate pariatur expedita amet excepturi eum animi unde earum itaque nam neque eos inventore ducimus nisi doloremque nulla ipsum?</p>
                        </div>
                    </div>

                    <div className='col-12 col-lg-5 p-5'>
                        <img src={require('.././../images/aboutbanner.jpg')} className='img-fluid' alt="" />
                    </div>
                </div>



            </div>
            <div className="my-5">
                <Team></Team>
            </div>
        </div>
    );
};

export default About;