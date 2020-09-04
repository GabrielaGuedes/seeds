module Mutations
  class SendInviteToParents < BaseMutation

    argument :message, String, required: false
    argument :student_id, ID, required: true

    field :message, String, null: true

    def resolve(message:, student_id:)
      SendSms.call(phone_number: phone_number(student_id), message: message)
      
      {
        message: message
      }
    end

    private

    def phone_number(student_id)
      @phone_number ||= Student.find(student_id).parent_phone_number
    end
  end
end