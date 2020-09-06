import gql from "graphql-tag";

export const currentStudent = gql`
  query CurrentStudentQuery {
    currentStudent {
      id
      name
      firstName
      email
      parentPhoneNumber
      phoneNumber
    }
  }
`;
