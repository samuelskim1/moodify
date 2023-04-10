Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index, :show ]
    resource :session, only: [:show, :create, :destroy]
    
    resources :tracks, only: [:index, :show, :splash] do
      get :splash, on: :collection
    end

    resources :albums, only: [:index, :show, :splash] do
      get :splash, on: :collection
    end
  end

  get '*path', to: "static_pages#frontend_index"  
end
