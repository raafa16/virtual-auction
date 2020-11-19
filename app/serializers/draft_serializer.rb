class DraftSerializer
  include JSONAPI::Serializer
  attributes :name, :manager

  has_many :users
end
