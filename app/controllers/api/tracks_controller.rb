class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render 'api/tracks/index'
  end

  def show
    @track = Track.find_by(id: params[:id])
    if @track
      render 'api/tracks/show'
    end
  end
end
