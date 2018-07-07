class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.poster_id = current_user.id
    @user = User.find_by(id: @photo.poster_id)
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def index
    @photos = Photo.all
  end

  def show
    @photo = Photo.find_by(id: params[:id])
    if @photo
      render :show
    else
      render ["Seems like this photo doesn't exist"], status: 404
    end
  end

  def update
    @photo = Photo.find_by(id: params[:id])
    if @photo
      if @photo.update(photo_params)
        render :show
      else
        render json: @photo.errors.full_messages, status: 422
      end
    else
      render json: ["Seems like this photo doesn't exist"], status: 404
    end
  end

  def destroy
    @photo = Photo.find_by(id: params[:id])
    if @photo
      @photo.destroy
      render :show
    else
      render json: ["Seems like this photo doesn't exist"], status: 404
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:poster_id, :title, :description, :url, :category)
  end
end
