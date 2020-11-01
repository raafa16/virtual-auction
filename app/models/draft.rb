class Draft < ApplicationRecord
    # Associations
    has_many :memberships
    has_many :users, through: :memberships
    belongs_to :manager, class_name: 'User', foreign_key: 'user_id'

    # Validations
    validates :name, presence: true, uniqueness: true
    validates :manager, presence: true
end
