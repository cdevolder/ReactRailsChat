Message.destroy_all
Channel.destroy_all
User.destroy_all


channels = ['Channel1', 'Channel2', 'Channel3', 'Channel4', 'Channel5']
channels.each { |channel| Channel.create!(name: channel)}

user = User.create!(
  email: 'chris@gmail.com',
  password: 'topsecret'
  )

user2 = User.create!(
  email: 'james@gmail.com',
  password: 'topsecret'
  )

Message.create!(
  content: 'Hello James',
  user: user,
  channel: Channel.first
)
Message.create!(
  content: "Hi Chris, how're you doing?",
  user: user2,
  channel: Channel.first
)
