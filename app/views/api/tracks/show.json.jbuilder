json.extract! @track, :id, :title, :duration, :year, :artist_id, :album_id, :lyrics
json.set! :artist_name, @track.artist.name
json.photoUrl @track.photo.attached? ? @track.photo.url : nil
json.songUrl @track.song.attached? ? @track.song.url : nil
# json.artist do
#     json.extract! @track.artist, :name 
# end