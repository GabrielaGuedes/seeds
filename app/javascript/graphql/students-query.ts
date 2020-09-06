import gql from "graphql-tag";

export const students = gql`
  query StudentsQuery {
    students {
      id
      name
      firstName
    }
  }
`;
