class Artist < ApplicationRecord
    validates :name, presence: true
    
    has_one_attached :profile_picture
    has_one_attached :background_cover_photo
    has_many_attached :about_photos

    has_many :albums,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: 'Album',
        dependent: :destroy

    has_many :tracks,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: 'Track',
        dependent: :destroy

    has_many :album_tracks,
        through: :albums,
        source: :tracks
end
