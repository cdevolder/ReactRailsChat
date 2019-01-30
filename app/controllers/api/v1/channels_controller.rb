class Api::V1::ChannelsController < ApplicationController

  def index
    channels = Channel.all.order('name')
    render json: channels
  end

  def create
    channel = Channel.create!(
      name: params[:content],
    )
    channel.save
    render json: channel
  end

end
