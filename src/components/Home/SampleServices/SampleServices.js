import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Service from '../../Services/Service/Service';
import './SampleService.css';


const SampleServices = () => {
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
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://shafinmk.github.io/resources-api/cyphersLab.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div className='service-bg py-5'>
      {/*  */}
      < div className='container ' >
        {/* <h2>Pause On Hover</h2> */}
        <div className='text-center text-white my-5'>
          <h1>What we Offer</h1>
          <p>We provide various computer repair services and solutions for our new and regular customers. Feel free to find out more below.</p>
        </div>
        <div className=''>
          <Slider {...settings}>

            {
              services.map(service =>
                <div className='p-3 ' key={service.id}>
                  <Service service={service}></Service>
                </div>)
            }

          </Slider>
        </div>
        <div className='d-flex justify-content-center my-5'>
          <Link to='/services'><button className='btn btn-dark'>All services</button></Link>
        </div>

      </div >
      {/*  */}

    </div >
  );
};

export default SampleServices;


// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class PauseOnHover extends Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       pauseOnHover: true
//     };
//     return (
//       <div>
//         <h2>Pause On Hover</h2>
//         <Slider {...settings}>
//           <div>
//             <h3 className='bg-primary'>1</h3>
//           </div>
//           <div>
//             <h3 className='bg-primary'>2</h3>
//           </div>
//           <div>
//             <h3 className='bg-primary'>3</h3>
//           </div>
//           <div>
//             <h3 className='bg-primary'>4</h3>
//           </div>
//           <div>
//             <h3 className='bg-primary'>5</h3>
//           </div>
//           <div>
//             <h3 className='bg-primary'>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }