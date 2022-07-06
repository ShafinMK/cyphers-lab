import React from 'react';

const Member = (props) => {
    const { personThumb, name, position } = props.member;
    return (
        <div>

            <div className='d-flex justify-content-center'>
                <div className="card position-relative" >
                    <img src={personThumb} className="card-img-top img-fluid" style={{ width: '20rem' }} alt="..." />

                    <div class="position-absolute bottom-0 start-50 translate-middle-x  w-100" style={{ height: '60px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <h5 className='text-center text-white'>{name}</h5>
                        <h6 className='text-center text-white'>{position}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Member;