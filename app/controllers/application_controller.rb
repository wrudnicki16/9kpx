class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end
  
  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def require_login
    unless logged_in?
      render json: ['invalid credentials, must be logged in'], status: 401 
    end
  end
end
