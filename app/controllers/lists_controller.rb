class ListsController < ApplicationController
    before_action :set_list, only: [:show, :update, :destroy]
    skip_before_action :verify_authenticity_token

    def index
        @lists = List.all
        respond_to do |format|
            format.json { render json: @lists.to_json }
            format.html 
        end
    end

    def create
        @list = List.create!(list_params)
        respond_to do |format|
            format.json { render json: @list.to_json, status: :created }
        end
    end
    private

    def list_params
        params.permit(:title)
    end

    def set_list
        @todo = Todo.find(params[:id])
    end
end
