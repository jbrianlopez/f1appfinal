/* global $*/

$( document ).ajaxComplete(function() {
    $(".se-pre-con").fadeOut("slow");
  $('#results').addClass("animated bounceInUp data-wow-duration='2s' data-wow-delay='3.6s'");
});


// AJAX RESULTS LOGIC
$(document).ready(function(){
var driverchoice = window.location.search.split('=')[1];

$.ajax({
  url: 'https://formula1app.herokuapp.com/drivers/' + driverchoice,
}).done(function(data){
  console.log('bye')

  $('#driversSummary').append("<p>" + "Name: " + data.drivers[0].given_name + " " +
 data.drivers[0].family_name + "<br>" + "Nationality: " + data.drivers[0].nationality + "<br>" + "Races: " +
 (data.drivers[0].races.length - 1))
 //


  for (var i = 0; i < (data.drivers[0].races.length - 1); i++) {
    console.log(data.drivers[0].races.length - 1)
    $( "<div class='col-lg-6'><strong>" + data.drivers[0].races[i].Season + " " + data.drivers[0].races[i].raceName + " Round " + data.drivers[0].races[i].Round + "<p>" + "</strong>" + "Grid Position: " + data.drivers[0].races[i].results[0].grid + "<p>"
    + "Final Position: " + data.drivers[0].races[i].results[0].positionText + "<p>"
    + "Laps: " + data.drivers[0].races[i].results[0].laps + "<p>"
    + "Status: " + data.drivers[0].races[i].results[0].status + "<p>"
    + "Points: " + data.drivers[0].races[i].results[0].points + "<p>"  +
    "</div>" ).appendTo( ".races" )

  }

  console.log(data.drivers[0].races[0].results[0].status)
})
})

// THIS IS FILTER TESTING
$(document).ready(function(){
    $("#filter").keyup(function(){

        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;

        // Loop through the list
        $("div").each(function(){

            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();

            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });

        // Update the count
        var numberItems = count;
           if(($(this).val().length) === 0) {
             $('#filter-count').text("");

               $(".se-pre-con").fadeOut("slow");

           }
           else {
        $("#filter-count").text("Number of Results = "+count);
      }
    });
});
