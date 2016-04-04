class Article < ActiveRecord::Base
  belongs_to :author, class_name: 'User'
  has_many :favorites
  has_many :users_who_favorited, through: :favorites, source: :user
  has_many :taggings
  has_many :tags, through: :taggings
  has_many :comments
  has_many :users_who_commented, through: :comments, source: :author

  def as_json(options = {})
    super(options).merge(comments: comments, tags: tags)
  end
end
