class UpdateAccepterBookInvites

  include Interactor

  def call
    context.jitsi_code = context.accepter.book_invites[context.book_url]
    
    update_accepter_book_invites!
  end

  private

  def update_accepter_book_invites!
    context.accepter.book_invites.delete(context.book_url)
    context.accepter.save!
  end
end
