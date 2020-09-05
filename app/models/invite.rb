class Invite < ApplicationRecord

  belongs_to :inviter, class_name: 'Student', :foreign_key => :inviter_id, inverse_of: :done_invites
  has_and_belongs_to_many :invited_friends, class_name: 'Student'

end
