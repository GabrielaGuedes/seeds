class CreateTwilioConfigs < ActiveRecord::Migration[6.0]
  def change
    create_table :twilio_configs do |t|
      t.string :account_sid
      t.string :auth_token
      t.string :twilio_number

      t.timestamps
    end
  end
end
