class Track < ApplicationRecord
  validates :title, :year, :duration, presence: true
  
  has_one_attached :photo
  has_one_attached :song
  

  belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: 'Album'

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: 'Artist'

end
