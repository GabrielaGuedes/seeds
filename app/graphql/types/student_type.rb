module Types
  class StudentType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :phone_number, String, null: false
    field :parent_phone_number, String, null: false
    field :email, String, null: false
  end
end