import React, { useState, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { REQUEST_SERVICE } from '../utils/mutations';

import Auth from '../utils/auth';
import { addServiceRequestIds, getServiceRequestIds } from '../utils/localStorage';

const Services = () => {
    // create state to hold requested service Ids
    const [requestedServices, setRequestedServices] = useState(getServiceRequestIds());
    
    // useEffect(() => {
    //     return () => addServiceRequestIds(requestedServices);
    //   });

    // const handleRequestService = async (serviceRequestId) => {
    // }

    return (
        <>
        <div>
            <h2>Our Services</h2>
            <div className='columns'>
                <div className='column'>
                    <div className='card'>
                        <div className='card-image'>
                            <figure className='image is-4by3'>
                                <img src='https://via.placeholder.com/300' alt='Placeholder' />
                            </figure>
                        </div>
                        <h3>Service 1</h3>
                        <p>Service 1 description</p>
                        <div className='button' onClick={() => handleRequestService('service1')}>Request Service</div>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <div className='card-image'>
                            <figure className='image is-4by3'>
                                <img src='https://via.placeholder.com/300' alt='Placeholder' />
                            </figure>
                        </div>
                        <h3>Service 2</h3>
                        <p>Service 2 description</p>
                        <div className='button'onClick={() => handleRequestService('service2')}>Request Service</div>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <div className='card-image'>
                            <figure className='image is-4by3'>
                                <img src='https://via.placeholder.com/300' alt='Placeholder' />
                            </figure>
                        </div>
                        <h3>Service 3</h3>
                        <p>Service 3 description</p>
                        <div className='button' onClick={() => handleRequestService('service3')}>Request Service</div>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <div className='card-image'>
                            <figure className='image is-4by3'>
                                <img src='https://via.placeholder.com/300' alt='Placeholder' />
                            </figure>
                        </div>
                        <h3>Service 4</h3>
                        <p>Service 4 description</p>
                        <div className='button' onClick={() => handleRequestService('service4')}>Request Service</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Services;