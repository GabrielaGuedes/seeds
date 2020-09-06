class Student < ApplicationRecord

  validates :email, uniqueness: true
  
  has_many :done_invites, class_name: 'Invite', foreign_key: 'inviter_id', inverse_of: :inviter
  has_and_belongs_to_many :received_invites, class_name: 'Invite'

  def first_name
    name.split.first
  end
end
