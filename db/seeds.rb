# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Track.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('tracks')

  puts "Creating users..."
  puts "Creating tracks..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    username: 'Demo-lition', 
    email: 'demo@user.io', 
    password: 'password'
  )

  # More users
  10.times do 
    User.create!({
      username: Faker::Internet.unique.username(specifier: 3),
      email: Faker::Internet.unique.email,
      password: 'password'
    }) 
  end

  artist1 = Artist.create!(name: 'Keshi')
  artist2 = Artist.create!(name: 'John OFA Rhee')
  artist3 = Artist.create!(name: 'DPR LIVE')

  album1 = Album.create!(title: 'GABRIEL', year: '2022', artist_id: 1)
  track1 = Track.create!(title: 'GET IT', year: '2022', duration: '2:31', album_id: 1, artist_id: 1)
  track2 = Track.create!(title: 'SOMEBODY', year: '2022', duration: '2:44', album_id: 1, artist_id: 1)
  track3 = Track.create!(title: 'WESTSIDE', year: '2022', duration: '3:04', album_id: 1, artist_id: 1)
  track4 = Track.create!(title: 'TOUCH', year: '2022', duration: '3:25', album_id: 1, artist_id: 1)
  track5 = Track.create!(title: 'MILLI', year: '2022', duration: '2:15', album_id: 1, artist_id: 1)
  track6 = Track.create!(title: 'PÈRE', year: '2022', duration: '0:48', album_id: 1, artist_id: 1)
  track7 = Track.create!(title: 'HELL/HEAVEN', year: '2022', duration: '2:40', album_id: 1, artist_id: 1)
  track8 = Track.create!(title: 'ANGOSTURA', year: '2022', duration: '2:51', album_id: 1, artist_id: 1)
  track9 = Track.create!(title: 'UNDERSTAND', year: '2022', duration: '2:30', album_id: 1, artist_id: 1)
  track10 = Track.create!(title: 'LIMBO', year: '2022', duration: '3:32', album_id: 1, artist_id: 1)
  track11 = Track.create!(title: 'ANGEL', year: '2022', duration: '4:07', album_id: 1, artist_id: 1)
  track12 = Track.create!(title: 'GABRIEL', year: '2022', duration: '2:08', album_id: 1, artist_id: 1)

  album2 = Album.create!(title: 'bleeding in sunset blvd.', year: '2021', artist_id: 2)
  track13 = Track.create!(title: 'FRIDAY NIGHTS (with bottle gods)', year: '2021', duration: '4:20', album_id: 2, artist_id: 2 )
  track14 = Track.create!(title: 'DAYDREAM', year: '2021', duration: '3:43', album_id: 2, artist_id: 2 )
  track15 = Track.create!(title: 'STAY', year: '2021', duration: '3:01', album_id: 2, artist_id: 2 )
  track16 = Track.create!(title: 'NO THING', year: '2021', duration: '3:11', album_id: 2, artist_id: 2 )
  track17 = Track.create!(title: 'SHOULD I', year: '2021', duration: '4:01', album_id: 2, artist_id: 2 )
  track18 = Track.create!(title: 'CRAZY-Studio Live Ver.', year: '2021', duration: '3:30', album_id: 2, artist_id: 2 )
  track19 = Track.create!(title: 'BETTER THAN HE CAN', year: '2021', duration: '3:27', album_id: 2, artist_id: 2 )
  track20 = Track.create!(title: 'BABY BABY', year: '2021', duration: '2:45', album_id: 2, artist_id: 2 )
  track21 = Track.create!(title: 'GONE BY THE MORNING', year: '2021', duration: '2:09', album_id: 2, artist_id: 2 )
  track22 = Track.create!(title: 'BLAME', year: '2021', duration: '3:43', album_id: 2, artist_id: 2 )
  tracK23 = Track.create!(title: 'WAITING', year: '2021', duration: '4:14', album_id: 2, artist_id: 2 )
  track24 = Track.create!(title: 'SLUMBER', year: '2021', duration: '4:26', album_id: 2, artist_id: 2 )

  album3 = Album.create!(title: 'Coming To You Live', year: '2017', artist_id: 3)
  track25 = Track.create!(title: 'Cheese & Wine', year: '2017', duration: '3:13', album_id: 3, artist_id: 3)
  track26 = Track.create!(title: 'Laputa (Feat. Crush)', year: '2017', duration: '3:37', album_id: 3, artist_id: 3)
  track27 = Track.create!(title: 'Right Here Right Now (Feat. LOCO & JAY PARK)', year: '2017', duration: '3:33', album_id: 3, artist_id: 3)
  track28 = Track.create!(title: 'Know Me (Feat. DEAN)', year: '2017', duration: '3:24', album_id: 3, artist_id: 3)
  track29 = Track.create!(title: 'Please (Feat. KIM HYO EUN, G2 & DUMBFOUNDEAD)', year: '2017', duration: '3:05', album_id: 3, artist_id: 3)
  track30 = Track.create!(title: 'Interlude', year: '2017', duration: '0:34', album_id: 3, artist_id: 3)
  track31 = Track.create!(title: 'To Myself', year: '2017', duration: '3:33', album_id: 3, artist_id: 3)

  puts "Done!"
end