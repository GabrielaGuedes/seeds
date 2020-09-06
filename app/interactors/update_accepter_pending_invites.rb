class UpdateAccepterPendingInvites

  include Interactor

  def call    
    update_accepter_pending_invites!

    context.invite = Invite.find(context.invite_id)
  end

  private

  def update_accepter_pending_invites!
    context.accepter.update!(pending_invites: remaining_pending_invites)
  end

  def remaining_pending_invites
    pending_invites = context.accepter.pending_invites.split
    pending_invites.delete(context.invite_id.to_s)
    "#{pending_invites.join(" ")} "
  end
end
