$(document).ready(function(){


  function wikipediaCall(){
    basestring = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info%7Cextracts&indexpageids=1&iwurl=1&inprop=url%7Cdisplaytitle&exchars=140&exintro=1"
    srchrequest = "titles="+$("#search").text();
    qrystring = basestring + srchrequest;
    $.getJSON(qrystring,function(result){
      console.log(result);
    });
  }

  $("#submit").click(function(){
    console.log("you pressed search");
    var srchtext = $("#search").val();
    console.log(srchtext);
    //replace spaces with '+' and remove punctuation
    var cleantext = srchtext.toLowerCase().replace(/\s/g,'+').replace(/[^\w\+]/g,'');
    console.log(cleantext);
  })

  //need to keep page from reloading when you press enter in search box
  //how do html forms work when you 'submit', how to use AJAX instead of
  //default HTML page reload behavior


});
