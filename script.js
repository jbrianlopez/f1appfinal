/* global $*/

$.ajax({
  url: 'https://formula1app.herokuapp.com/drivers/',
}).done(function(data){
  console.log('bye')

  for (var i = 0; i <= (data.drivers.length - 1); i++) {
    console.log(data.drivers.length)
    console.log('huh')
    $( "<div>" + $('#races').append("<div id='driversSummary'><b><p>" + "Name: " + data.drivers[i].given_name + " " +
 data.drivers[i].family_name + "<br>" + "Nationality: " + data.drivers[i].nationality + "<br>" + "Races: " +
 (data.drivers[i].races.length - 1)) +
"</div>" + "<br>" )
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


jQuery(document).ready(function($){

$('.live-search-list div').each(function(){
$(this).attr('data-search-term', $(this).text().toLowerCase());
});

$('.live-search-box').on('keyudiv', function(){

var searchTerm = $(this).val().toLowerCase();

    $('.live-search-list div').each(function(){

        if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
            $(this).show();
        } else {
            $(this).hide();
        }

    });

});

});
