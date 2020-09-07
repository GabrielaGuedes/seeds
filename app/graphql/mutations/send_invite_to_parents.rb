module Mutations
  class SendInviteToParents < BaseMutation

    argument :message, String, required: false

    field :message, String, null: true

    def resolve(message:)
      SendSms.call(phone_number: phone_number, message: message)
      
      {
        message: message
      }
    end

    private

    def phone_number
      @phone_number ||= current_student.parent_phone_number
    end
  end
end