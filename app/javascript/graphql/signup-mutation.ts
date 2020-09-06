import gql from "graphql-tag";

export const signup = gql`
  mutation SignupMutation($input: SignupInput!) {
    signup(input: $input) {
      currentStudent {
        id
        name
      }
    }
  }
`;
