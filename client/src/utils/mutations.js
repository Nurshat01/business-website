import {gql} from '@apollo/client'

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(email: $email, password: $password) {
    token
    user {
      _id
      firstName
    }
  }
}
`

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      firstName
    }
  }
}
`

export const REQUEST_SERVICE = gql`
mutation requestService($serviceRequest: ServiceRequestInput!) {
  requestService(serviceRequest: $serviceRequest) {
    serviceRequests {
      serviceRequestId
      serviceName
      description
    }
  }
}
`

export const CANCEL_SERVICE_REQUEST = gql`
mutation cancelServiceRequest($serviceRequestId: ID!) {
  cancelServiceRequest(serviceRequestId: $serviceRequestId) {
    serviceRequests {
      serviceRequestId
      serviceName
      description
    }
  }
}
`