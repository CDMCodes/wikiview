$(document).ready(function(){
  //hide warning elements on page load
  $(".warn").hide();

  //declare function for API call
  function wikipediaCall(text){
    basestring = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&titles=";
    options = "&prop=info%7Cextracts&iwurl=1&inprop=url%7Cdisplaytitle&exchars=140&exintro=1";
    qrystring = basestring + text + options;
    $.getJSON(qrystring,function(result){
      //console.log(result);
      //do something with returned API data
        //grab query.pages
        console.log(result.query.pages);
        pages = result.query.pages;
        //create array of all the keys in pages
        var keys =[]
        for(var key in pages){
          keys.push(key);
        }
        //loop through keys and add elements to DOM
        for(i=0;i<keys.length;i++){
          var target = pages[keys[i]];
          var content = "<div class=result><a target='_blank' href=" + target.fullurl + ">" + target.displaytitle + "</a>" + target.extract + "</div>";
          $("#contentbox").append(content);
          $(".result").show("slow");
          $("img").animate({opacity:0.25},250,function(){});
          $("img").animate({opacity:1},250,function(){});
        }
    });
  }

  //Use form to execute API call defined above
  $("#srchform").submit(function(event){
    //stop browser from submitting the form
    event.preventDefault();
    //hide warnings again if present, remove elements for prior search
    $(".warn").hide();
    $(".result").remove();

    var srchtext = $("#search").val();

    //show warning when search field is blank
    if(srchtext == ""){
      $(".warn").show();
    }else{
      //grab search value replace spaces with '+' and remove punctuation
      srchtext = srchtext.replace(/\s/g,'+').replace(/[^\w\+]/g,'');
      //execute API call
      wikipediaCall(srchtext);
    }
  })
});
