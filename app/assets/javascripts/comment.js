$(document).on('turbolinks:load', function() {
  function buildHTML(message){
    var MessageImage = (message.image) ? `<img src="${message.image}">` : ``
    var html = `<div class="message" id=${ message.id }>
                <div class="sent-name">
                ${ message.user_name }
                </div>
                <div class="sent-day">
                ${ message.created_at }
                </div>
                  <div class="sent-naiyo">
                  ${ message.content }<br>
                  ${ MessageImage }
                  </div>
                </div>`;
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat').append(html);
      $('.textbox').val('');
      var height = $('.test').innerHeight()
      $('.chat').animate({scrollTop: $('.chat')[0].scrollHeight}, 'fast');
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    })

    .always(function(){
      $(".form__submit").removeAttr("disabled");
    });
  })
})
