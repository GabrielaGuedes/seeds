class ChangePendingInvitesType < ActiveRecord::Migration[6.0]
  def change
    change_column :students, :pending_invites, :string
  end
end
