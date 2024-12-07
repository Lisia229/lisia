// let navTrigger = document.querySelector('.nav_trigger'),
//     header = document.querySelector('header'),
//     navAnc = document.querySelectorAll('.nav_anchor'),
//     modalTrigger = document.querySelectorAll('.modal_trigger'),
//     modalBox = document.querySelector('.modal_box')

//     function toggleActive(){
//         navTrigger.classList.toggle('nav_active');
//         header.classList.toggle('nav_active');
//     };
//     navTrigger.addEventListener("click" , () => {
//         toggleActive();
//     });

//     function removeActive(){
//         navTrigger.classList.remove('nav_active');
//         header.classList.remove('nav_active');
//     };
//     if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
//         for(let i = 0; i < navAnc.length; i++) {
//             navAnc[i].addEventListener("click", () => {
//                 removeActive();
//             });
//         };
//     };

//     for(let i = 0; i < modalTrigger.length; i++) {
//         let modalOpen = modalTrigger[i].nextElementSibling;
//         modalTrigger[i].addEventListener('click' , () => {
//             modalOpen.classList.toggle('active');
//             // modalActive();
//         });
//         document.querySelectorAll(".close")[i].addEventListener('click' , function(){
//             modalOpen.classList.remove('active');
//         });
//     };
$(window).load(function () {
  if (document.referrer.indexOf(location.hostname) !== -1) {
    $('.op-loader').css('display', 'none')
    $('body#top').addClass('intro_on')
  }
  //憭㚚�具�卝�剹�Ｕ�胯�颯�嫘�桀聦���
  else {
    $('body#top')
      .delay(4000)
      .queue(function (next) {
        $('.op-loader').fadeOut(800)
        $('body#top').addClass('intro_on')
        next()
      })
  }
})

$(window).load(function () {
  $('.in').addClass('active')
})

$(window).on('load resize', function () {
  var w = $(window).width()
  var x = 768
  if (w < x) {
    $('#top .fix-content').css('height', $(window).height())
  } else {
    $('#top .fix-content').css('height', '100vh')
  }
})

// let showContent = document.querySelectorAll(".content");
$(function () {
  var fadeIn = $('.anime')
  $(window).on('scroll', function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top
      var scroll = $(window).scrollTop()
      var windowHeight = $(window).height()
      if (scroll > offset - windowHeight + 130) {
        $(this).addClass('scroll_in')
      } else if (scroll < offset - windowHeight + 130) {
        $(this).removeClass('scroll_in')
      }
    })
  })
  $(window).on('load', function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top
      var scroll = $(window).scrollTop()
      var windowHeight = $(window).height()
      if (scroll > offset - windowHeight + 130) {
        $(this).addClass('scroll_in')
      }
    })
  })
})

$(window).on('load', function () {
  $('body')
    .delay(4000)
    .queue(function (next0) {
      $('.drag').addClass('off')
      next0()
    })
})

$('.cover-content').on('touchstart click', function () {
  $('.drag').addClass('off')
})

$(function () {
  $('.nav_trigger').click(function () {
    $('#navigation').toggleClass('nav_active')
    $('.nav_trigger').parent().toggleClass('nav_active')
    return false
  })
})

var profileSwiper = new Swiper('.profile-slide.swiper-container', {
  loop: true,
  autoplay: {
    delay: 4000 //嚗𠉛�鍦�䎚�急活�桃𤫇�譌��
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 2000, //嚗垍�鉝�卝�㻫�芥�䎚�㗇活�桃𤫇�譌�貊宏���
  allowTouchMove: false,
  slidesPerView: 1.0
})

var swiper01 = new Swiper('.library.work-slide .swiper-container', {
  // loop:true,
  // loopAdditionalSlides: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 3.0,
  centeredSlides: false,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 7.2,
      spaceBetween: 60
    }
  }
  // loopedSlides: 12.1,
  // watchOverflow: false,
  // freeMode: true,
})
var swiper02 = new Swiper('.library.think-slide .swiper-container', {
  // loop:true,
  // loopAdditionalSlides: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 4.1,
  centeredSlides: false,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 10.1,
      spaceBetween: 60
    }
  }
  // loopedSlides: 6,
  // watchOverflow: false,
  // freeMode: true,
})

$(function () {
  var tabWork = $('.list-tab.tab_work')
  var tabThink = $('.list-tab.tab_think')
  var result = $('.result')
  var bookWork = $('#bookWork')
  var bookThink = $('#bookThink')
  var bookAll = $('#bookAll')
  $('.list-tab').click(function () {
    $(this).toggleClass('active')
    result.removeClass('active')
    if (tabWork.hasClass('active') && tabThink.hasClass('active')) {
      bookAll.addClass('active')
      // return false
    } else if (tabWork.hasClass('active')) {
      bookWork.addClass('active')
      // return false
    } else if (tabThink.hasClass('active')) {
      bookThink.addClass('active')
      // return false
    } else {
      bookAll.addClass('active')
      // return false
    }
  })
})

$(window).load(function () {
  var urlHash = location.hash
  if (urlHash) {
    $('.result').removeClass('active')
    if (urlHash == '#linkThink') {
      $('#bookThink').addClass('active')
      $('.list-tab.tab_think').addClass('active')
    } else if (urlHash == '#linkWork') {
      $('#bookWork').addClass('active')
      $('.list-tab.tab_work').addClass('active')
    } else {
      $('#bookAll').addClass('active')
    }
  }
})
$(function () {
  $('.img-change').each(function (i, elem) {
    var one = $(elem).offset().top
    $(window).on('load scroll resize', function () {
      var two = $('.img-change').height()
      var three = $(window).scrollTop()
      var showClass = 'show'
      var timing = 400
      if (three >= one - two + timing) {
        $(elem).addClass(showClass)
      } else {
        $(elem).removeClass(showClass)
      }
    })
  })
})
$(function () {
  $('#profile .img-change').each(function (i, elem02) {
    var one = $(elem02).offset().top
    $(window).on('load scroll resize', function () {
      var two = $('.img-change').height()
      var three = $(window).scrollTop()
      var showClass = 'show'
      var timing = 200
      if (three >= one - two + timing) {
        $(elem02).addClass(showClass)
      } else {
        $(elem02).removeClass(showClass)
      }
    })
  })
})

$(function () {
  var i = 0
  $('.content').each(function () {
    $(this)
      .children()
      .children()
      .children('.sub-heading')
      .prepend('<span class="num">0' + i + '</span>')
    i++
  })
})

$(function () {
  $('.content').first().attr('id', 'first-content')
})

//   $(function() {
//     var i = 10;
//     r = Math.floor(Math.random()*i);
//     $('#top .library .bookshelf li').each(function(){
//         $(this).children().addClass('delay' + r);
//     });
//   });

function cover_drag() {
  cover_w = document.querySelector('.inner-content').clientWidth
  // document.documentElement.style.setProperty('--cover_w', cover_w);

  //�𤓖�����螱�兞嚚踝蔭蝜批�嚚賂蔬�𨯂嚙賤�梶鳩嚚餌�嘅蕭��
  var init_x = Math.floor($('.inner-content').outerWidth() * 0.5 - $(window).width() * 0.5)
  var init_y = Math.floor($('.inner-content').outerHeight() * 0.5 - $(window).height() * 0.5)
  $('.js--cover').scrollLeft(init_x)
  // $('.js--cover').scrollTop(init_y);
}

cover_drag()

// $(function () {
// 	$(".modal_cast").click(function () {
// 		$(this).next().toggleClass("active");
// 		return false;
// 	});

// 	$(".modal_box .close").click(function () {
// 		$(this).parents(".modal_box").removeClass("active");
// 	});

// 	$(".modal_box").click(function () {
// 		$(this).removeClass("active");
// 	});
// });

//function - 蝜嘥釣�𤤿�嘅蕭�垍鳩嚚寧鳩嚚舐�嘅蔬蝜嘅蝦蝜嘅蔚
function mousedragscrollable(element) {
  let target // ��滩�碍啁蛹��嘅蔓嚚暸�𠬍翩
  $(element).each(function (i, e) {
    $(e).mousedown(function (event) {
      event.preventDefault()
      target = $(e) // ��滩�碍啁蛹��嘅蔓嚚暸�𠬍翩
      $(e).data({
        down: true,
        move: false,
        x: event.clientX,
        y: event.clientY,
        scrollleft: $(e).scrollLeft(),
        scrolltop: $(e).scrollTop()
      })
      return false
    })
    // move��訫�䕘蕭link颲�翩��㚁蝴
    $(e).click(function (event) {
      if ($(e).data('move')) {
        return false
      }
    })
  })
  // list��𨰝�嚚湛蕭��嚙�/����嗚�垍蛹嚚容vent
  $(document)
    .mousemove(function (event) {
      if ($(target).data('down')) {
        event.preventDefault()
        let move_x = $(target).data('x') - event.clientX
        let move_y = $(target).data('y') - event.clientY
        if (move_x !== 0 || move_y !== 0) {
          $(target).data('move', true)
        } else {
          return
        }
        $(target).scrollLeft($(target).data('scrollleft') + move_x)
        $(target).scrollTop($(target).data('scrolltop') + move_y)
        return false
      }
    })
    .mouseup(function (event) {
      $(target).data('down', false)
      return false
    })
}

mousedragscrollable('.js--cover')
//   window.addEventListener('scroll', this.handleScroll.bind(this));
//   window.addEventListener('touchmove', this.handleScroll.bind(this));

$(window).on('load resize', function () {
  var w = $(window).width()
  var x = 768
  if (w < x) {
    $('body').css('height', $(window).height())
  } else {
    $('body').css('height', '100vh')
  }
})

/* ===============================================
  # smooth scroll
  =============================================== */
$(function () {
  $('a[href^="#"].scroll').click(function () {
    let speed = 600
    let href = $(this).attr('href')
    let target = $(href == '#' || href == '' ? 'html' : href)
    let position = target.offset().top
    $('html, body').animate({ scrollTop: position }, speed, 'swing')
    return false
  })
})
