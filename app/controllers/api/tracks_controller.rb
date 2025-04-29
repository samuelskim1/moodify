class Api::TracksController < ApplicationController
  def index
    @tracks = Track.includes(:artist).all
    render 'api/tracks/index'
  end

  def show
    @track = Track.find_by(id: params[:id])
    render 'api/tracks/show'
  end

  def splash
    random_tracks = Hash.new(0)
    while random_tracks.length < 10
      random_id = Random.rand(0...Track.all.length)
      if !random_tracks.keys.include?(random_id + 1)
        random_tracks[random_id + 1] = Track.includes(:artist).all[random_id]
      end
    end
    @tracks = random_tracks.values
    render 'api/tracks/splash'
  end

  def search  
    @tracks = Track.where("lower(title) LIKE ?", "%#{params[:q]}%")
    render :search
  end


end

