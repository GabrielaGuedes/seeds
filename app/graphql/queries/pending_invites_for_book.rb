module Queries
  class PendingInvitesForBook < GraphQL::Schema::Resolver

    argument :book_url, String, required: true

    type [Types::InviteType], null: true

    def resolve(book_url:)
      @book_url = book_url
      
      pending_invites
    end

    private
    
    def pending_invites
      return [] if student_pending_invites.blank?
      
      @invites = []

      student_pending_invites.each do |invite_id|
        invite = Invite.find(invite_id)
        @invites << invite if all_invites_for_book.pluck(:id).include?(invite_id.to_i)
      end
      @invites
    end

    def all_invites_for_book
      all_invites_for_book ||= Invite.where(book_url: @book_url)
    end

    def student_pending_invites
      current_student.pending_invites.split
    end
    
    def current_student
      Student.find(1) # TODO: implement current_student
    end
  end
end