$( document ).ready(function(){

  var counter = 0;
  var projects = [$('#intro'), $('#pop'), $('#where'),
  $('#ijmweb'), $('#port'), $('#ixda'), $('#phone'), $('#center'),
  $('#ifa'), $('#chick'), $('#ijm1'), $('#ijm2'),
  $('#btease'), $('#dg'), $('#fall'), $('#lulu')];

  $(".next").click(function(){
    projects[counter].fadeOut('fast');
    if(counter == 15)
    {
      counter = 0;
    }
    projects[counter+1].fadeIn('fast');
    counter++;
    });

  $(".prev").click(function(){
    projects[counter].fadeOut('fast');
    projects[counter-1].fadeIn('fast');
    counter--;
    });

});