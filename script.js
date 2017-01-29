$(function(){
  //set up materialize carousel
  $('.carousel.carousel-slider').carousel({full_width: true, indicators: true});

  $('.arrow-right').click(function(){
    $('.carousel').carousel('next');
  })

  $('.arrow-left').click(function(){
    $('.carousel').carousel('prev');
  })

  //add in the modal on click
  /*
    $('.card-image').on('click'){

  }
  */
  var embedded
  //make api request
  // % isolate the variables for use and auth before call to make code more re-usable
  var customerID  = "215757"
  var auth = "?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.0"
  var mediaQuery = "media/recent"
  var QueryUrl = "https://photorankapi-a.akamaihd.net/customers/" + customerID + "/" + mediaQuery + auth;


var users = [];
//  $.ajax({url:"https://photorankapi-a.akamaihd.net/customers/215757"})
var request = $.ajax({url:QueryUrl, success: function(result){
     return embedded = result.data._embedded;





  }});
function setPics(mediaJSON){

  for(var key in mediaJSON){
    var image = mediaJSON[key].images.thumbnail + auth
    var words = mediaJSON[key].caption;
    words = words.slice(0,140);
    words = words + '...'
    console.log(words);
    var userIndex = (Number(key))
      var htm = '<div class="card">' +
                      '<div class="card-image">' +
                        '<img = src=' + image + '/>' +
                      '</div>' +
                      //to add in username  '<span class="card-title></span>' +
                      '<div class="card-content">' +  words + ' </div>'

                '</div>'

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
}

/*
function getUsers(Json){
  for (key in Json){
  var sourceID = Json[key]._embedded.uploader._links.self.href
  var userUrl = "https:" + sourceID + auth
   var userReq = $.ajax({url:userUrl, success: function(result){
    var user = result.data.name
    //if sorting may change make into an key pair object
    users.push(user);
  }})

}} */
request.done(function(){
    //getUsers(embedded);
    setPics(embedded);
})

})
