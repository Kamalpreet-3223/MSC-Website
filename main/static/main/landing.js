//Responsive-navbar-active-animation
function openMenu() {
  document.querySelector(".nav-items").classList.toggle("open-menu");
}

function checkMenu() {
  if (document.querySelector(".top-navbar").offsetWidth > 750) {
      document.querySelector(".nav-items").classList.remove("open-menu");
  }
}
$(document).ready(function () {
  setTimeout(function () {
    test();
  });
});
$(window).on("resize", function () {
  setTimeout(function () {
    test();
  }, 500);
});
$(".navbar-toggler").click(function () {
  setTimeout(function () {
    test();
  });
});

// Carousel Sponsor
$(document).ready(function () {
  $(".logos").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
