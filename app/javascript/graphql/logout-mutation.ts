import gql from "graphql-tag";

export const logout = gql`
  mutation LogoutMutation($input: LogoutInput!) {
    logout(input: $input) {
      currentStudent {
        id
      }
    }
  }
`;
