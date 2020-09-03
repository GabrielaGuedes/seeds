require 'twilio-ruby'

class SendSms

  include Interactor

  def call
    client.messages.create(
      from: from_number,
      to: context.phone_number,
      body: context.message
    )
  end

  private

  def client
    client ||= Twilio::REST::Client.new(account_sid, auth_token)    
  end

  def account_sid
    account_sid ||= ::TwilioConfig.first.account_sid
  end

  def auth_token
    auth_token ||= ::TwilioConfig.first.auth_token
  end

  def from_number
    from_number ||= ::TwilioConfig.first.twilio_number
  end
end