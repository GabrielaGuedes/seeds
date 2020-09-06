class CreateInvite

  include Interactor

  def call
    context.invite = Invite.create!(invite_params)
  end

  private
  
  def invite_params
    {
      jitsi_code: context.jitsi_code, 
      book_url: context.book_url, 
      inviter: context.inviter, 
      invited_friends: context.students
    }
  end
end