module Mutations
  class Logout < BaseMutation

    field :current_student, Types::StudentType, null: true

    def resolve
      logout
      
      { current_student: current_student }
    end

    private

    def logout
      context[:session][:user_id] = nil
    end

    def current_student
      context[:session][:user_id]
    end
  end
end