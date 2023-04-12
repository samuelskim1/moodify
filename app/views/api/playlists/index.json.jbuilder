@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :creator_id, :title, :description
    end
end