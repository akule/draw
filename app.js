$(document).ready(function() {
  makeGrid(16,32)

  var grayscale = false;
  var randomColor = false;

  $("body").on("mouseenter", ".sq", function() {
    if (grayscale) {
      var opacity = $(this).css("opacity");
      opacity -= .1;
      $(this).css({ "opacity": opacity });
    } else if (randomColor) {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      $(this).css({ "background-color": color});
    } else {
      $(this).css({"background-color":"lightblue"});
    }
  });

  $('.reset').click(function() {
    $('.sq').css({"background-color":"darkblue", "opacity":"1"});
  });
  
  $('.menu-open').click(function() {
    $('.one').removeClass("hidden");
    $('.cancel').click(function() {
      $('.one').addClass("hidden");
    });
    $('.regrid').click(function() {
      var hgt = $('#height').val();
      var wdt = $('#width').val();
      makeGrid(hgt, wdt);
      $('.one').addClass('hidden');
    });
  });
  function makeGrid(height, width) {
    $("#grid").html("");
    for (var i = 0; i<height; i++)
    {
      $('#grid').append('<tr class="'+i+'">');
      for (var j=0; j<width; j++)
      {
        $('.'+i).append("<td class='sq' data-grayscale='10'></td>");
      }
      $('#grid').append("</tr>");
    } 
    var cssWidth = 1 / width;
    cssWidth *= 100
    $(".sq").css({"width":cssWidth+"%"});
    var hgt = $(".sq").width();
    $(".sq").css({"height":hgt+"px"});
  }

  $('.random').click(function(){
    randomColor = !randomColor;
    grayscale = false;
    if (randomColor) {
      $('.random').addClass("active");
      $('.gray').removeClass("active");
    } else {
      $('.random').removeClass("active");
    }
  });
  $('.gray').click(function(){
    grayscale = !grayscale;
    randomColor = false;
    if (grayscale) {
      $('.gray').addClass("active");
      $('.random').removeClass("active");
    } else {
      $('.gray').removeClass("active");
    }
  })

  $('.dgrd').click(togGrid);
  function togGrid(){
    var value = $('.sq').css("border-radius");
    if (value === "0px") {
      $('.sq').css({ "border-radius": "10%" });
      $('.dgrd').addClass("active");
    } else {
      $('.sq').css({ "border-radius": "0" });
      $('.dgrd').removeClass("active");
    }
  };
});