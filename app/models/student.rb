class Student < ApplicationRecord

  def first_name
    name.split.first
  end
end
