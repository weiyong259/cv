var music = new Audio('music/audio2.mp4');

$(".title-image").click(function(){
  $(".containers").toggle();
  $(".content").css("visibility", "visible");
  music.play();
})

$(".title-image").hover(function(){
  $("h1").css("color", "yellow");
  }, function(){
  $("h1").css("color", "#a934ff");
});

music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
