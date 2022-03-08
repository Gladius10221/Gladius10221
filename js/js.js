$(function(){
  function lord(){
  $('#a4').fadeOut(300, function(){
    $('#a4').fadeIn(300);
  });
  }
  $(window).scroll(function(){
    let rr = $(window).scrollTop();
    console.log(rr);
    if (rr == 0){
      $('#head').css({'margin-top' : '20px', 'box-shadow' : 'none', 'background' : 'none'});
    }else{
      $('#head').css({'margin-top' : '0px', 'background' : '#31070f', 'box-shadow' : '1px 5px 10px #430920'});
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
});
