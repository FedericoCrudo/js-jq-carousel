$(document).ready(function(){
  //click on angle-right
  $('.next').click(pulsanteNext); //funzione di callback che parte dopo il click
  $('.prev').click(pulsantePrev);
  //click on circle
  $('.nav i').click(function(){
    $('.nav i.active').removeClass('active');
    $(this).addClass('active');
    $('.images img').removeClass('active');
      $('.images img').eq($(this).index()).addClass('active');

    
    
  }
 
  
  );
  

});

function pulsanteNext(){

  
  var imgAttiva = $('.images img.active');
  console.log(imgAttiva);


  var pallinoAttivo = $('.nav i.active');

  imgAttiva.removeClass('active');
  imgAttiva.next().addClass('active');

  pallinoAttivo.removeClass('active');
  pallinoAttivo.next().addClass('active');

  if(imgAttiva.hasClass('last')){
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }

}
function pulsantePrev(){
  var imgAttiva = $('.images img.active');
  console.log(imgAttiva);
 

  var pallinoAttivo = $('.nav i.active');

  imgAttiva.removeClass('active');
  imgAttiva.prev().addClass('active');

  pallinoAttivo.removeClass('active');
  pallinoAttivo.prev().addClass('active');

  if(imgAttiva.hasClass('first')){
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }

}
$(document).keydown(function(e){
  if (e.which == 39) { //right
   pulsanteNext();
  }
  if (e.which == 37) { //left
    pulsantePrev();
   }

});
