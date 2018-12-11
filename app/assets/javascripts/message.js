$(function(){
  function buildHTML(message){
    var MessageImage = (message.image) ? `<img src="${message.image}">` : ``
    var html = `<div class="message" id=${ message.id }>
                <div class="sent-name">
                ${ message.user_name }
                </div>
                <div class="sent-day">
                ${ message.time }
                </div>
                  <div class="sent-naiyo">
                  ${ message.content }
                  </div>
                ${ MessageImage }
                </div>`;
    return html;
  }

    // 最新のメッセージが表示されるように自動でスクロールする
  function autoScrollToBottom(){
    var target = $('.chat-main__body--messages-list').height();
    $('.chat').scrollTop(target);
  }

  setInterval(autoUpdate,5000);
  function autoUpdate(){
  // メッセージが送られたら
    var lastMessageId = $('.message:last')[0].id
    console.log(lastMessageId)
    if (location.href.match(/\/groups\/\d+\/messages/)) {
      $.ajax({
        type: 'GET',
        url: location.href,
        dataType: 'json',
        data: { id: lastMessageId }
      })

      .done(function(data) {
        data.forEach(function(data){
          var html = buildHTML(data);
          console.log(html)
          $('.chat').append(html);
          var height = $('.test').innerHeight()
          $('.chat').animate({scrollTop: $('.chat')[0].scrollHeight}, 'fast');
        })
      })
      .fail(function () {
        alert('error');
      });
    }
    }
});
