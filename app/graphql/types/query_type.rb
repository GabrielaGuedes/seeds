module Types
  class QueryType < Types::BaseObject

    field :students, [Types::StudentType], null: false
    field :current_student, Types::StudentType, null: false
    field :jitsi_code, GraphQL::Types::BigInt, null: false
    field :pending_invites_for_book, resolver: Queries::PendingInvitesForBook
    
    def students
      Student.all
    end

    def current_student
      context[:current_user]
    end

    def jitsi_code
      GenerateJitsiCode.call.jitsi_code
    end
  end
end
