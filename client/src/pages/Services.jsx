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
        <div className='content box'>
            <h2 className='title box has-text-centered is-underlined has-background-grey-light'>Our Services</h2>
            <div className='columns'>
                {serviceData.map((service, i) => {
                    return (
                    <div className='column' key={i}>
                    <div className='card has-background-grey-lighter' key={service.serviceName}>
                        <div className='card-image pt-4'>
                            <figure className='image is-4by3'>
                                <img src={service.serviceImage} alt='Placeholder' />
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media-content'>
                                <p className='title pb-4 is-4 has-text-centered is-underlined'>{service.serviceName}</p>
                                <p className='subtitle box is-6 has-text-centered'>Price: {service.price}</p>
                            </div>
                            <div className='content mt-1 box has-text-centered'>
                                {service.description}
                            </div>
                            {Auth.loggedIn()
                            ? 
                            
                            <div className='card-footer-item'>
                                <button className='card-footer-item button is-success' onClick={() => handleRequestService(service)}>Request Service</button>
                            </div>
                            : ""}
                        </div>
                    </div>
                </div>
                )
                })};
            </div>
        </div>
        </>
    );
};

export default Services;