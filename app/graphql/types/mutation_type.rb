module Types
  class MutationType < Types::BaseObject
    
    field :send_invite_to_parents, mutation: Mutations::SendInviteToParents
    field :invite_friends, mutation: Mutations::InviteFriends

  end
end
