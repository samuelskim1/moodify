class CreateTracks < ActiveRecord::Migration[7.0]
  def change
    create_table :tracks do |t|
      t.references :album, null: false, foreign_key: {to_table: :albums}
      t.references :artist, null: false, foreign_key: {to_table: :artists}
      t.string :title, null: false
      t.string :year, null: false
      t.string :duration, null: false

      t.timestamps
    end
    add_index :tracks, :title
  end
end
