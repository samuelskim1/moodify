@tracks.each do |track|
    json.set! track.id do
        json.extract! track, :id, :title, :duration, :artist_id, :album_id
        # json.artist do
        #     json.extract! @track.artist, :name 
        # end
        # json.partial! 'track' track: track
    end
end
