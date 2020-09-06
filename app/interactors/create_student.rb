class CreateStudent

  include Interactor

  def call
    context.student = Student.create!(context.create_params)
  end
end