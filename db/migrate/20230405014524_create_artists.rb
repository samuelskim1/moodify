class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.text :bio

      t.timestamps
    end
    add_index :artists, :name
  end
end
