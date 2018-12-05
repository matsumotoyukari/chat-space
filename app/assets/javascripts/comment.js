$(document).on('turbolinks:load', function() {
  function buildHTML(comment){
    // comment = data
    var html = `<div class="message" id=${ comment.user_id }>
                <div class="sent-name">
                  ${ comment.user_name }
                </div>
                <div class="sent-day">
                  ${ comment.created_at }
                </div>
                <div class="sent-naiyo">
                  ${ comment.content }
                </div>
                </div>`
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
      // data = dataOrange
      // console.log(data)
      var html = buildHTML(data);

      // console.log(html)
      $('.chat').append(html)
      $('.textbox').val('')
      var height = $('.test').innerHeight()
      $('.chat').animate({scrollTop: height}, 500, 'swing');
    })
    .fail(function(){
      alert('error');
    })
    //ここから
    .always(function(){
      $(".form__submit").removeAttr("disabled");
    });
  })
})




// $(function(){
//     $('.form__submit').click(function(){
//         $('body').animate({
//           scrollTop: $(document).height()
//         },1500);
//         return false;
//     });
// });


// POST   /groups/:group_id/messages(.:format) messages#create


 // product_reviews POST   /products/:product_id/reviews(.:format)     reviews#create
 // url: '/products/search',




    // .done(function(){
    //   // var html = buildHTML(data);
    //   console.log("成功成功")
    //   // $('.comments').append(html)
    //   // $('.textbox').val('')
    // })
    // .fail(function(){
    //   console.log("失敗")
    // })















