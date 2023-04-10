class AlbumController < ApplicationController
    def index
    #includes uses eager loading vs join's lazy loading
    #joins we still have a n + 1 query
    #includes avoids n + 1 query
    #this includes the association between album since we're doing album.all, we're calling includes on every single instance of album
    @albums = Album.includes(:artist, :tracks).all
    render 'api/albums/index'
  end

  def show
    @album = Album.find_by(id: params[:id])
    render 'api/albums/show'
  end

  def splash
    random_albums = Hash.new(0)
    while random_albums.length < 10
      random_id = Random.rand(1...Album.all.length)
      if !random_albums.keys.include?(random_id)
        random_albums[random_id] = Album.includes(:artist, :tracks).all[random_id]
      end
    end
    @albums = random_albums.values
    render 'api/albums/splash'
    # logic
    # []
    #GEt indexes of Album.All
    # within that range, use .rand 
    # shove the rand value into new holder array
  
  end


end
