$( document ).ready(function(){

  var counter = 0;
  var projects = [$('#intro'), $('#where'), $('#pop'),
  $('#ijmweb'), $('#port'), $('#ixda'), $('#phone'), $('#center'),
  $('#ifa'), $('#chick'), $('#ijm1'), $('#ijm2'),
  $('#btease'), $('#dg'), $('#fall'), $('#lulu')];

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