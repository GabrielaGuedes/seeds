class GenerateJitsiCode

  include Interactor

  def call
    context.jitsi_code = rand(100000000000..1000000000000)
  end
end
