require 'rails_helper'

describe Article do
  context 'associations' do
    it { should belong_to(:author) }
    it { should have_many(:comments)}
    it { should have_many(:users_who_commented)}
    it { should have_many(:taggings)}
    it { should have_many(:tags)}
    it { should have_many(:favorites)}
    it { should have_many(:users_who_favorited)}
  end
end