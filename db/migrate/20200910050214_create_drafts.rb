class CreateDrafts < ActiveRecord::Migration[6.0]
  def change
    create_table :drafts do |t|
      t.string :name, null: false, index: true
      t.references :user, null: false, foreign_key: true, index: true
    end
  end
end
