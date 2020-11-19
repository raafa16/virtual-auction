class Membership < ApplicationRecord
  belongs_to :user
  belongs_to :draft

  validates :user, presence: true
  validates :draft, presence: true
end
