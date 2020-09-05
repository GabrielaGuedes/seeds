class UpdateFriendsInvites

  include Interactor

  def call
    update_friends_invites
  end

  private

  def update_friends_invites
    context.students.each do |student|
      student.book_invites[context.book_url] = context.jitsi_code
      student.save!
    end
  end
end