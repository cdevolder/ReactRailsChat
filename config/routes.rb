Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  get "/:channel", to: 'pages#home'
end
