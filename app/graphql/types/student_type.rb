module Types
  class StudentType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :first_name, String, null: false
    field :phone_number, String, null: false
    field :parent_phone_number, String, null: false
    field :email, String, null: false
    field :done_invites, [InviteType], null: true
    field :received_invites, [InviteType], null: true
    field :pending_invites, String, null: true
  end
end