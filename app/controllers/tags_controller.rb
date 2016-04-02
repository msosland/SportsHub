class TagsController < ApplicationController

  def search
    tag = Tag.where(name: params[:keyword]).first
    if tag
      render json: tag.articles.ordered_json
    else
    end
  end
end