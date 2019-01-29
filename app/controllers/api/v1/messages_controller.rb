class Api::V1::MessagesController < ApplicationController
  before_action :set_channel

  def index
    messages = @channel.messages.order('created_at ASC')
    render json: messages
  end

  def create
    message = Message.create!(
      content: params[:content],
      user: current_user,
      channel: @channel
    )
    message.save
    render json: message
  end

  private

  def set_channel
    @channel = Channel.find_by(name: params[:channel_id])
  end
end
