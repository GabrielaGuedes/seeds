module Interactors
  class InviteFriendsOrganizer

    include Interactor::Organizer

    organize(Interactors::NotifyFriends, Interactors::GenerateJitsiCode, Interactors::UpdateFriendsInvites)
  end
end
