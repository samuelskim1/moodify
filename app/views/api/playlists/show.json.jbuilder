 json.extract! @playlist, :id, :creator_id, :title, :description
 json.set! :playlistTracks do
    @playlist.playlist_tracks.each_with_index do |playlist_track, index|
        json.set! index, playlist_track.track_id
    end
 end