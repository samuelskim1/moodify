class RemoveBirthDateAndGender < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :birth_date
    remove_column :users, :gender
  end
end
