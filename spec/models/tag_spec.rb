require 'rails_helper'

describe Tag do
  context 'associations' do
    it { should have_many(:articles) }
    it { should have_many(:taggings) }
  end
end