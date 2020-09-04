module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :students, [Types::StudentType], null: false
    field :current_student, Types::StudentType, null: false
    field :jitsi_code, GraphQL::Types::BigInt, null: false
    
    def students
      Student.all
    end

    def current_student
      Student.find(1)
    end

    def jitsi_code
      rand(100000000000..1000000000000)
    end
  end
end
