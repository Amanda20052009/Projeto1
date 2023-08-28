clipPath.attr('d', path1).animate({'d': path2}, duration, firstCustomMinaAnimation, function(){
   clipPath.animate({'d': path3}, duration, secondCustomMinaAnimation, function(){
      oldSlide.removeClass('visible');
      newSlide.addClass('visible').removeClass('is-animating');
   });
});
