/* global $*/

$.ajax({
  url: 'https://formula1app.herokuapp.com/drivers/alonso',
}).done(function(data){
  console.log('bye')

  $('#driversSummary').append("<p>" + "Name: " + data.drivers[0].given_name + " " +
 data.drivers[0].family_name + "<br>" + "Nationality: " + data.drivers[0].nationality + "<br>" + "Races: " +
 (data.drivers[0].races.length - 1))
 //
 //  $('#driversStart').append(data.drivers[0].races[0].Round + "<br>" + data.drivers[0].races[0].Season + "<br>" +
 //  data.drivers[0].races[0].raceName + "<br>" )

  for (var i = 0; i < (data.drivers[0].races.length - 1); i++) {
    console.log(data.drivers[0].races.length - 1)
    $( "<div><strong>" + data.drivers[0].races[i].Season + " " + data.drivers[0].races[i].raceName + " Round " + data.drivers[0].races[i].Round + "<p>" + "</strong>" + "Grid Position: " + data.drivers[0].races[i].results[0].grid + "<p>"
    + "Final Position: " + data.drivers[0].races[i].results[0].positionText + "<p>"
    + "Laps: " + data.drivers[0].races[i].results[0].laps + "<p>"
    + "Status: " + data.drivers[0].races[i].results[0].status + "<p>"
    + "Points: " + data.drivers[0].races[i].results[0].points + "<p>"  +
    "</div>" ).appendTo( ".races" )

    // if (data.drivers[i].races[0].results[0].positionText.parseInt() === undefined)

// position: 19,
// points: 0,
// positionText: "R",
// grid: 19,
// laps: "24",
// status: "Spun off"
    // $('#race'+ i).append(data.drivers[i].races[0].Round)
    // $('#name'+ i).append(data.drivers[i].races[0].raceName)
  }
      // David Example
      // $('#name'+ i).append(data.drivers[i].races[0].raceName)
  // data.drivers[0].races[0].raceName
  // var flavors = data.map(d => d.flavor)
  // var filteredPlain = flavors.filter(x => x == "Plain");
  console.log(data.drivers[0].races[0].results[0].status)
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
        $("#filter-count").text("Number of Results = "+count);
    });
});