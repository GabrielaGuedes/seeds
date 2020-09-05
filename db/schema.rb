# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_05_222738) do

  create_table "invites", force: :cascade do |t|
    t.string "jitsi_code"
    t.string "book_url"
    t.integer "inviter_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["inviter_id"], name: "index_invites_on_inviter_id"
  end

  create_table "invites_students", id: false, force: :cascade do |t|
    t.integer "invite_id"
    t.integer "student_id"
    t.index ["invite_id"], name: "index_invites_students_on_invite_id"
    t.index ["student_id"], name: "index_invites_students_on_student_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "name"
    t.string "phone_number"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "parent_phone_number"
    t.json "book_invites", default: {}
  end

  create_table "twilio_configs", force: :cascade do |t|
    t.string "account_sid"
    t.string "auth_token"
    t.string "twilio_number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "invites", "students", column: "inviter_id"
end
