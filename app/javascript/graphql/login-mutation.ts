import gql from "graphql-tag";

export const login = gql`
  mutation LoginMutation($input: LoginInput!) {
    login(input: $input) {
      currentStudent {
        id
        name
      }
      error
    }
  }
`;
