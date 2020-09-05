class InviteFriendsOrganizer

  include Interactor::Organizer

  organize(NotifyFriends, GenerateJitsiCode, UpdateFriendsInvites)
end