module Api
  module V1
    class DraftsController < ApplicationController
      def index
        render json: {
          managed_drafts: serializer(managed_drafts),
          joinable_drafts: serializer(joinable_drafts),
          joined_drafts: serializer(joined_drafts)
        }
      end

      private

      # Used For compound documents with fast_jsonapi
      def options
        @options ||= { include: %i[users] }
      end

      # Get all my drafts
      def managed_drafts
        @managed_drafts ||= current_user.managed_drafts
      end

      def joinable_drafts
        @joinable_drafts ||= Draft.joinable_drafts(current_user)
      end

      def joined_drafts
        @joined_drafts ||= current_user.drafts
      end

       # Strong params
       def draft_params
        params.require(:draft).permit(:name, :manager)
      end

      # fast_jsonapi serializer
      def serializer(record)
        DraftSerializer
        .new(record)
        .serializable_hash
      end

      # Errors
      def errors(record)
        { errors: record.errors.messages }
      end
    end
  end
end