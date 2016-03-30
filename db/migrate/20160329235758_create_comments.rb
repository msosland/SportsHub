class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :author, null: false
      t.references :article, null: false

      t.timestamps null: false
    end
  end
end
