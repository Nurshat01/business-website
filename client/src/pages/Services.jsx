import React, { useState, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { REQUEST_SERVICE } from '../utils/mutations';

import Auth from '../utils/auth';
import { addServiceRequestIds, getServiceRequestIds } from '../utils/localStorage';

const Services = () => {
    // create state to hold requested service Ids
    const [requestedServices, setRequestedServices] = useState(getServiceRequestIds());
    
    useEffect(() => {
        return () => addServiceRequestIds(requestedServices);
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

export default Services;