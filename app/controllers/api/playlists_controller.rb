class Api::PlaylistsController < ApplicationController
    before_action :require_logged_in, only: [:index, :create, :update, :destroy]

    def index
        @playlists = current_user.playlists
        if @playlists
            render 'api/playlists/index'
        else 
            render json: {errors: ["You must be logged in to view this"] }
        end

    end

    def show
        @playlist = Playlist.includes(:creator, :playlist_tracks).find_by(id: params[:id])
        @playlist_tracks = @playlist.playlist_tracks.includes(track: [:album, :artist])
        render 'api/playlists/show'
    end

    def create
        @playlist = Playlist.new(creator_id: current_user.id, title: params[:title], description: params[:description])
        if @playlist.save
            render :show
        else
            render json: {errors: @user.errors.full_messages }
        end
    end

    # def update
    #     @playlist = Playlist.includes(:creator, :playlist_tracks).find_by(id: params[:id])
    #     @playlist_tracks = @playlist.playlist_tracks.includes(track: [:album, :artist])

    #     # render 'api/playlists/update'
    # end

    def destroy
        @playlist = Playlist.find_by(id: params[:id])
        puts @playlist;
        @playlist.destroy
        render json: {}, status: :no_content;
    end


end
