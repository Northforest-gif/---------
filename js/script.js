 $(".fv_slider_items").slick();

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