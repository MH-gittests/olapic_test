$(function(){
  //set up materialize carousel
  $('.carousel.carousel-slider').carousel({full_width: true});
  //make api request
  $.ajax({url:"https://photorankapi-a.akamaihd.net/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.0", success: function(result){
    var embedded = result.data._embedded;
    var caro = []
    //iterative over the images and put them into an array with html formatting
    for(var key in embedded){
        var htm = '<div class=".carousel_pic"><img = src="' + embedded[key].images.square + '" /></div>'
        caro.push(htm);

    }
    //shove the html elements into the correct carousel slide, so that 6 to a page
    for(var i = 0; i < caro.length; i++){
        if(i < 6){
          console.log(i + "is less than ")
        }
        else if(i < 12){
            console.log(i + "is less than 12")
          }
        else if(i < 18){
            console.log(i + "is less than 18")
          }
      }


  }});

  $('.carousel_pic').click(function(){

  })
})
