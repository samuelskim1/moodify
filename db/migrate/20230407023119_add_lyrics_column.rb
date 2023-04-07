class AddLyricsColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :tracks, :lyrics, :text 
  end
end
