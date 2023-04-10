class Api::AlbumsController < ApplicationController
  def index
    #includes uses eager loading vs join's lazy loading
    #joins we still have a n + 1 query
    #includes avoids n + 1 query
    #this includes the association between album since we're doing album.all, we're calling includes on every single instance of album
    @albums = Album.includes(:artist, :tracks).all
    render 'api/albums/index'
  end

  def show
    @album = Album.includes(:artist, :tracks).find_by(id: params[:id])
    render 'api/albums/show'
  end

  def splash
    # random_albums = Hash.new(0)
    # while random_albums.length < 3
    #   random_id = Random.rand(0...Album.all.length)
    #   if !random_albums.keys.include?(random_id + 1)
    #     random_albums[random_id + 1] = Album.includes(:artist, :tracks).all[random_id]
    #   end
    # end
    # @albums = random_albums.values
    @albums = Album.includes(:artist, :tracks).all.limit(10)
    render 'api/albums/splash'
    # logic
    # []
    #GEt indexes of Album.All
    # within that range, use .rand 
    # shove the rand value into new holder array
  
  end


end
