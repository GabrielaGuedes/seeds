class StudentInvite < ActiveRecord::Migration[6.0]
  def change
    create_table :invites_students, id: false do |t|
      t.belongs_to :invite
      t.belongs_to :student
    end
  end
end
