module Mutations
  class InviteFriends < BaseMutation

    argument :student_ids, [ID], required: true
    argument :book_url, String, required: true

    field :invite, Types::InviteType, null: false

    def resolve(student_ids:, book_url:)
      @student_ids = student_ids
      @book_url = book_url

      {
        invite: invite_result.invite
      }
    end

    private

    def invite_result
      @invite_result ||= InviteFriendsOrganizer.call(students: students, inviter: inviter, book_url: @book_url)
    end

    def students
      @students ||= @student_ids.map{ |student_id| Student.find(student_id) }
    end

    def inviter
      current_student
    end
  end
end