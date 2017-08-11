$(document).ready(function(){
  //hide warning elements on page load
  $(".warn").hide();
  //declare function for API call
  function wikipediaCall(text){
    basestring = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&titles=";
    options = "&prop=info%7Cextracts&iwurl=1&inprop=url%7Cdisplaytitle&exchars=140&exintro=1";
    // str2 = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=info&titles=words&inprop=url";
    qrystring = basestring + text + options;
    // qrystring = str2;
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
        console.log(keys);
        console.log(pages[keys[0]]);
        for(i=0;i<keys.length;i++){
          // console.log(pages[keys[i]]);
          //add div container with title, URL, and extract
          var target = pages[keys[i]];
          var content = "<div class=result><a target='_blank' href=" + target.fullurl + ">" + target.displaytitle + "</a>" + target.extract + "</div>";
          $("footer").before(content);
        }
        //for each page



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
      //console.log("search query = " + srchtext);
      wikipediaCall(srchtext);
    }

  })

});
