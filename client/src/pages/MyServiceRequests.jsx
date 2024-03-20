import { useQuery, useMutation } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";
import { CANCEL_SERVICE_REQUEST } from "../utils/mutations";

import Auth from '../utils/auth';

const MyServiceRequests = () => {

    const [cancelServiceRequest] = useMutation(CANCEL_SERVICE_REQUEST, {
        refetchQueries: [
            QUERY_ME,
            'me'
        ]
    });

    const { loading, data } = useQuery(QUERY_ME);

    const userData = data?.me || data?.user || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleCancelServiceRequest = async (serviceRequestId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
          }
        
        try {
            await cancelServiceRequest({
                variables: {serviceRequestId}});
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='content box'>
            <h2 className='title box has-text-centered is-underlined has-background-grey-light mb-6'>My Service Requests</h2>
            {!userData.serviceRequests.length
            ? <div className="columns">
                <h3 className='column has-text-centered'>You have no active service requests. Visit the Services page to make your Landscaping dreams come true!</h3>
            </div>
            : userData.serviceRequests.map((serviceRequests, i) => {
                return (
                    <section className='section box has-background-grey-lighter' key={i}>
                        <div className="columns is-vcentered">
                            <div className="column is-narrow">
                                <figure className='image is-128x128'>
                                    <img src={serviceRequests.serviceImage} alt="" />
                                </figure>
                            </div>
                            <div className="column">
                                <p className='title is-4'>{serviceRequests.serviceName}</p>
                                <p className='subtitle'>Price: {serviceRequests.price}</p>
                            </div>
                            <div className="column is-offset-4">
                                <button className="button is-danger" onClick={() => handleCancelServiceRequest(serviceRequests.serviceRequestId)}>Cancel Service</button>
                            </div>
                        </div>
                        <div className="message" style={{position: 'fixed', bottom: '40%', left: '85%', right: '2%'}}>
                            <div className="message-header">
                                <p>Service Request Status</p>
                            </div>
                            <div className="message-body">
                                We will contact you within 3-5 business days to schedule your requested service.
                            </div>
                        </div>
                    </section>
                )
            })}
        </div>
    );
};

export default MyServiceRequests;