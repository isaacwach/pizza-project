$(".open").on("click", function() {
    $(".popup-overlay, .popup-content").addClass("active");
  });
  $(".open1").on("click", function() {
    $(".popup-overlay1, .popup-content1").addClass("active");
  });
  $(".open2").on("click", function() {
    $(".popup-overlay2, .popup-content2").addClass("active");
  });
  $(".open3").on("click", function() {
    $(".popup-overlay3, .popup-content3").addClass("active");
  });
  $(".open4").on("click", function() {
    $(".popup-overlay4, .popup-content4").addClass("active");
  });
  $(".open5").on("click", function() {
    $(".popup-overlay5, .popup-content5").addClass("active");
  });
  
  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".close").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
  });
  $(".close1").on("click", function() {
    $(".popup-overlay1, .popup-content1").removeClass("active");
  });
  $(".close2").on("click", function() {
    $(".popup-overlay2, .popup-content2").removeClass("active");
  });
  $(".close3").on("click", function() {
    $(".popup-overlay3, .popup-content3").removeClass("active");
  });
  $(".close4").on("click", function() {
    $(".popup-overlay4, .popup-content4").removeClass("active");
  });
  $(".close5").on("click", function() {
    $(".popup-overlay5, .popup-content5").removeClass("active");
  });