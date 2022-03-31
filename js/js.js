$(function(){
  function lord(){
  $('#a4').fadeOut(300, function(){
    $('#a4').fadeIn(300);
  });
  }
  $(window).scroll(function(){
    let rr = $(window).scrollTop();
    if (rr == 0){
      $('#headka').attr('id', 'headka1').css({'box-shadow' : 'none', 'background' : 'none'});
      setTimeout(() => $('#headka1').attr('id', 'head'), 600);
    }else{
      $('#head').css({'background' : '#31070f', 'box-shadow' : '1px 5px 10px #430920'}).attr('id', 'headka');
    }
  });
  function maloe(){
$('#k1').fadeOut(1000, function(){
  $('#k2').fadeOut(1000, function(){
    $('#k3').fadeOut(1000, function(){
      $('#k4').fadeOut(1000, function(){
                        $('#k4').fadeIn(1000, function(){
                          lord()
                          let timer = setInterval(() => lord(), 600);
                          $('#k6').css({'display' : 'none'});

                        $('#a1').fadeIn(1000, function(){
                          $('#a2').fadeIn(1000, function(){
                            $('#a3').fadeIn(1000, function(){
                          });
                        });
                      });
                });
              });
            });
          });
        });
};
maloe();
let timerId = setInterval(() => maloe(), 11000);
function lor(){
$('#k6').fadeOut(300, function(){
  $('#k6').fadeIn(300);
});
}
lor()
let timer = setInterval(() => lor(), 600);
setTimeout(() => { clearInterval(timer)}, 3000);
function resize(){
  let width = $(window).width();
  if (width < 1130){
    $('.block3').css({'font-size' : '15px'});
  }else{
    $('.block3').css({'font-size' : '18px'});
  }
}
$(window).resize(function(){
  resize();
});
resize();
function resize2(){
  let width = $(window).width();
  if (width < 1160){
    $('.background').attr('class' , 'nobody');
    $('#block1').css({'margin-top' : '10px'});
  }else{
    $('.nobody').attr('class' , 'background');
  }
}
$(window).resize(function(){
  resize2();
});
resize2();
function pool(){
let heihj = $(window).width();
if (heihj <= 576){
$('.polo').css({'margin-left' : '25%'});
}else{
  $('.polo').css({'margin-left' : '0%'});
}
}
pool();
$(window).resize(function(){
  pool();
});
function resizered(){
  let widthl = $(window).width();
  if (widthl < 768){
    $('#footer').css({'height' : '450px'});
  } if (widthl < 577){
    $('#footer').css({'height' : '800px'});
  }if (widthl > 768){
      $('#footer').css({'height' : '300px'});
  }
}
$(window).resize(function(){
  resizered();
});
});
