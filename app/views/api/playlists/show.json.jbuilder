 json.extract! @playlist, :id, :creator_id, :title, :description
 json.set! :playlistTracks do
    @playlist_tracks.each_with_index do |playlist_track, index|
        json.set! (index + 1) do 
            json.extract! playlist_track.track, :id, :album_id, :title, :duration
            json.photoUrl playlist_track.track.photo.attached? ? playlist_track.track.photo.url : nil
            json.songUrl playlist_track.track.song.attached? ? playlist_track.track.song.url : nil
            json.set! :albumName, playlist_track.track.album.title
        end
    end
end
