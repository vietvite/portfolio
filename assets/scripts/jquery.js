$(document).ready(function(){
  $('.container').fullpage({
    verticalCentered: false,
  });

  $("#navbar a").click(function(e){
    let target = $(this).data('target')
    $(`#tab-container section`).addClass('hidden anim-opacity-up-1/2')
    $(`#tab-container section[id=${target}]`).toggleClass('hidden')
  });
});