"use strict";
const page = jQuery(document.body).data("page");
if (
  page === "home" ||
  page === "shop_home" ||
  page === "main_home" ||
  page === "shop_home" ||
  page === "surfing_home" ||
  page === "shop-collection" ||
  page === "about" ||
  page === "shop_collectionV2" ||
  page === "checkout-page" ||
  page === "banner" ||
  page === "shoping-cart" ||
  page === "contact" ||
  page === "product-category" ||
  page === "wishlist" ||
  page === "we-comming" ||
  page === "cart-sidebar" ||
  page === "order-tracking" ||
  page === "order-confirmation" ||
  page === "signin" ||
  page === "blog-listing" ||
  page === "signup" ||
  page === "not_found" ||
  page === "product-single" ||
  page === "shoping-cart-v-two"
) {
  /***top-to-bottom***/
  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("top-to-bottom-progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%,#eee ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload - calcScrollValue;
}
if (page === "nav-versions") {
  $(".default_option").click(function () {
    $(".dropdown ul").addClass("active");
  });

  $(".dropdown ul li").click(function () {
    var text = $(this).text();
    $(".default_option").text(text);
    $(".dropdown ul").removeClass("active");
  });
}
if (page === "surfing_home") {
  $(document).on("click", ".js-videoPoster", function (e) {
    e.preventDefault();
    var poster = $(this);

    var wrapper = poster.closest(".js-videoWrapper");
    videoPlay(wrapper);
  });

  function videoPlay(wrapper) {
    var iframe = wrapper.find(".js-videoIframe");

    var src = iframe.data("src");

    wrapper.addClass("videoWrapperActive");

    iframe.attr("src", src);
  }

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  /*------------------------------------
  Testimonial Slick Carousel as Nav
  --------------------------------------*/
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",

    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 450,
        settings: {
          dots: false,
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 420,
        settings: {
          // autoplay: true,
          dots: false,
          slidesToShow: 3,
          centerMode: true,
        },
      },
    ],
  });

  /**** */
  // Main/Product image slider for product page
  $(".main-img-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    fade: true,
    speed: 300,
    lazyLoad: "ondemand",
    asNavFor: ".thumb-nav",
  });
  // Thumbnail/alternates slider for product page
  $(".thumb-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerPadding: "0px",
    asNavFor: ".main-img-slider",
    dots: false,
    centerMode: true,
    draggable: false,
    speed: 200,
    focusOnSelect: true,
    prevArrow:
      '<div class="slick-prev"><i class="i-chev-left-thin"></i><span class="sr-text">Previous</span></div>',
    nextArrow:
      '<div class="slick-next"><i class="i-chev-right-thin"></i><span class="sr-text">Next</span></div>',
  });

  //keeps thumbnails active when changing main image, via mouse/touch drag/swipe
  $(".main-img-slider").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //remove all active class
      $(".thumb-nav .slick-slide").removeClass("slick-current");
      //set active class for current slide
      $(".thumb-nav .slick-slide:not(.slick-cloned)")
        .eq(currentSlide)
        .addClass("slick-current");
    }
  );

  /***** CALCULATE THE TIME REMAINING *****/
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());

    /***** CONVERT THE TIME TO A USEABLE FORMAT *****/
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    // var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    // var days = Math.floor(t / (1000 * 60 * 60 * 24));

    /***** OUTPUT THE CLOCK DATA AS A REUSABLE OBJECT *****/
    return {
      total: t,
      // days: days,
      // hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  /***** DISPLAY THE CLOCK AND STOP IT WHEN IT REACHES ZERO *****/
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    // var daysSpan = clock.querySelector(".days");
    // var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");

    function updateClock() {
      var t = getTimeRemaining(endtime);

      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock, 1000);
  }

  /***** SET A VALID END DATE *****/
  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  initializeClock("clockdiv", deadline);
}
if (page === "we-comming") {
  /***** CALCULATE THE TIME REMAINING *****/
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());

    /***** CONVERT THE TIME TO A USEABLE FORMAT *****/
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    /***** OUTPUT THE CLOCK DATA AS A REUSABLE OBJECT *****/
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  /***** DISPLAY THE CLOCK AND STOP IT WHEN IT REACHES ZERO *****/
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector(".days");
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock, 1000);
  }

  /***** SET A VALID END DATE *****/
  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  initializeClock("clockdiv", deadline);
}
if (page === "home" || page === "shop_home" || page === "main_home") {
  /**PRODUCT-REVIEWS-SLIDER**/
  var swiper = new Swiper(".product_reviews_slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    // autoplay: {
    //   delay: 3000,
    // },
    // init: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },

      1440: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  });
  /**PRODUCT-SLIDER**/
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    // autoplay: {
    //   delay: 3000,
    // },
    // init: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      1440: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
  /**testimonial-slider**/
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
if (page === "main_home") {
  $(document).ready(function () {
    //Fade in delay for the background overlay (control timing here)
    $("#bkgOverlay").delay(4800).fadeIn(400);
    //Fade in delay for the popup (control timing here)
    $("#delayedPopup").delay(5000).fadeIn(400);

    //Hide dialouge and background when the user clicks the close button
    $("#btnClose").click(function (e) {
      HideDialog();
      e.preventDefault();
    });
  });
  //Controls how the modal popup is closed with the close button
  function HideDialog() {
    $("#bkgOverlay").fadeOut(400);
    $("#delayedPopup").fadeOut(300);
  }
}
if (page === "home" || page === "main_home") {
  /**home-text-animation**/
  var str = document.getElementById("kv-Animate-Heading");

  var newStr = "";

  var heading = str.innerText.split(" ");

  var i = 0;

  for (var splitSen = 0; splitSen < heading.length; splitSen++) {
    console.log(splitSen);
    newStr = newStr + "<div class='word'>";

    for (var word = 0; word < heading[splitSen].length; word++) {
      console.log(heading[splitSen]);
      newStr =
        newStr +
        "<span class='lettering' id='lettering_" +
        i +
        "'><span class='first--letter'>" +
        heading[splitSen].charAt(word) +
        "<span class='second--letter'>" +
        heading[splitSen].charAt(word) +
        "</span></span></span>";
      i++;
    }

    newStr = newStr + "</div>";
  }

  str.innerHTML = newStr;
  var randLetter = 0;
  var animatedLetters = [0, 0, 0, 0];

  kvAnimateHeading();
  window.setInterval(function () {
    kvAnimateHeading();
  }, 3000);

  function kvAnimateHeading() {
    str.style.setProperty("--kv_play_state", "paused");
    for (var j = 0; j < 4; j++) {
      document
        .getElementById("lettering_" + animatedLetters[j])
        .classList.remove("kv-slide-second-letter");
    }

    for (var rand = 0; rand < Math.ceil(Math.random() * 3) + 1; rand++) {
      randLetter = Math.floor(Math.random() * i);

      document
        .getElementById("lettering_" + randLetter)
        .classList.add("kv-slide-second-letter");
      document
        .getElementById("lettering_" + randLetter)
        .style.setProperty(
          "--random_direct",
          Math.round(Math.random()) * 3 + "ch"
        );
      animatedLetters[rand] = randLetter;
    }

    str.style.setProperty("--kv_play_state", "running");
  }
}
if (page === "home") {
  var changeClass = function (name) {
    $("#search, #nav ul").removeAttr("class").addClass(name);
  };

  /**testimonial-slider**/
  if (
    jQuery(".toggle > input").is(":checked") &&
    !jQuery(event.target).parents(".toggle").is(".toggle")
  ) {
    jQuery(".toggle > input").prop("checked", false);
  }

  (function ($, window, undefined) {
    "use strict";

    $.HoverDir = function (options, element) {
      this.$el = $(element);
      this._init(options);
    };

    // the options
    $.HoverDir.defaults = {
      speed: 300,
      easing: "ease",
      hoverDelay: 0,
      inverse: false,
    };

    $.HoverDir.prototype = {
      _init: function (options) {
        // options
        this.options = $.extend(true, {}, $.HoverDir.defaults, options);
        // transition properties
        this.transitionProp =
          "all " + this.options.speed + "ms " + this.options.easing;
        // support for CSS transitions
        this.support = Modernizr.csstransitions;
        // load the events
        this._loadEvents();
      },
      _loadEvents: function () {
        var self = this;

        this.$el.on(
          "mouseenter.hoverdir, mouseleave.hoverdir",
          function (event) {
            var $el = $(this),
              $hoverElem = $el.find("div"),
              direction = self._getDir($el, { x: event.pageX, y: event.pageY }),
              styleCSS = self._getStyle(direction);

            if (event.type === "mouseenter") {
              $hoverElem.hide().css(styleCSS.from);
              clearTimeout(self.tmhover);

              self.tmhover = setTimeout(function () {
                $hoverElem.show(0, function () {
                  var $el = $(this);
                  if (self.support) {
                    $el.css("transition", self.transitionProp);
                  }
                  self._applyAnimation($el, styleCSS.to, self.options.speed);
                });
              }, self.options.hoverDelay);
            } else {
              if (self.support) {
                $hoverElem.css("transition", self.transitionProp);
              }
              clearTimeout(self.tmhover);
              self._applyAnimation(
                $hoverElem,
                styleCSS.from,
                self.options.speed
              );
            }
          }
        );
      },
      // credits : http://stackoverflow.com/a/3647634
      _getDir: function ($el, coordinates) {
        // the width and height of the current div
        var w = $el.width(),
          h = $el.height(),
          // calculate the x and y to get an angle to the center of the div from that x and y.
          // gets the x value relative to the center of the DIV and "normalize" it
          x = (coordinates.x - $el.offset().left - w / 2) * (w > h ? h / w : 1),
          y = (coordinates.y - $el.offset().top - h / 2) * (h > w ? w / h : 1),
          // the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
          // first calculate the angle of the point,
          // add 180 deg to get rid of the negative values
          // divide by 90 to get the quadrant
          // add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
          direction =
            Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;

        return direction;
      },
      _getStyle: function (direction) {
        var fromStyle,
          toStyle,
          slideFromTop = { left: "0px", top: "-100%" },
          slideFromBottom = { left: "0px", top: "100%" },
          slideFromLeft = { left: "-100%", top: "0px" },
          slideFromRight = { left: "100%", top: "0px" },
          slideTop = { top: "0px" },
          slideLeft = { left: "0px" };

        switch (direction) {
          case 0:
            // from top
            fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
            toStyle = slideTop;
            break;
          case 1:
            // from right
            fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
            toStyle = slideLeft;
            break;
          case 2:
            // from bottom
            fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
            toStyle = slideTop;
            break;
          case 3:
            // from left
            fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
            toStyle = slideLeft;
            break;
        }

        return { from: fromStyle, to: toStyle };
      },
      // apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
      _applyAnimation: function (el, styleCSS, speed) {
        $.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
        el.stop().applyStyle(
          styleCSS,
          $.extend(true, [], { duration: speed + "ms" })
        );
      },
    };

    var logError = function (message) {
      if (window.console) {
        window.console.error(message);
      }
    };

    $.fn.hoverdir = function (options) {
      var instance = $.data(this, "hoverdir");

      if (typeof options === "string") {
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          if (!instance) {
            logError(
              "cannot call methods on hoverdir prior to initialization; " +
                "attempted to call method '" +
                options +
                "'"
            );
            return;
          }

          if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
            logError("no such method '" + options + "' for hoverdir instance");
            return;
          }

          instance[options].apply(instance, args);
        });
      } else {
        this.each(function () {
          if (instance) {
            instance._init();
          } else {
            instance = $.data(this, "hoverdir", new $.HoverDir(options, this));
          }
        });
      }

      return instance;
    };
  })(jQuery, window);

  $(function () {
    $(" #da-thumbs > li ").each(function () {
      $(this).hoverdir();
    });
  });

  /*****/
  /* Demo purposes only */
  $(".hover").mouseleave(function () {
    $(this).removeClass("hover");
  });
}
if (
  page === "home" ||
  page === "about" ||
  page === "shop_home" ||
  page === "surfing_home" ||
  page === "main_home" ||
  page === "we-comming"
) {
  /***counterup***/
  jQuery(".counter").counterUp({
    delay: 200,
    time: 3000,
  });
}
/**PRODUCT-SINGLE-PAGE***/

if (page === "product-single") {
  /***hover-smoke-animation***/
  document
    .querySelectorAll(".button")
    .forEach(
      (button) =>
        (button.innerHTML =
          "<div><span>" +
          button.textContent.trim().split("").join("</span><span>"))
    );

  /***product-item-number-calculate***/
  $(function () {
    $(".js-cart-count a").click(function (e) {
      e.preventDefault();

      var element = $(this).parent().find("input.counter");
      var currentQuantityChange = element.val();

      if ($(this).hasClass("minus") && currentQuantityChange > 0) {
        element.val(parseInt(currentQuantityChange, 10) - 1);
      } else {
        if ($(this).hasClass("plus")) {
          element.val(parseInt(currentQuantityChange, 10) + 1);
        }
      }
    });
  });
}
if (page === "shop-collection") {
  $(document).ready(function () {
    $(".tabs__buttons--container li a").click(function () {
      $("li a").removeClass("active");
      $(this).addClass("active");
    });
  });
  /**pagination***/
  const tabsBtns = Array.from(document.querySelectorAll("[data-tab-id]"));
  const tabs = Array.from(document.querySelectorAll("[data-tab]"));

  let selectedTab = tabsBtns[0].dataset.tabId;

  const hideTabs = () => {
    tabs
      .filter((tab) => tab.dataset.tab !== selectedTab)
      .forEach((tab) => {
        tab.classList.add("tabs__tab--hide");
      });

    tabsBtns
      .filter((tab) => tab.dataset.tabId !== selectedTab)
      .forEach((tab) => {
        tab.classList.add("tabs__tab-btn--not-selected");
      });
  };
  hideTabs();

  const handleSelectTab = (e) => {
    selectedTab = e.target.dataset.tabId;

    tabs.forEach((tab) => {
      tab.classList.remove("tabs__tab--hide");
    });

    tabsBtns.forEach((tab) => {
      tab.classList.remove("tabs__tab-btn--not-selected");
    });

    hideTabs();
  };

  tabsBtns.forEach((btn) => {
    btn.addEventListener("click", handleSelectTab);
  });

  /**grid-custom-layout***/
  let buttons = document.querySelector(".custom-buttons");
  var wrapper = document.getElementById("grid-custom-wrapper");

  buttons.addEventListener("click", function (event) {
    let toAddClass = event.target.className;
    wrapper.classList = toAddClass;
  });

  const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
  let priceGap = 1000;

  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });

  /***start-for-sidebar-responsiveness-code**/
  const FtoShow = ".filter";
  const FpoPop = document.querySelector(FtoShow);
  console.log(FpoPop);
  const FtRigger = document.querySelector(".filter-trigger");
  FtRigger.addEventListener("click", () => {
    setTimeout(() => {
      if (!FpoPop.classList.contains("show")) {
        FpoPop.classList.add("show");
      }
    }, 250);
  });
  document.addEventListener("click", (e) => {
    const isClosest = e.target.closest(FtoShow);
    if (!isClosest && FpoPop.classList.contains("show")) {
      FpoPop.classList.remove("show");
    }
  });
}
if (page === "about") {
  const subSwiper = new Swiper(".sub-swiper", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 3,
  });

  const mainSwiper = new Swiper(".main-swiper", {
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    thumbs: {
      swiper: subSwiper,
    },
  });

  // Swiper: Slider
  $(document).ready(function () {
    // Swiper: Slider
    new Swiper(".creative-team .swiper-container", {
      loop: true,
      slidesPerView: 4,
      paginationClickable: true,
      spaceBetween: 20,
      breakpoints: {
        1920: {
          slidesPerView: 5,
          spaceBetween: 25,
        },
        1028: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
  });
}
if (page === "cart-sidebar") {
  function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if (isIncreasing == true) {
      productNumber = parseInt(productNumber) + 1;
    } else if (isIncreasing == false && productNumber > 0) {
      productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
  }
  function removeProduct(item) {
    document.getElementById(item + "-display").style.display = "none";
  }
  //handle phone increse decrease events
  document.getElementById("phone-plus").addEventListener("click", function () {
    updateProductNumber("phone", 60, true);
  });
  document.getElementById("phone-minus").addEventListener("click", function () {
    updateProductNumber("phone", 60, false);
  });
  document
    .getElementById("phoneTwo-plus")
    .addEventListener("click", function () {
      updateProductNumber("phoneTwo", 10, true);
    });
  document
    .getElementById("phoneTwo-minus")
    .addEventListener("click", function () {
      updateProductNumber("phoneTwo", 10, false);
    });
  document
    .getElementById("phoneThree-plus")
    .addEventListener("click", function () {
      updateProductNumber("phoneThree", 10, true);
    });
  document
    .getElementById("phoneThree-minus")
    .addEventListener("click", function () {
      updateProductNumber("phoneThree", 10, false);
    });
  //handle case increse decrease events
  document.getElementById("case-plus").addEventListener("click", function () {
    updateProductNumber("case", 30, true);
  });
  document.getElementById("case-minus").addEventListener("click", function () {
    updateProductNumber("case", 30, false);
  });
  //handle t-shart increse decrease events
  document.getElementById("shart-plus").addEventListener("click", function () {
    updateProductNumber("shart", 40, true);
  });
  document.getElementById("shart-minus").addEventListener("click", function () {
    updateProductNumber("shart", 40, false);
  });
  //remove item

  document
    .getElementById("phone-remove")
    .addEventListener("click", function () {
      removeProduct("phone");
    });
  document.getElementById("case-remove").addEventListener("click", function () {
    removeProduct("case");
  });
  document
    .getElementById("shart-remove")
    .addEventListener("click", function () {
      removeProduct("shart");
    });
  document
    .getElementById("whiteshart-remove")
    .addEventListener("click", function () {
      removeProduct("whiteshart");
    });
  document
    .getElementById("bluebag-remove")
    .addEventListener("click", function () {
      removeProduct("bluebag");
    });
}
if (page === "wishlist" || page === "cart-sidebar") {
  function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if (isIncreasing == true) {
      productNumber = parseInt(productNumber) + 1;
    } else if (isIncreasing == false && productNumber > 0) {
      productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
  }
  function removeProduct(item) {
    document.getElementById(item + "-display").style.display = "none";
  }
  //handle phone increse decrease events
  document.getElementById("phone-plus").addEventListener("click", function () {
    updateProductNumber("phone", 60, true);
  });
  document.getElementById("phone-minus").addEventListener("click", function () {
    updateProductNumber("phone", 60, false);
  });
  //handle case increse decrease events
  document.getElementById("case-plus").addEventListener("click", function () {
    updateProductNumber("case", 30, true);
  });
  document.getElementById("case-minus").addEventListener("click", function () {
    updateProductNumber("case", 30, false);
  });
  //handle t-shart increse decrease events
  document.getElementById("shart-plus").addEventListener("click", function () {
    updateProductNumber("shart", 40, true);
  });
  document.getElementById("shart-minus").addEventListener("click", function () {
    updateProductNumber("shart", 40, false);
  });

  //remove item
  document
    .getElementById("phone-remove")
    .addEventListener("click", function () {
      removeProduct("phone");
    });
  document.getElementById("case-remove").addEventListener("click", function () {
    removeProduct("case");
  });
  document
    .getElementById("shart-remove")
    .addEventListener("click", function () {
      removeProduct("shart");
    });
}
if (page === "shoping-cart-v-two") {
  function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if (isIncreasing == true) {
      productNumber = parseInt(productNumber) + 1;
    } else if (isIncreasing == false && productNumber > 0) {
      productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update product total
    const productTotal = document.getElementById(product + "-total");
    productTotal.innerText = productNumber * price;
    //calculate total
    calculateTotal();
  }

  function getInputValue(product) {
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
  }
  function calculateTotal() {
    const phoneTotal = getInputValue("phone") * 60;
    const caseTotal = getInputValue("case") * 30;
    const shartTotal = getInputValue("shart") * 40;
    const glassTotal = getInputValue("glass") * 20;
    const sunglassTotal = getInputValue("sunglass") * 35;
    const subTotal =
      phoneTotal + caseTotal + shartTotal + glassTotal + sunglassTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    //update on the html
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = totalPrice;
  }

  function removeProduct(item) {
    document.getElementById(item + "-display").style.display = "none";
  }

  //handle phone increse decrease events
  document.getElementById("phone-plus").addEventListener("click", function () {
    updateProductNumber("phone", 60, true);
  });
  document.getElementById("phone-minus").addEventListener("click", function () {
    updateProductNumber("phone", 60, false);
  });
  //handle case increse decrease events
  document.getElementById("case-plus").addEventListener("click", function () {
    updateProductNumber("case", 30, true);
  });
  document.getElementById("case-minus").addEventListener("click", function () {
    updateProductNumber("case", 30, false);
  });
  //handle t-shart increse decrease events
  document.getElementById("shart-plus").addEventListener("click", function () {
    updateProductNumber("shart", 40, true);
  });
  document.getElementById("shart-minus").addEventListener("click", function () {
    updateProductNumber("shart", 40, false);
  });
  document.getElementById("glass-plus").addEventListener("click", function () {
    updateProductNumber("glass", 20, true);
  });
  document.getElementById("glass-minus").addEventListener("click", function () {
    updateProductNumber("glass", 20, false);
  });
  document
    .getElementById("sunglass-plus")
    .addEventListener("click", function () {
      updateProductNumber("sunglass", 35, true);
    });
  document
    .getElementById("sunglass-minus")
    .addEventListener("click", function () {
      updateProductNumber("sunglass", 35, false);
    });
  //remove item
  document
    .getElementById("phone-remove")
    .addEventListener("click", function () {
      removeProduct("phone");
    });
  document.getElementById("case-remove").addEventListener("click", function () {
    removeProduct("case");
  });
  document
    .getElementById("shart-remove")
    .addEventListener("click", function () {
      removeProduct("shart");
    });
  document
    .getElementById("glass-remove")
    .addEventListener("click", function () {
      removeProduct("glass");
    });
  document
    .getElementById("sunglass-remove")
    .addEventListener("click", function () {
      removeProduct("sunglass");
    });
}
if (page === "shoping-cart") {
  function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if (isIncreasing == true) {
      productNumber = parseInt(productNumber) + 1;
    } else if (isIncreasing == false && productNumber > 0) {
      productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update product total
    const productTotal = document.getElementById(product + "-total");
    productTotal.innerText = productNumber * price;
    //calculate total
    calculateTotal();
  }

  function getInputValue(product) {
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
  }
  function calculateTotal() {
    const phoneTotal = getInputValue("phone") * 60;
    const caseTotal = getInputValue("case") * 30;
    const shartTotal = getInputValue("shart") * 40;
    const glassTotal = getInputValue("glass") * 20;
    const sunglassTotal = getInputValue("sunglass") * 35;
    const subTotal =
      phoneTotal + caseTotal + shartTotal + glassTotal + sunglassTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    //update on the html
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = totalPrice;
  }

  function removeProduct(item) {
    document.getElementById(item + "-display").style.display = "none";
  }

  //handle phone increse decrease events
  document.getElementById("phone-plus").addEventListener("click", function () {
    updateProductNumber("phone", 60, true);
  });
  document.getElementById("phone-minus").addEventListener("click", function () {
    updateProductNumber("phone", 60, false);
  });
  //handle case increse decrease events
  document.getElementById("case-plus").addEventListener("click", function () {
    updateProductNumber("case", 30, true);
  });
  document.getElementById("case-minus").addEventListener("click", function () {
    updateProductNumber("case", 30, false);
  });
  //handle t-shart increse decrease events
  document.getElementById("shart-plus").addEventListener("click", function () {
    updateProductNumber("shart", 40, true);
  });
  document.getElementById("shart-minus").addEventListener("click", function () {
    updateProductNumber("shart", 40, false);
  });

  //remove item
  document
    .getElementById("phone-remove")
    .addEventListener("click", function () {
      removeProduct("phone");
    });
  document.getElementById("case-remove").addEventListener("click", function () {
    removeProduct("case");
  });
  document
    .getElementById("shart-remove")
    .addEventListener("click", function () {
      removeProduct("shart");
    });
}
if (page === "cart-sidebar") {
  const openBtn = document.getElementById("open_cart_btn");
  const cart = document.getElementById("sidecart");
  const closeBtn = document.getElementById("close_btn");
  const backdrop = document.querySelector(".backdrop");

  openBtn.addEventListener("click", openCart);
  closeBtn.addEventListener("click", closeCart);
  backdrop.addEventListener("click", closeCart);

  //open cart
  function openCart() {
    cart.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add("show");
    }, 0);
  }
  //close cart
  function closeCart() {
    cart.classList.remove("open");
    backdrop.classList.remove("show");
    setTimeout(() => {
      backdrop.style.display = "none";
    }, 500);
  }
}
if (page === "checkout-page") {
  (function () {
    $(document).ready(function () {
      return $("input[type='radio']").change(function () {
        var $current_radiobutton, current_panel_id, current_radiobutton_name;
        $current_radiobutton = $(this);
        current_radiobutton_name = $current_radiobutton.attr("name");
        current_panel_id = `#${$current_radiobutton.attr("value")}_panel`;
        return $(`[name='${current_radiobutton_name}']`).each((i, element) => {
          var $panel, $radiobutton, panel_id;
          $radiobutton = $(element);
          panel_id = `#${$radiobutton.attr("id")}_panel`;
          $panel = $(panel_id);
          if (panel_id === current_panel_id) {
            return $panel.show();
          } else {
            return $panel.hide();
          }
        });
      });
    });
  }).call(this);
}
if (page === "shop_collectionV2") {
  // search-box open close js code
  let navbar = document.querySelector(".navbar");
  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");

  // sidebar submenu open close js code
  let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
  };

  let jsArrow = document.querySelector(".js-arrow");
  jsArrow.onclick = function () {
    navLinks.classList.toggle("show3");
  };
  let jsArrow_two = document.querySelector(".js-arrow-two");
  jsArrow_two.onclick = function () {
    navLinks.classList.toggle("show2");
  };
  let jsArrow_three = document.querySelector(".js-arrow-three");
  jsArrow_three.onclick = function () {
    navLinks.classList.toggle("show4");
  };
  $(".selectall").click(function () {
    $(".individual").prop("checked", $(this).prop("checked"));
  });

  /**price-dropdown***/
  const selected = document.querySelector(".selected");
  const optionsContainer = document.querySelector(".options-container");
  const optionsList = document.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });

  optionsList.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerHTML = option.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
}
if (page === "contact") {
  var countryData = window.intlTelInputGlobals.getCountryData(),
    input = document.querySelector("#phone"),
    addressDropdown = document.querySelector("#country");

  var iti = window.intlTelInput(input, {
    hiddenInput: "full_phone",
    utilsScript:
      "https://intl-tel-input.com/node_modules/intl-tel-input/build/js/utils.js?1549804213570", // just for formatting/placeholders etc
  });

  for (var i = 0; i < countryData.length; i++) {
    var country = countryData[i];
    var optionNode = document.createElement("option");
    optionNode.value = country.iso2;
    var textNode = document.createTextNode(country.name);
    optionNode.appendChild(textNode);
  }

  // listen to the telephone input for changes
  input.addEventListener("countrychange", function (e) {
    addressDropdown.value = iti.getSelectedCountryData().iso2;
  });

  $("#phone").prop("value", "+88");
}

/**wishlist-search-input**/
let results = document.getElementById("res");

function myFunc(value) {
  if (value !== "") {
    results.classList.remove("hideResults");
  } else {
    results.classList.add("hideResults");
  }
}
