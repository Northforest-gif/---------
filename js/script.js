 //js-header
 // スクロールするとロゴの色変更
$(function () {
  const $target = $("#about");
  const $header = $(".js-header");

  let targetOffset = $target.offset().top;

  const updateOffset = () => {
    targetOffset = $target.offset().top;
  };

  const checkScroll = () => {
    const scrollTop = $(window).scrollTop();
    if (scrollTop >= targetOffset) {
      $header.addClass("scrolled");
    } else {
      $header.removeClass("scrolled");
    }
  };

  $(window).on("scroll", checkScroll);

  $(window).on("resize", function () {
    updateOffset();
    checkScroll();
  });

  $(window).on("load", function () {
    updateOffset();
    checkScroll();
  });
});

  //js-hamburger
  const ham = $('.js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
const nav = $('.js-nav'); //js-navの要素を取得し、変数navに格納
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active');
});
nav.on('click', function () {
  ham.removeClass('active');
  nav.removeClass('active');
});
 
 //FV slick
 $(".fv_slider_items").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  cssEase: 'linear',
  speed: 1500,
 });

 // WORKS モーダルウィンドウ
$(function () {
  const modal = $("#js-modal");
  const overlay = $("#js-overlay");
  const close = $("#js-close");

  let scrollY;

  $('.modal-trigger').on('click', function (e) {
    e.preventDefault(); // ← ページ上部にジャンプするのを防ぐ

    const imgSrc = $(this).data('img');
    const text = $(this).data('text');

    $('#modal-img').attr('src', imgSrc);
    $('#modal-text').text(text);

    scrollY = window.scrollY || window.pageYOffset;

    // スクロールを固定する
    $('body').addClass('modal-open').css({
      top: `-${scrollY}px`
    });

    $('header').addClass('open');

    modal.addClass("open");
    overlay.addClass("open");
  });

  const closeModal = () => {
    modal.removeClass("open");
    overlay.removeClass("open");
    $('header').removeClass('open');

    // スクロール位置を戻す
    $('body').removeClass('modal-open').removeAttr('style');
    window.scrollTo({
      top: scrollY,
      behavior: 'instant' // または 'auto'
    });
  };

  close.on('click', closeModal);
  overlay.on('click', closeModal);
});


//top_icon
$(function () {
  const $topIcon = $('#top_icon');
  const fvHeight = $('.first_view').outerHeight(); // .fvがファーストビュー要素

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $topIcon.addClass('show');
    } else {
      $topIcon.removeClass('show');
    }
  });

  $topIcon.on('touchstart', function () {
    // 何も入れなくてもOK（"反応させる"ためのダミー）
  });

  // スクロールでトップに戻る
  $(document).on('click', '#top_icon', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);
  });
});

$(function () {
    $(window).on('scroll', function () {
      $('.fadein-target').each(function () {
        const elemPos = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();

        // 表示条件：スクロール位置が要素より下に来たら
        if (scroll > elemPos - windowHeight + 100) {
          $(this).addClass('show');
        } else {
          // 上にスクロールして画面外に出たら非表示に戻す
          $(this).removeClass('show');
        }
      });
    });
  });

//CONTACTのform
function validateCheckbox() {
  const checkboxes = document.querySelectorAll('input[name="source[]"]');
  const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
  if (!isChecked) {
    alert('少なくとも1つはチェックしてください。');
    return false;
  }
  return true;
};