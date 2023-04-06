class Api::TracksController < ApplicationController
  def index
    #includes uses eager loading vs join's lazy loading
    #joins we still have a n + 1 query
    #includes avoids n + 1 query
    #this includes the association between track since we're doing track.all, we're calling includes on every single instance of track
    @tracks = Track.all
    # debugger
    render 'api/tracks/index'
  end

  def show
    @track = Track.find_by(id: params[:id])
    if @track
      render 'api/tracks/show'
    end
  end
end
