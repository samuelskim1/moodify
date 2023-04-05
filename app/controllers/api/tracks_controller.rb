class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render 'api/tracks/index'
  end

  def show
    @track = Track.find_by(params[:id])
    debugger
    render 'api/tracks/show'
  end
end
