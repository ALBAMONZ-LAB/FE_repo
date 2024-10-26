import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

export const GET_EVENT_PAGE_WITH_FUNCTION = gql`
  query GetEventPageWithFunction($id: ID!) {
    eventPageWithFunction(id: $id) {
      id
      title
      description
    }
  }
`;
