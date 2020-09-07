module Types
  class MutationType < Types::BaseObject
    
    field :send_invite_to_parents, mutation: Mutations::SendInviteToParents
    field :invite_friends, mutation: Mutations::InviteFriends
    field :accept_friend_invite, mutation: Mutations::AcceptFriendInvite
    field :login, mutation: Mutations::Login
    field :signup, mutation: Mutations::Signup
    field :logout, mutation: Mutations::Logout

  end
end
