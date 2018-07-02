class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :poster_id, null: false
      t.string :url, null: false
      t.date :date_taken
      t.string :category, null: false

      t.timestamps
    end
    add_index :photos, :poster_id
  end
end
