class DraftSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :manager

  has_many :users
end
