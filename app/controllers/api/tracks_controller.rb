class Api::TracksController < ApplicationController
  def index
    #includes uses eager loading vs join's lazy loading
    #joins we still have a n + 1 query
    #includes avoids n + 1 query
    #this includes the association between track since we're doing track.all, we're calling includes on every single instance of track
    @tracks = Track.includes(:artist).all
    render 'api/tracks/index'
  end

  def show
    @track = Track.find_by(id: params[:id])
    render 'api/tracks/show'
  end

  def splash
    
    random_tracks = Hash.new(0)
    while random_tracks.length < 9
      random_id = Random.rand(1...Track.all.length)
      if !random_tracks.keys.include?(random_id)
        random_tracks[random_id] = Track.includes(:artist).all[random_id]
      end
    end
    @tracks = random_tracks.values
    render 'api/tracks/splash'
    # logic
    # []
    #GEt indexes of Track.All
    # within that range, use .rand 
    # shove the rand value into new holder array
  
  end

end

