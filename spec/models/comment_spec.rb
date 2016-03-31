require 'rails_helper'

describe Comment do
  context 'associations' do
    it { should belong_to(:article) }
    it { should belong_to(:author) }
  end
end
