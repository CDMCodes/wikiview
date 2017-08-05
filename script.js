$(document).ready(function(){


  function wikipediaCall(){
    basestring = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info%7Cextracts&indexpageids=1&iwurl=1&inprop=url%7Cdisplaytitle&exchars=140&exintro=1"
    srchrequest = "titles="+$("#search").text();
    qrystring = basestring + srchrequest;
    $.getJSON(qrystring,function(result){
      console.log(result);
    });
  }

});
