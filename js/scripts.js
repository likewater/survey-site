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

    $("#musicAns").text("Favorite Music: " + favMusic);
    $("#foodAns").text("Favorite Food: " + favFood);
    $("#transAns").text("Transmission Preference: " + transPreference);
    $("#colorAns").text("Favorite Color ");
    $("#colorAns").css('color', favoriteColor);
    $("#bornAns").text("Date of Birth: " + dateOfBirth);
    $("#mediaAns").text("Favorite Media Type: " + mediaType);
    // console.log(favMusic);
    // console.log(favFood);
    // console.log(transPreference);
    // console.log(favoriteColor);
    // console.log(dateOfBirth);
    // console.log(mediaType);
  });
  $("#submit-btn").click(function(){
    $("#answers").show();
    $("#questions").hide();
  });
  $("#reset-btn").click(function(){
    location.reload();
  });
});
