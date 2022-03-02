$(document).ready(function(){
  // main banner slide
  $("#slick_slider").slick({
    autoplay : true, //자동 슬라이드 (기본값 : false)
    fade : true, //기본 슬라이드 전화방식은 가로방향 / fade : true ==> 페이드 전환방식 적용/ vertical : true ==> 세로방향 슬라이드 적용
    pauseOnHover : true, //슬라이드 위에 마우스 오버시 정지
    autoplaySpeed : 3000
  });


  // [sticky nav]
  let win_height = $(window).height(); // 현재 보이는 화면의 높이 (document는 전체 높이)
  let nav_height = $("#main_banner nav").height(); // nav 높이

  function scrollEvt(){
    const scrollTop = $(window).scrollTop();
    console.log(scrollTop);

    if(scrollTop > win_height - nav_height){zw
      $("#main_banner nav").addClass("sticky");
    }else{
      $("#main_banner nav").removeClass("sticky");
    }
  }
  //scrollEvt(); scroll event는 별도로 불러오지 않아도 브라우저가 로딩되면 기본적으로 적용된다

  $(window).scroll(function(){
    scrollEvt();
  });

  function resizeEvt(){
    win_height = $(window).height();
    nav_height = $("#main_banner nav").height();
  }
  resizeEvt(); // 브라우저가 처음 로딩 됐을 때 적용


  $(window).resize(function(){
    resizeEvt(); // 브라우저 사이즈가(가로,세로) 조정 됐을 때 적용
  });




});


const $menu = document.querySelector("nav ul");
const $dark = document.querySelector(".dark");
const $resBtn = document.querySelector(".resBtn img");
const $closeBtn = document.querySelector(".close");

$resBtn.addEventListener("click", function(){
  $menu.classList.add("active");
  $dark.classList.add("active");
});
$closeBtn.addEventListener("click", function(){
  $menu.classList.remove("active");
  $dark.classList.remove("active");
});
$dark.addEventListener("click", function(){
  $menu.classList.remove("active");
  $dark.classList.remove("active");
});