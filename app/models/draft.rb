class Draft < ApplicationRecord
  # Associations
  has_many :memberships, dependent: :destroy
  has_many :users, through: :memberships
  belongs_to :manager, class_name: 'User', foreign_key: 'user_id'

  # Validations
  validates :name, presence: true, uniqueness: true
  validates :manager, presence: true

  # Callbacks
  after_create :create_manager_memebership

  # Scopes
  scope :joinable_drafts, -> (manager) { joins(:memberships).where.not(user_id: manager.id) }
  # scope :joined_drafts, -> (manager) { joins(:memberships).where(user_id: manager.id) }

  private

  def create_manager_memebership
    self.memberships.create!(user: manager)
  end
end
