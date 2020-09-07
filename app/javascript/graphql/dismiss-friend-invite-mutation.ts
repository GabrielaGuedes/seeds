import gql from "graphql-tag";

export const dismissFriendInvite = gql`
  mutation DismissFriendInviteMutation($input: AcceptFriendInviteInput!) {
    acceptFriendInvite(input: $input) {
      invite {
        id
      }
    }
  }
`;
