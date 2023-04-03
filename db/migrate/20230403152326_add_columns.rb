class AddColumns < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :birth_date, :date, null: false
    add_column :users, :gender, :string, null: false
  end
end
