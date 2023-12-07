class Api::PlaylistTracksController < ApplicationController
    def create
        puts params
        @playlist_track = PlaylistTrack.new(playlist_id: params[:playlist_id], track_id: params[:track_id])
        if @playlist_track.save
            render '/api/playlisttracks/show'
        else
            render json: { errors: @playlist_track.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @playlist_track = PlaylistTrack.find_by(id: params[:id])
        @playlist_track.destroy
        render json: {}, status: :no_content
    end


    # def playlist_track_params 
    #     puts params
    #     params.require(:playlist_track).permit(:playlist_id, :track_id)
    # end

end
