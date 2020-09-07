Rails.application.routes.draw do
  root 'pages#index'
  match '/pequeno-principe', to: 'pages#index', via: :all
  match '/reading-room', to: 'pages#index', via: :all
  match '/login', to: 'pages#index', via: :all
  match '/signup', to: 'pages#index', via: :all
  resources :sessions, only: [:create]
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
