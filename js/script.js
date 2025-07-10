 //js-header
 // スクロールするとロゴの色変更
  $(function () {
    const targetOffset = $(".about").offset().top - 80;

    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= targetOffset) {
        $(".js-header").addClass("scrolled");
      } else {
        $(".js-header").removeClass("scrolled");
      }
    });
  });

  //js-hamburger
  const ham = $('.js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
const nav = $('.js-nav'); //js-navの要素を取得し、変数navに格納
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active');
 
});
 
 //FV slick
 $(".fv_slider_items").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  cssEase: 'linear',
  speed: 1500,
 });

//COMPANYのaccess
 document.addEventListener('DOMContentLoaded', () => {
  const TEL_NUMBER = '00000000000';
  const telLink = document.querySelector('.tel-link');

  const toggleTelLink = () => {
    const isMobile = window.innerWidth <= 770;
    if (telLink) {
      isMobile
        ? telLink.setAttribute('href', `tel:${TEL_NUMBER}`)
        : telLink.removeAttribute('href');
    }
  };

  // 初回実行
  toggleTelLink();

  // リサイズ時に実行（debounce 付き）
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      toggleTelLink();
    }, 200);
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
