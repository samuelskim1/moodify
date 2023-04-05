@tracks.each do |track|
    json.set! track.id do
        json.extract! track, :id, :title, :duration, :artist_id, :album_id
        # json.partial! 'track' track: track
    end
end
