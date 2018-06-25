json.extract! @user, :username, :id, :image_url


# this should be a different json view to separate 
# session views from the user profile views.

# json.following_ids do
#   user.get_following
# end

# json.followed_by_ids do
#   user.get_followed_by
# end

# json.affection do
#   user.get_affection
# end