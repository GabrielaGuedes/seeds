module Mutations
  class AcceptFriendInvite < BaseMutation

    argument :book_url, String, required: true

    field :jitsi_code, String, null: false

    def resolve(book_url:)
      @book_url = book_url
      
      {
        jitsi_code: accept_result.jitsi_code
      }
    end

    private

    def accept_result
      @accept_result ||= UpdateAccepterBookInvites.call(accepter: accepter, book_url: @book_url)
    end

    def accepter
      @accepter ||= Student.first #TODO: implement current student
    end
  end
end