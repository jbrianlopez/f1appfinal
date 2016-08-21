/* global $*/
// $(document).ready(function(){
$.ajax({
  url: 'https://formula1app.herokuapp.com/drivers/',
}).done(function(data){
  console.log('bye')

  for (var i = 0; i <= (data.drivers.length - 1); i++) {
    console.log(data.drivers.length)
    console.log('huh')
   $('#races').append("<div>" + "Name: " + data.drivers[i].given_name + " " +
 data.drivers[i].family_name + "<br>" + "Nationality: " + data.drivers[i].nationality + "<br>" + "Races: " +
 (data.drivers[i].races.length - 1)+ "<br>" + "<a href='file:///Users/brianlopez/Desktop/f1/f1plain/index.html?driver=" + data.drivers[i].driverId + "'>link</a>" + "</div>")
// .appendTo( "body" )

}


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
        $("div div").each(function(){

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
           }
           else {
        $("#filter-count").text("Number of Results = "+count);
      }
    });
});

//
// // TESTING FOR API CALLS
// $(document).ready(
//   function () {
//     function getParameterByName (name, url) {
//       if (!url) url = window.location.href
//       name = name.replace(/[\[\]]/g, '\\$&')
//       var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
//       var results = regex.exec(url)
//       if (!results) return null
//       if (!results[2]) return ''
//       return decodeURIComponent(results[2].replace(/\+/g, ' '))
//     }
//
//     var serverURL = 'http://localhost:3000/'
//     var currentUser = null || window.localStorage.id
//     var id = getParameterByName('id')
//
//
//     $('#scroll').scrollIndicator({
//
//       // Support for IE8 and IE9 browsers.
//       ieSupport: true,
//       // Re-calculate values on window.resize event.
//       bindResize: true,
//       // React to changes in DOM model.
//       bindDOMSubtreeModified: false,
//       // Enable smooth animation
//       animated: true,
//       // Use of progress element. Disable for CSS3 animation.
//       html5: false
//     })
//
//     // if (id) then run this
//     if (id) {
//       $.ajax({
//         type: 'GET',
//         url: serverURL + 'drivers/' + id,
//         dataType: 'json'
//       }).done(function (data) {
//         console.log(data)
//         $('#name').append(data.drivers[i].given_name)
//         $('#article-body').append(data.article.html)
//         $('#source').append('<a href="' + data.article.url + '">SOURCE</a>')
//         data.article.tldr.forEach(function (tldr) {
//           $('#tldr').append('<li>' + tldr.summary + '</li>')
//         })
//         data.article.topics.forEach(function (topic) {
//           $('#topics').append('<li>' + topic.topic.toUpperCase() + '</li>')
//         })
//       })
//     }
//   })

// NEWER BACKUP

// $.ajax({
//   url: 'https://formula1app.herokuapp.com/drivers/',
// }).done(function(data){
//   var url = window.location.href ;
//   console.log(url)
//   console.log('bye')
//   for (var i = 0; i <= (data.drivers.length - 1); i++) {
//      if (i%2===0) {
//     console.log(data.drivers.length)
//     console.log("first " + i)
//    $('#races').append("<div>" + "<a href=" + url + "/drivers.html?driver=" + data.drivers[i].driverId + "'>" + "Name: " + data.drivers[i].given_name + " " +
//  data.drivers[i].family_name + "<br>" + "Nationality: " + data.drivers[i].nationality + "<br>" + "Races: " + (data.drivers[i].races.length - 1) + "<br>" + "</a>" + "</div>")
//
//   $('.dropdown-menu').append("<li>" + "<a href='file:///Users/brianlopez/Desktop/f1/f1plain/drivers.html?driver=" + data.drivers[i].driverId + "'>" + data.drivers[i].given_name + " " + data.drivers[i].family_name + "</a>" + "</li>")
//   // <li><a href="#">HTML</a></li>
// // .appendTo( "body" )
// }
//   else {
//     console.log("then " + i)
//     $('#racess').append("<div>" + "<a href='file:///Users/brianlopez/Desktop/f1/f1plain/drivers.html?driver=" + data.drivers[i].driverId + "'>" + "Name: " + data.drivers[i].given_name + " " +
//   data.drivers[i].family_name + "<br>" + "Nationality: " + data.drivers[i].nationality + "<br>" + "Races: " + (data.drivers[i].races.length - 1) + "<br>" + "</a>" + "</div>")
//
//     $('.dropdown-menu').append("<li>" + "<a href='file:///Users/brianlopez/Desktop/f1/f1plain/drivers.html?driver=" + data.drivers[i].driverId + "'>" + data.drivers[i].given_name + " " + data.drivers[i].family_name + "</a>" + "</li>")
//   }
// }
//
//   console.log(data.drivers[0].races[0].results[0].status)
//
// })
