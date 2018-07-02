class Photo < ApplicationRecord
  validates :poster_id, :title, 
    :description, :url, :category, presence: true
  
  validates :url, uniqueness: true

  belongs_to :poster,
  primary_key: :id,
  foreign_key: :poster_id,
  class_name: :User

  has_many :likes
  # belongs to a gallery?
end
