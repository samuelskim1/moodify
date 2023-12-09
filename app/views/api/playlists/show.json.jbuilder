 json.extract! @playlist, :id, :creator_id, :title, :description
 json.set! :playlist_creator, @playlist.creator.username
 json.set! :playlistTracks do
    if @playlist_tracks 
        @playlist_tracks.each_with_index do |playlist_track, index|
            json.set! playlist_track.id do
                json.set! :id, playlist_track.id
                json.set! :track_id, playlist_track.track.id
                json.extract! playlist_track.track, :album_id, :title, :duration
                json.photoUrl playlist_track.track.photo.attached? ? playlist_track.track.photo.url : nil
                json.songUrl playlist_track.track.song.attached? ? playlist_track.track.song.url : nil
                json.set! :album_Name, playlist_track.track.album.title
                json.set! :artist_name, playlist_track.track.artist.name
            end
        end
    end
end
