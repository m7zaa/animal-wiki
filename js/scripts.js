$(document).ready(function(){
  $(".btn").click(function(event){
    if(event.target.id === "simpona-btn"){
      $("#secret-simpona").toggle();
    }
    else if(event.target.id === "lemur-btn"){
      $("#secret-lemur").toggle();
    }
    else{
      $("#secret-sloth").toggle();
    }
  });
});
