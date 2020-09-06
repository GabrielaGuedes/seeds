class InviteFriendsOrganizer

  include Interactor::Organizer

  organize(
    NotifyFriends, 
    GenerateJitsiCode, 
    CreateInvite, 
    UpdateFriendsInvites)
end
