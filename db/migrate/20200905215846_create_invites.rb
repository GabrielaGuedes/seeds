class CreateInvites < ActiveRecord::Migration[6.0]
  def change
    create_table :invites do |t|
      t.string :jitsi_code
      t.string :book_url
      t.references :inviter, foreign_key: { to_table: :students }

      t.timestamps
    end
  end
end
