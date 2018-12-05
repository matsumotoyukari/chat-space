#   json.text  @comment.text
#   json.user_id  @comment.user.id
#   json.user_name  @comment.user.nickname


# json.array! @products do |product|
#   json.id product.id
#   json.title product.title
#   json.image product.image_url
#   json.detail product.detail
# end
json.user_id  @message.user.id
json.user_name  @message.user.name
json.created_at  @message.created_at
json.content  @message.content
json.group_id  @message.group_id
json.image  @message.image

# data{user_id, user_name, cre...} -
