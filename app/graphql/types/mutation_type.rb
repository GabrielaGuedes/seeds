module Types
  class MutationType < Types::BaseObject
    
    field :send_invite_to_parents, mutation: Mutations::SendInviteToParents
    field :invite_friends, mutation: Mutations::InviteFriends
    field :accept_friend_invite, mutation: Mutations::AcceptFriendInvite

  end
end
