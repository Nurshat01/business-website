export const getServiceRequestIds = () => {
    const serviceRequestIds = localStorage.getItem('requested_services')
    ? JSON.parse(localStorage.getItem('requested_services'))
    : [];

    return serviceRequestIds;
}

export const addServiceRequestIds = (reqServArray) => {
    if (reqServArray.length) {
        localStorage.setItem('requested_services', JSON.stringify(reqServArray));
    } else {
        localStorage.removeItem('requested_services');
    }
};

export const removeServiceRequestId = (ServiceRequestId) => {
    const serviceRequestIds = localStorage.getItem('requested_services')
    ? JSON.parse(localStorage.getItem('requested_services'))
    : [];

    if (!serviceRequestIds) {
        return false;
    }

    const updatedserviceRequestIds = serviceRequestIds?.filter((requestedServiceId) => requestedServiceId !== ServiceRequestId );
    localStorage.setItem('requested_services', JSON.stringify(updatedserviceRequestIds));

    return true;
};