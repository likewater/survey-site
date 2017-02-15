// Business logic:
var favMusic;
var favFood;
var transPreference;
var favoriteColor;
var dateOfBirth;
var mediaType;

// UI logic:

$(document).ready(function(){
  $("#form-complete").submit(function(){
    event.preventDefault();

    favMusic = $("#musInput").val();
    favFood = $("#foodInput").val();
    transPreference = $("input:radio[name=transType]:checked").val();
    favoriteColor = $("#color").val();
    dateOfBirth = $("#born").val();
    mediaType = $("#mediaType").val();
    console.log(favMusic);
    console.log(favFood);
    console.log(transPreference);
    console.log(favoriteColor);
    console.log(dateOfBirth);
    console.log(mediaType);
  });
});
