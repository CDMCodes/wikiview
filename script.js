$(document).ready(function(){
  //hide warning elements on page load
  $(".warn").hide();
  //declare function for API call
  function wikipediaCall(){
    basestring = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info%7Cextracts&iwurl=1&inprop=url%7Cdisplaytitle&exchars=140&exintro=1"
    srchrequest = "titles="+$("#search").text();
    qrystring = basestring + srchrequest;
    $.getJSON(qrystring,function(result){
      //console.log(result);
      //do something with returned API data
        //grab query.pages
        console.log(results.query.pages[0]);
        //for each page
          //add div container
          //write page title
          //link to page URL
          //write extract below title
    });
  }

  $("#srchform").submit(function(event){
    //stop browser from submitting the form
    event.preventDefault();
    //hide warnings again if present
    $(".warn").hide();

    var srchtext = $("#search").val();

    //show warning when search field is blank
    if(srchtext == ""){
      $(".warn").show();
    }else{
      //grab search value replace spaces with '+' and remove punctuation
      srchtext = srchtext.replace(/\s/g,'+').replace(/[^\w\+]/g,'');
      console.log("search query = " + srchtext);
    }




    //execute API call with search string
  })

});
