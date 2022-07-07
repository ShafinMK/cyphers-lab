import React, { useEffect, useState } from 'react';
import Slider from 'react-slick/lib/slider';
import Member from './Member';

const Team = () => {

    // https://shafinmk.github.io/resources-api/techExpert.json 

    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('https://shafinmk.github.io/resources-api/techExpert.json ')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };


    return (
        <div className='bg-dark py-5 vh-100'>

            <div className='container'>
                <div className='text-center text-white py-lg-5'>
                    <h1 className='playball-font'>Meet Our Team</h1>
                    <p className='pt-3'>All our technicians are fully qualified and licensed. Moreover, they <br /> are incredibly skillful and proficient in various aspects of computer <br /> repair.</p>
                </div>

                <div className='px-3'>
                    <Slider {...settings}>

                        {
                            members.map(member =>
                                <div className='p-3 ' key={member.id}>
                                    <Member member={member}></Member>
                                </div>)
                        }

                    </Slider>
                </div>
            </div>

        </div>
    );
};

export default Team;