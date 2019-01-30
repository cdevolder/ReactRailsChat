class Channel < ApplicationRecord
  has_many :messages

  validates :name, presence:true, uniqueness: true

  def as_json(options = {})
    {
      id: id,
      name: name
    }
  end
end
