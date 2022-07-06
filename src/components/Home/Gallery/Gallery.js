import React from 'react';
import './Gallery.css';
const Gallery = () => {
    return (
        <div className='my-5 p-2 '>
            <div className='text-center my-5'>
                <h1>Some of Our Works</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
                <div className="col gal-img">
                    <img src={require('../../../images/gallery/1.jpg')} className='img-fluid ' alt="" />
                </div>
                <div className="col gal-img">
                    <img src={require('../../../images/gallery/2.jpg')} className='img-fluid ' alt="" />
                </div>
                <div className="col gal-img">
                    <img src={require('../../../images/gallery/3.jpg')} className='img-fluid ' alt="" />
                </div>
                <div className="col gal-img">
                    <img src={require('../../../images/gallery/4.jpg')} className='img-fluid ' alt="" />
                </div>
                <div className="col gal-img">
                    <img src={require('../../../images/gallery/5.jpg')} className='img-fluid ' alt="" />
                </div>
                <div className="col gal-img">
                    <img src={require('../../../images/gallery/6.jpg')} className='img-fluid ' alt="" />
                </div>
                <div className="col gal-img">
                    <img src={require('../../../images/gallery/7.jpg')} className='img-fluid ' alt="" />
                </div>
                <div className="col gal-img">
                    <img src={require('../../../images/gallery/8.jpg')} className='img-fluid ' alt="" />
                </div>
                <div className="col gal-img">
                    <img src={require('../../../images/gallery/9.jpg')} className='img-fluid ' alt="" />
                </div>
                <div className="col gal-img">
                    <img src={require('../../../images/gallery/10.jpg')} className='img-fluid ' alt="" />
                </div>
                <div className="col gal-img">
                    <img src={require('../../../images/gallery/11.jpg')} className='img-fluid ' alt="" />
                </div>
                <div className="col gal-img">
                    <img src={require('../../../images/gallery/12.jpg')} className='img-fluid ' alt="" />
                </div>
                {/* <div className="col gal-img">
                    <img src={require('../../../images/gallery/.jpg')} className='img-fluid ' alt="" />
                </div> */}
            </div>

        </div>
    );
};

export default Gallery;