@tracks.each do |track|
    json.set! track.id do
        json.extract! track, :id, :title, :duration, :artist_id, :album_id
        json.set! :artist_name, track.artist.name
        json.photoUrl track.photo.attached? ? track.photo.url : nil
        json.songUrl track.song.attached? ? track.song.url : nil
    end
end