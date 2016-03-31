class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :authentication_keys => [:username]
  devise :registerable, :recoverable, :rememberable, :trackable, :validatable

  has_many :written_articles, class_name: 'Article', foreign_key: :author_id

  has_many :comments, foreign_key: :author_id

  has_many :favorites

  has_many :articles_commented_on, through: :comments, source: :article
end
