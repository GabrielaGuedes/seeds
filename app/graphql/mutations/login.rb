module Mutations
  class Login < BaseMutation

    argument :email, String, required: true
    argument :password, String, required: true

    field :current_student, Types::StudentType, null: true
    field :error, String, null: true

    def resolve(email:, password:)
      @email = email
      @password = password

      return login if correct_password?
      error
    end

    private

    def login
      context[:session][:user_id] = student.id
      { current_student: student }
    end

    def error
      { error: "Senha incorreta" }
    end

    def correct_password?
      student.password == @password
    end

    def student
      @student ||= Student.where(email: @email).first
    end
  end
end