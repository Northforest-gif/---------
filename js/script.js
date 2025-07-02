 $(".fv_slider_items").slick();

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
