json.extract! @album, :id, :title, :year, :artist_id
json.set! :artist_name, @album.artist.name
json.photoUrl @album.photo.attached? ? @album.photo.url : nil
json.set! :tracks do
    @album.tracks.each_with_index do |track, index|
        json.set! track.id do
            json.extract! track, :id, :title, :duration, :artist_id, :album_id
            json.set! :artist_name, track.artist.name
            json.photoUrl track.photo.attached? ? track.photo.url : nil
            json.songUrl track.song.attached? ? track.song.url : nil
        end
    end
end
json.set! :albums do 
    @album.artist.albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :title, :year    
            json.photoUrl album.photo.attached? ? album.photo.url : nil
        end
    end
end






#     json.set! album.id do
#         json.extract! album, :id, :title, :year, :artist_id
#         json.set! :artist_name, album.artist.name
#         json.photoUrl album.photo.attached? ? album.photo.url : nil
#         json.set! tracks do 
#             album.tracks.each do |track|
#                 json.set! track.id do
#                     json.extract! track, :id, :title, :duration, :artist_id, :album_id
#                     json.set! :artist_name, track.artist.name
#                     json.photoUrl track.photo.attached? ? track.photo.url : nil
#                     json.songUrl track.song.attached? ? track.song.url : nil
#                 end
#             end
#         end
#         json.songUrl album.song.attached? ? album.song.url : nil
#     end
# end