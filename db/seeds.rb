# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

if Rails.env.development?
  # clean up the db
  User.destroy_all

  User.create(
    username: 'raafa166',
    email: 'raafa166@gmail.com',
    password: 'Test123'
  )

  10.times do
    User.create(
      username: Faker::Twitter.unique.screen_name,
      email: Faker::Internet.unique.email,
      password: Faker::Internet.password
    )
  end

  User.find_each do |manager|
    Draft.create(
      name: Faker::Team.unique.name,
      manager: manager
    )
  end
end

