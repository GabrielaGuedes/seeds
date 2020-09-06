class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  helper_method :current_user
  helper_method :logged_in?

  def current_user
    Student.find_by(id: session[:user_id])
  end

  def logged_in?
    !current_student.nil?
  end
end
