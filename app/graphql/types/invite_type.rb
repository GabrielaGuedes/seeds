module Types
  class InviteType < Types::BaseObject
    field :id, ID, null: false
    field :book_url, String, null: false
    field :jitsi_code, String, null: false
    field :inviter, StudentType, null: false
    field :invited_friends, [StudentType], null: false
  end
end