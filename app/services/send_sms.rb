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
    @client ||= Twilio::REST::Client.new(account_sid, auth_token)    
  end

  def account_sid
    @account_sid = "AC64bce6ae1e56c8719381be0edc429911"
  end

  def auth_token
    @auth_token = "56c85bf118056066a9c1059be5cad2ff"
  end

  def from_number
    @from_number = "+15709895319"
  end
end
