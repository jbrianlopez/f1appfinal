/* global $*/
// $(document).ready(function(){
$.ajax({
  url: 'https://formula1app.herokuapp.com/drivers/',
}).done(function(data){
  console.log('bye')

  for (var i = 0; i <= (data.drivers.length - 1); i++) {
    console.log(data.drivers.length)
    console.log('huh')
   $('#races').append("<p>" + "Name: " + data.drivers[i].given_name + " " +
 data.drivers[i].family_name + "<br>" + "Nationality: " + data.drivers[i].nationality + "<br>" + "Races: " +
 (data.drivers[i].races.length - 1)) + "<br>"
// .appendTo( "body" )

}

      // David Example
      // $('#name'+ i).append(data.drivers[i].races[0].raceName)
  // data.drivers[0].races[0].raceName
  // var flavors = data.map(d => d.flavor)
  // var filteredPlain = flavors.filter(x => x == "Plain");
  console.log(data.drivers[0].races[0].results[0].status)
  // console.log(flavors);
  // console.log(filteredPlain);
})
// });


// THIS IS FILTER TESTING
$(document).ready(function(){
    $("#filter").keyup(function(){

        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;

        // Loop through the list
        $("div p").each(function(){

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
