Rails.application.routes.draw do
  devise_for :users
  root "pages#home"
  
  namespace :api do
    namespace :v1 do
      resources :drafts
    end
  end

  get '*path', to: 'pages#home', via: :all
end
