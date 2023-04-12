# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  album_id   :bigint           not null
#  artist_id  :bigint           not null
#  title      :string           not null
#  year       :string           not null
#  duration   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  lyrics     :text
#
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

  has_many :playlist_tracks,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: 'PlaylistTrack',
    dependent: :destroy

end
