$( document ).ready(function(){

  var counter = 0;
  var projects = [$('#intro'), $('#ifa'), $('#chick'), $('#ijm1'), $('#ijm2'),
  $('#btease'), $('#dg'), $('#fall'), $('#lulu'), $('#ixda'),
  $('#phone'), $('#center'), $('#ijmweb'), $('#port'), $('#where'), $('#pop')];

  $(".next").click(function(){
    projects[counter].hide();
    if(counter == 15)
    {
      counter = 0;
    }
    projects[counter+1].show();
    counter++;
    });

  $(".prev").click(function(){
    projects[counter].hide();
    projects[counter-1].show();
    counter--;
    });

});