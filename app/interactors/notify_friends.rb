class NotifyFriends

  include Interactor

  def call
    notify_friends
  end

  private

  def notify_friends
    context.students.each do |student|
      SendSms.call(phone_number: student.phone_number, message: message)
    end
  end

  def message #TODO: extract copy to adequated place
    "#{inviter_first_name} te chamou para ler um livro com ele! Acesse agora: #{context.book_url}"
  end

  def inviter_first_name
    context.inviter.first_name
  end
end