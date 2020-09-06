module Mutations
  class AcceptFriendInvite < BaseMutation

    argument :invite_id, ID, required: true

    field :invite, Types::InviteType, null: false

    def resolve(invite_id:)
      @invite_id = invite_id
      
      {
        invite: accept_result.invite
      }
    end

    private

    def accept_result
      @accept_result ||= UpdateAccepterPendingInvites.call(accepter: accepter, invite_id: @invite_id)
    end

    def accepter
      @accepter ||= Student.first #TODO: implement current student
    end
  end
end