$(function(){
  //set up materialize carousel
  $('.carousel.carousel-slider').carousel({full_width: true, indicators: true});

  $('.arrow-right').click(function(){
    console.log("click");
  })

  $('.arrow-left').click(function(){
    console.log("left")
  })
  //make api request
  $.ajax({url:"https://photorankapi-a.akamaihd.net/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.0", success: function(result){
    var embedded = result.data._embedded;
    var auth = "?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.0"
    //var caro = []
    //iterative over the images and put them into an array with html formatting
    for(var key in embedded){
      var image = embedded[key].images.thumbnail + auth
        var htm = '<div class="card">' +
                        '<div class="card-image">' +
                          '<img = src=' + image + '/>' +
                          '<span class="card-title">Card Title</span>'
                        '</div>' +
                  '</div>'
        //caro.push(htm);
        if(key < 6){
            $("#carousel_container_one").append(htm);
        }
        else if(key < 12){
            $("#carousel_container_two").append(htm);
          }
        else if(key < 18){
            $("#carousel_container_three").append(htm);
          }
    }
    //shove the html elements into the correct carousel slide, so that 6 to a page



  }});

  $('.carousel_pic').click(function(){

  })
})
