import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      firstName
      lastName
    }
  }
`;

export const QUERY_JOB = gql`
  query job($_id: ID) {
    job(_id: $_id) {
      _id
      company
      role
      advertisedSalary
      offerMade
      contactPerson {
        name
        role
        phone
        email
        notes
      }
      comLogArray {
        method
        content
        direction
      }
    }
  }
`;

export const QUERY_QUESTION = gql`
  query question($_id: ID) {
    question(_id: $_id) {
      _id
      question
      response
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedJobs {
        _id
        company
        role
        advertisedSalary
        offerMade
        contactPerson {
          name
          role
          phone
          email
          notes
        }
      }
      savedQuestions{
        question
        response
      }
    }
  }
`;
