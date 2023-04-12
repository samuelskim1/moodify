# == Schema Information
#
# Table name: playlists
#
#  id          :bigint           not null, primary key
#  creator_id  :bigint           not null
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#
class Playlist < ApplicationRecord
  validates :title, length: { in: 1..100}
  validates :description, length: { in: 0..300}

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: 'User'

  has_many :playlist_tracks,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: 'PlaylistTrack',
    dependent: :destroy
  
end
