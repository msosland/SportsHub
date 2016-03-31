require 'rails_helper'

describe Tagging do
  context 'associations' do
    it { should belong_to(:article) }
    it { should belong_to(:tag) }
  end
end