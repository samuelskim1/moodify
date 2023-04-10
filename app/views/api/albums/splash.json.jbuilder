@albums.each do |album|
    json.set! album.id do
        json.extract! album, :id, :title, :year, :artist_id
        json.set! :artist_name, album.artist.name
        json.photoUrl album.photo.attached? ? album.photo.url : nil
    end
end