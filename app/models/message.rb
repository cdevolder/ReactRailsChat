class Message < ApplicationRecord
  belongs_to :user
  belongs_to :channel

  validates :content, presence:true

  def as_json(options = {})
    {
      id: id,
      author: user.email,
      content: content,
      created_at: created_at,
      channel: channel.name
    }
  end
end
