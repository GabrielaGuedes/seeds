import gql from "graphql-tag";

export const pendingInvitesForBook = gql`
  query PendingInvitesForBookQuery($bookUrl: String!) {
    pendingInvitesForBook(bookUrl: $bookUrl) {
      id
      bookUrl
      jitsiCode
      invitedFriends {
        id
        name
      }
      inviter {
        id
        name
      }
    }
  }
`;
