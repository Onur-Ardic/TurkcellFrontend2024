
import $ from './node_modules/jquery/dist/jquery';
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

$(document).ready(function() {
  const filterSwitcher = document.querySelectorAll(".filter-control");
  const filterMenuToggler = document.querySelectorAll(".toggle-filter-menu");
  const filterMenu = document.querySelector(".filter-menu-container");
  const closeFilterMenuBtn = document.querySelectorAll(".close-filter-mnu");
  const fadeBody = document.querySelector(".shop-bg-filter");
  const slider = document.getElementById("slider");
  const allProducts = document.querySelectorAll("div[data-item-type='price']");
  const noPrError = document.getElementById("noPr");

  const toggleFilterMenu = (event) => {
    let { target } = event;
    let filterItem = target.dataset.filterItem;
    let filterMenu = document.querySelector(`.${filterItem}`);
    if (filterMenu && filterMenu.children[1]) {
      filterMenu.children[1].classList.toggle("filter-active");
    }
  };

  const filterProducts = () => {
    if (noPrError) {
      noPrError.classList.add("d-none");
    }
    allProducts.forEach((item) => {
      item.closest('.col-6, .col-md-4').classList.remove("d-none");
    });
    let priceRange = slider.noUiSlider.get();
    let startRange = Number(priceRange[0]);
    let endRange = Number(priceRange[1]);
    let prs = [];
    allProducts.forEach((item) => {
      let prices = Number(item.innerText.replace("$", ""));
      if (!(prices >= startRange && prices <= endRange)) {
        prs.push(item.closest('.col-6, .col-md-4'));
      }
    });

    if (prs.length == allProducts.length && noPrError) {
      noPrError.classList.remove("d-none");
    }
    prs.forEach((item) => {
      item.classList.add("d-none");
    });

    prs = [];
  };

  const toggleFilterMenuMobile = (event) => {
    event.stopPropagation();
    if (fadeBody) {
      fadeBody.classList.toggle("shop-filter-active");
    }
    if (filterMenu) {
      filterMenu.classList.toggle("filter-menu-container-active");
    }
  };

  if (filterMenuToggler.length) {
    filterMenuToggler.forEach((item) =>
      item.addEventListener("click", toggleFilterMenuMobile, { capture: true })
    );
  }

  if (closeFilterMenuBtn.length) {
    closeFilterMenuBtn.forEach((item) =>
      item.addEventListener("click", toggleFilterMenuMobile, { capture: true })
    );
  }

  if (filterSwitcher.length) {
    filterSwitcher.forEach((item) =>
      item.addEventListener("click", toggleFilterMenu)
    );
  }

  if (slider) {
    noUiSlider.create(slider, {
      start: [100, 500],
      connect: true,
      tooltips: [
        wNumb({ decimals: 2, thousand: ",", prefix: "$" }),
        wNumb({ decimals: 2, thousand: ",", prefix: "$" }),
      ],
      step: 10,
      margin: 100,
      range: {
        min: [100],
        max: [500],
      },
    });

    slider.noUiSlider.on("change", filterProducts);
  }
});
