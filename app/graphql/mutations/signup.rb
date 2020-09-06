module Mutations
  class Signup < BaseMutation

    argument :name, String, required: true
    argument :phone_number, String, required: true
    argument :parent_phone_number, String, required: true
    argument :email, String, required: true
    argument :password, String, required: true

    field :current_student, Types::StudentType, null: true

    def resolve(name:, phone_number:, parent_phone_number:, email:, password:)
      @create_params = {name: name, 
                        phone_number: phone_number, 
                        parent_phone_number: parent_phone_number, 
                        email: email, 
                        password: password}

      login if student
      {
        current_student: student
      }
    end

    private

    def student
      @student ||= CreateStudent.call(create_params: @create_params).student
    end

    def login
      context[:session][:user_id] = student.id  
    end
  end
end