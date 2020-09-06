import gql from "graphql-tag";

export const acceptFriendInvite = gql`
  mutation AcceptFriendInviteMutaton($input: AcceptFriendInviteInput!) {
    acceptFriendInvite(input: $input) {
      invite {
        id
        jitsiCode
        bookUrl
      }
    }
  }
`;
