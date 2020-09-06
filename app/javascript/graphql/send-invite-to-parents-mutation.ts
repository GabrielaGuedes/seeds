import gql from "graphql-tag";

export const sendInviteToParents = gql`
  mutation SendInviteToParentsMutation($input: SendInviteToParentsInput!) {
    sendInviteToParents(input: $input) {
      message
    }
  }
`;
