module Mutations
  class BaseMutation < GraphQL::Schema::RelayClassicMutation
    null false
    # argument_class Types::BaseArgument
    # field_class Types::BaseField
    # input_object_class Types::BaseInputObject
    # object_class Types::BaseObject

    def current_student
      context[:current_user]
    end
  end
end
