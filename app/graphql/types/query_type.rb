module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :students, [Types::StudentType], null: false
    
    def students
      Student.all
    end
  end
end
