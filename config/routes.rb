Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # get "/", to: "static_pages#root" # example of a custom route, 
  # but you actually need the root prefix to render your root file and stuff react into it.
  root "static_pages#root"
  namespace :api, defaults: { format: "json" } do
    resources :users, only: [:create] do
      resources :photos, only: [:create, :index]
    end
    resources :photos, only: [:show, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
