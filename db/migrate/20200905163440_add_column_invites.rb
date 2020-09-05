class AddColumnInvites < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :book_invites, :json, default: {}
  end
end
