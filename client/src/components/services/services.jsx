import { useState, useEffect } from 'react';

import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';
import { addServiceRequestIds, getServiceRequestIds } from '../utils/localStorage';


const ServicesOffered = () => {
    // create state to hold requested service Ids
    const [requestedServices, setRequestedServices] = useState(getServiceRequestIds());
    
    useEffect(() => {
        return () => saveBookIds(savedBookIds);
      });

    const handleRequestService = async (serviceRequestId) => {
    }


    return (
        <>
        <div>
        </div>
        </>
    );
};

export default ServicesOffered;