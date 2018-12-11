
$(function() {
function buildHTML(user) {
   var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.user_name}</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.user_id}" data-user-name="${user.user_name}">追加</a>
                </div>`
    return html;
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $("#user-search-result").children().remove();
    $.ajax({
      type: 'GET',
      url: '/users',
      // 飛ばしたい先
      data: { keyword: input },
      dataType: 'json'
    })

   .done(function(users) {
    $('#user-search-field').empty();
    if (users.length !== 0) {
     users.forEach(function(user){
      // each文
       html = buildHTML(user);
       $("#user-search-result").append(html);
     });
    }else {
      var noUserHtml = `<div class="chat-group-user clearfix">no results</div>`
      $("#user-search-result").append(noUserHtml);
    }
   })
    .fail(function(){
      alert('error');
    })
  });

  function makeHTML(id,name) {
    var html = `<div id='chat-group-users'>
                <div class='chat-group-user clearfix' id='chat-group-user-${id}'>
                <input name='chat_group[user_ids][]' type='hidden' value='${id}'>
                <p class='chat-group-user__name'>${name}</p>
                <a class="user-search-remove chat-group-user__btn chat-group-user__btn--remove" data-user-id="${id}">削除</a>
                </div>
                </div>`
    return html;
  }

  $(document).on('click', '.chat-group-user__btn--add', function() {
    var id = $(this).data('userId');
    var name = $(this).data('userName');
    var newHTML = makeHTML(id, name);
    $('#chat-group-users').append(newHTML);
    $(this).parent('.chat-group-user').remove();
  });

  $('#chat-group-users').on('click', '.user-search-remove', function() {
    var id = $(this).data('userId');
    $(`#chat-group-user-${id}`).remove();
  })
});
