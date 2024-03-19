import { useMutation } from '@apollo/client';

import serviceData from '../utils/services.json';
import { REQUEST_SERVICE } from '../utils/mutations';
import Auth from '../utils/auth';

const Services = () => {
    const [requestService] = useMutation(REQUEST_SERVICE);

    const handleRequestService = async (service) => {
        console.log(service);
        await requestService({
            variables: {
                serviceRequest: {
                    serviceImage: service.serviceImage,
                    serviceName: service.serviceName,
                    price: service.price,
                    description: service.description,
                }
            }
        })
    }

    return (
        <>
        <div>
            <h2>Our Services</h2>
            <div className='columns'>
                {serviceData.map((service) => {
                    return <div className='column'>
                    <div className='card'>
                        <div className='card-image'>
                            <figure className='image is-4by3'>
                                <img src={service.serviceImage} alt='Placeholder' />
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media-content'>
                                <p className='title is-4'>{service.serviceName}</p>
                                <p className='subtitle is-6'>{service.price}</p>
                            </div>
                            <div className='content box'>
                                {service.description}
                            </div>
                            {Auth.loggedIn()
                            ? <div className='card-footer-item'>
                                <button className='card-footer-item button is-success' onClick={() => handleRequestService(service)}>Request Service</button>
                            </div>
                            : ""}
                        </div>
                    </div>
                </div>
                })};
            </div>
        </div>
        </>
    );
};

export default Services;