class CreatePlaylistTracks < ActiveRecord::Migration[7.0]
  def change
    create_table :playlist_tracks do |t|
      t.references :playlist, null: false, foreign_key: {to_table: :playlists}
      t.references :track, null: false, foreign_key: {to_table: :tracks}

      t.timestamps
    end
  end
end
