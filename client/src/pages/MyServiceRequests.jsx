import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";

const MyServiceRequests = () => {
    return (
        <div className='content box'>
            <h2 className='title box has-text-centered is-underlined has-background-grey-light'>My Service Requests</h2>
        </div>
    );
};

export default MyServiceRequests;