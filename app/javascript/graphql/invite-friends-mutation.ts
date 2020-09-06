import gql from "graphql-tag";

export const inviteFriends = gql`
  mutation InviteFriendsMutation($input: InviteFriendsInput!) {
    inviteFriends(input: $input) {
      invite {
        id
        bookUrl
        invitedFriends {
          id
          name
        }
        jitsiCode
      }
    }
  }
`;
