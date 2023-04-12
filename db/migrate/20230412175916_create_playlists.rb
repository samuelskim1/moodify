class CreatePlaylists < ActiveRecord::Migration[7.0]
  def change
    create_table :playlists do |t|
      t.references :creator, null: false, foreign_key: {to_table: :users}
      t.string :title
      t.timestamps
    end
    add_index :playlists, :title
  end
end
