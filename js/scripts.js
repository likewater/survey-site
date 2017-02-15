// Business logic:
var favMusic;
var favFood;
var transPreference;


// UI logic:

$(document).ready(function(){
  $("#form-complete").submit(function(){
    event.preventDefault();

    var favMusic = $("#musInput").val();
    var favFood = $("#foodInput").val();
    var transPreference = $("input:radio[name=transType]:checked").val();
    console.log(favMusic);
    console.log(favFood);
    console.log(transPreference);
  });
});
