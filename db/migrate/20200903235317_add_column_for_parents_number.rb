class AddColumnForParentsNumber < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :parent_phone_number, :string
  end
end
