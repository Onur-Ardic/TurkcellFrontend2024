import $ from 'jquery';

$(document).ready(function() {
  const signUpNoticeDismissButton = $(".signup-dismiss");
  const signUpNotice = $(".header-notice");
  const mobileMenu = $(".mobile-menu");
  const openMenuBtn = $(".open-menu");
  const closeMenuBtn = $(".close-menu");
  const productRow = $(".product-row");

  const pageLoader = $(".main-preloader");

  function dismissNotice() {
    if (signUpNotice.length) {
      let signUpNoticeHeight = signUpNotice.height();
      signUpNotice.css("marginTop", "-" + signUpNoticeHeight + "px");
    }
  }

  const toggleMenu = () => {
    if (mobileMenu.length) {
      mobileMenu.toggleClass("mobile-menu-active");
    }
  };

  const prRowController = (item) => {
    let rowController = item.prev();
    let itemCounts = item.children().length;
    if (itemCounts <= 4 && rowController.length) {
      rowController.addClass("d-lg-none");
    }
  };

  function pageLoaded() {
    if (pageLoader.length) {
      setTimeout(() => {
        pageLoader.addClass("preloader-hide");
        setTimeout(() => pageLoader.addClass("d-none"), 500);
      }, 1000);
    }
  }

  const scrollInX = (elementHandler, leftSize) => {
    elementHandler.scrollBy({
      left: leftSize,
      behavior: "smooth",
    });
  };

  const scrollTestimonial = (event) => {
    let scrollBtn = $(event.target);
    let scrollDirection = scrollBtn.data("scroll");
    let colWidth = col4Width.width();

    if (scrollDirection == "right") {
      scrollInX(commentsTestimonial[0], -colWidth);
    } else {
      scrollInX(commentsTestimonial[0], +colWidth);
    }
  };

  const scrollProductsRow = (event) => {
    let scrollBtn = $(event.target);
    let scrollDirection = scrollBtn.data("scroll");
    let colWidth = lastPrItem.width();
    let targetRow = scrollBtn.data("rowTarget");
    let currentRow = $("." + targetRow);

    if (scrollDirection == "right") {
      scrollInX(currentRow[0], -colWidth);
    } else {
      scrollInX(currentRow[0], +colWidth);
    }
  };

  $(window).on("load", pageLoaded);

  if (signUpNoticeDismissButton.length) {
    signUpNoticeDismissButton.on("click", dismissNotice);
  }

  if (openMenuBtn.length) {
    openMenuBtn.on("click", toggleMenu);
  }

  if (closeMenuBtn.length) {
    closeMenuBtn.on("click", toggleMenu);
  }

  if (productRow.length) {
    productRow.each((index, item) => prRowController($(item)));
  }

  commentsTestimonial.on("mousewheel", (event) => {
    event.preventDefault();
    scrollInX(commentsTestimonial[0], +event.originalEvent.wheelDelta);
    commentsTestimonial.css("cursor", "");
  });

  lastProductsBtnControl.each((index, btn) => {
    $(btn).on("click", scrollProductsRow);
  });

  testimonialBtnControl.each((index, btn) => {
    $(btn).on("click", scrollTestimonial);
  });

  productRow.each((index, item) => slider($(item), col4Width));
  slider(commentsTestimonial, col4Width);
});
