class AddColumnForPendingInvite < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :pending_invites, :integer, array: true, default: []
    remove_column :students, :book_invites, :json, default: {}
  end
end
