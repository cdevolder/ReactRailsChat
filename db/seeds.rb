Message.destroy_all
Channel.destroy_all
User.destroy_all


channel = Channel.create!(name: 'Exemple Channel')

user = User.create!(
  email: 'john@gmail.com',
  password: 'topsecret',
  name: 'John Smith'
  )

user2 = User.create!(
  email: 'james@gmail.com',
  password: 'topsecret',
  name: 'James Bond'
  )

Message.create!(
  content: 'Hello James',
  user: user,
  channel: channel
)
Message.create!(
  content: "Hi John, how're you doing?",
  user: user2,
  channel: channel
)
Message.create!(
  content: 'Very fine! How about you',
  user: user,
  channel: channel
)
Message.create!(
  content: "I'm good, had some trouble to contact you these days...",
  user: user2,
  channel: channel
)
Message.create!(
  content: 'Yeah I know, I struggled to find a good messaging app.',
  user: user,
  channel: channel
)
Message.create!(
  content: "Here you are, now you got one!",
  user: user2,
  channel: channel
)
Message.create!(
  content: 'Yeah finally...',
  user: user,
  channel: channel
)
Message.create!(
  content: "Did you know that you can create your own channel on the right?",
  user: user2,
  channel: channel
)
Message.create!(
  content: "Yes but I haven't tried it yet",
  user: user,
  channel: channel
)
Message.create!(
  content: "This is really awesome!",
  user: user2,
  channel: channel
)
Message.create!(
  content: "Gotta go, see you soon James",
  user: user,
  channel: channel
)
Message.create!(
  content: "Ok! It's always a pleasure :)",
  user: user2,
  channel: channel
)
