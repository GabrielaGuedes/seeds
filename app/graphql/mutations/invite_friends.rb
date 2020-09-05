module Mutations
  class InviteFriends < BaseMutation

    argument :student_ids, [ID], required: true
    argument :book_url, String, required: true

    field :jitsi_code, String, null: false

    def resolve(student_ids:, book_url:)
      @student_ids = student_ids
      @book_url = book_url
      
      {
        jitsi_code: invite_result.jitsi_code
      }
    end

    private

    def invite_result
      @invite_result ||= Interactors::InviteFriendsOrganizer.call(students: students, inviter: inviter, book_url: @book_url)
    end

    def students
      @students ||= @student_ids.map{ |student_id| Student.find(student_id) }
    end

    def inviter
      @inviter ||= Student.first #TODO: implement current student
    end
  end
end