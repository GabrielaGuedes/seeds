class UpdateFriendsInvites

  include Interactor

  def call
    update_friends_pending_invites!
  end

  private

  def update_friends_pending_invites!
    context.students.each do |student|
      updated_pending_invites = "#{(student.pending_invites)}#{context.invite.id} "
      student.update!(pending_invites: updated_pending_invites)
    end
  end
end
