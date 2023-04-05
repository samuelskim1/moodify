class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.references :artist, null: false, foreign_key: {to_table: :artists}
      t.string :year, null: false
      t.string :duration, null: false

      t.timestamps
    end
  end
end
