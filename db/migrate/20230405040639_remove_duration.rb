class RemoveDuration < ActiveRecord::Migration[7.0]
  def change
    remove_column :albums, :duration 
  end
end
