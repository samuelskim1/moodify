Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    get 'tracks/search', to: "tracks#search"
    resources :users, only: [:create, :index, :show ] do
      # resources :playlists, only: [:index]
    end

    resource :session, only: [:show, :create, :destroy]
    
    resources :tracks, only: [:index, :show, :splash] do
      get :splash, on: :collection
    end

    resources :albums, only: [:index, :show, :splash] do
      get :splash, on: :collection
    end

    resources :playlists, only: [:index, :show, :update, :create, :destroy] do
      get :splash, on: :collection
    end

    # resourece :playlists_tracks, only: [:index]
    # dont need this since we're grabbing the ids of playlist tracks in playlist show

  end

  get '*path', to: "static_pages#frontend_index"  
end
