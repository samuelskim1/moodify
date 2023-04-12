# == Schema Information
#
# Table name: playlist_tracks
#
#  id          :bigint           not null, primary key
#  playlist_id :bigint           not null
#  track_id    :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class PlaylistTrack < ApplicationRecord

  belongs_to :playlist,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: 'Playlist'

  belongs_to :track,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: 'Track'

end
