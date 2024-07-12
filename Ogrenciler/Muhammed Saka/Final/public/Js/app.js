document.addEventListener("DOMContentLoaded", () => {
  const signUpNoticeDismissButton = document.querySelector(".signup-dismiss");
  const signUpNotice = document.querySelector(".header-notice");
  const mobileMenu = document.querySelector(".mobile-menu");
  const openMenuBtn = document.querySelector(".open-menu");
  const closeMenuBtn = document.querySelector(".close-menu");
  const productRow = document.querySelectorAll(".product-row");

  const pageLoader = document.querySelector(".main-preloader");

  function dismissNotice() {
    if (signUpNotice) {
      let signUpNoticeHeight = signUpNotice.clientHeight;
      signUpNotice.style.marginTop = "-" + signUpNoticeHeight + "px";
    }
  }

  const toggleMenu = () => {
    if (mobileMenu) {
      mobileMenu.classList.toggle("mobile-menu-active");
    }
  };

  const prRowController = (item) => {
    let rowController = item.previousElementSibling;
    let itemCounts = item.childElementCount;
    if (itemCounts <= 4) {
      if (rowController) {
        rowController.classList.add("d-lg-none");
      }
    }
  };

  function pageLoaded() {
    if (pageLoader) {
      setTimeout(() => {
        pageLoader.classList.add("preloader-hide");
        setTimeout(() => pageLoader.classList.add("d-none"), 500);
      }, 1000);
    }
  }

  window.onload = pageLoaded;

  if (signUpNoticeDismissButton) {
    signUpNoticeDismissButton.addEventListener("click", dismissNotice);
  }

  if (openMenuBtn) {
    openMenuBtn.addEventListener("click", toggleMenu);
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", toggleMenu);
  }

  if (productRow.length) {
    productRow.forEach((item) => prRowController(item));
  }
});
