Rails.application.routes.draw do

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :channels, only: [:index, :create] do
        resources :messages, only: [ :index, :create ]
      end
    end
  end

  resources :channels, only: [ :show ]
  root to: 'channels#show'

  mount ActionCable.server => "/cable"
end
