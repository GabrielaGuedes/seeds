module Types
  class MutationType < Types::BaseObject
    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    field :send_invite_to_parents, mutation: Mutations::SendInviteToParents
    def test_field
      "Hello World"
    end
  end
end
