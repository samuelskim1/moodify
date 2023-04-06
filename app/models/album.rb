class Album < ApplicationRecord
  validates :title, :year, presence: true
  
  has_one_attached :photo

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: 'Artist'
  
  has_many :tracks,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: 'Track',
    dependent: :destroy

end
