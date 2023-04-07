json.extract! @track, :id, :title, :duration, :year, :artist_id, :album_id, :lyrics
json.set! :artist_name, @track.artist.name
# json.artist do
#     json.extract! @track.artist, :name 
# end