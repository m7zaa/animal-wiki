$(document).ready(function(){
  $(".btn").click(function(event){
    if(event.target.id === "simpona-btn"){
      $("#secret-simpona").toggle();
      $("#secret-lemur").hide();
      $("#secret-sloth").hide();

    }
    else if(event.target.id === "lemur-btn"){
      $("#secret-lemur").toggle();
      $("#secret-simpona").hide();
      $("#secret-sloth").hide();

    }
    else{
      $("#secret-sloth").toggle();
      $("#secret-lemur").hide();
      $("#secret-simpona").hide();

    }
  });
});
