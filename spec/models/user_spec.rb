require 'rails_helper'

describe User do
  context 'associations' do
    it { should have_many(:written_articles) }
    it { should have_many(:favorites) }
    it { should have_many(:comments) }
    it { should have_many(:articles_commented_on)}
  end
end