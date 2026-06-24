if (typeof Swiper !== "undefined") {
  if (document.querySelector(".hero-swiper")) {
    new Swiper(".hero-swiper", {
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".hero-swiper .swiper-pagination",
        clickable: true,
      },
    });
  }

  if (document.querySelector(".brands-swiper")) {
    new Swiper(".brands-swiper", {
      loop: true,
      speed: 600,
      spaceBetween: 24,
      autoplay: {
        delay: 1800,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 2.1,
        },
        576: {
          slidesPerView: 3.2,
        },
        992: {
          slidesPerView: 5.4,
        },
      },
    });
  }

  if (document.querySelector(".popular-swiper")) {
    new Swiper(".popular-swiper", {
      spaceBetween: 24,
      pagination: {
        el: ".popular-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
        },
        576: {
          slidesPerView: 2.2,
        },
        768: {
          slidesPerView: 3.2,
        },
        1200: {
          slidesPerView: 4.5,
        },
      },
    });
  }

  if (document.querySelector(".new-arrivals-swiper")) {
    new Swiper(".new-arrivals-swiper", {
      spaceBetween: 16,
      pagination: {
        el: ".new-arrivals-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.15,
        },
        576: {
          slidesPerView: 1.8,
        },
        768: {
          slidesPerView: 2.2,
        },
        1200: {
          slidesPerView: 4.5,
        },
      },
    });
  }

  if (document.querySelector(".best-sellers-swiper")) {
    new Swiper(".best-sellers-swiper", {
      spaceBetween: 16,
      pagination: {
        el: ".best-sellers-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
        },
        576: {
          slidesPerView: 2.1,
        },
        768: {
          slidesPerView: 3.1,
        },
        1200: {
          slidesPerView: 4.5,
        },
      },
    });
  }

  if (document.querySelector(".product-gallery-swiper")) {
    const productThumbsSwiper = new Swiper(".product-thumbs-swiper", {
      spaceBetween: 12,
      slidesPerView: 4,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          slidesPerView: 3.2,
        },
        576: {
          slidesPerView: 4,
        },
      },
    });

    new Swiper(".product-gallery-swiper", {
      spaceBetween: 16,
      loop: true,
      navigation: {
        nextEl: ".product-gallery-swiper .swiper-button-next",
        prevEl: ".product-gallery-swiper .swiper-button-prev",
      },
      thumbs: {
        swiper: productThumbsSwiper,
      },
    });
  }

  if (document.querySelector(".product-related-swiper")) {
    new Swiper(".product-related-swiper", {
      spaceBetween: 16,
      pagination: {
        el: ".product-related-swiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".product-related-swiper .swiper-button-next",
        prevEl: ".product-related-swiper .swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.15,
        },
        576: {
          slidesPerView: 2.1,
        },
        992: {
          slidesPerView: 3.1,
        },
        1400: {
          slidesPerView: 4.1,
        },
      },
    });
  }
}

document.querySelectorAll(".product-card, .deals-mini-card, .more-product-card").forEach((card) => {
  if (card.querySelector(".product-cart-btn")) {
    return;
  }

  const cartButton = document.createElement("a");
  cartButton.className = "product-cart-btn";
  cartButton.href = "cart.html";
  cartButton.setAttribute("aria-label", "Add to cart");
  cartButton.innerHTML = '<i class="bi bi-cart-plus"></i>';
  card.appendChild(cartButton);
});

document.querySelectorAll("[data-qty-stepper]").forEach((stepper) => {
  const valueEl = stepper.querySelector("[data-qty-value]");
  if (!valueEl) {
    return;
  }

  stepper.querySelectorAll("[data-qty-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const currentValue = Number(valueEl.textContent) || 1;
      const action = button.getAttribute("data-qty-action");
      const nextValue = action === "increase" ? currentValue + 1 : Math.max(1, currentValue - 1);
      valueEl.textContent = String(nextValue);
    });
  });
});

document.querySelectorAll(".color-swatches").forEach((swatchGroup) => {
  const selectedColor = swatchGroup.closest(".product-option-group")?.querySelector("[data-selected-color]");

  swatchGroup.querySelectorAll(".color-swatch").forEach((swatch) => {
    swatch.addEventListener("click", () => {
      const color = swatch.dataset.color;

      swatchGroup.querySelectorAll(".color-swatch").forEach((button) => {
        button.classList.remove("active");
        button.setAttribute("aria-pressed", "false");
      });

      swatch.classList.add("active");
      swatch.setAttribute("aria-pressed", "true");

      if (selectedColor && color) {
        selectedColor.textContent = color;
      }
    });
  });
});

const dealTimerValue = document.querySelector("#dealTimerValue");
const dealTimer = document.querySelector("#dealTimer");

if (dealTimerValue && dealTimer) {
  const dealDeadline = new Date("2026-06-06T00:00:00+05:30").getTime();
  const startCountdown = () => {
    let countdownInterval;

    const renderTime = () => {
      const now = Date.now();
      const difference = dealDeadline - now;

      if (difference <= 0) {
        dealTimerValue.textContent = "Expired";
        dealTimer.classList.add("deal-timer-ended");
        clearInterval(countdownInterval);
        return;
      }

      const remainingSeconds = Math.floor(difference / 1000);
      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = remainingSeconds % 60;

      dealTimerValue.textContent = `${String(hours).padStart(2, "0")}h : ${String(minutes).padStart(2, "0")}m : ${String(seconds).padStart(2, "0")}s`;
    };

    renderTime();
    countdownInterval = setInterval(renderTime, 1000);
  };

  startCountdown();
}

if (typeof Swiper !== "undefined" && document.querySelector(".cart-recommend-swiper")) {
  new Swiper(".cart-recommend-swiper", {
    spaceBetween: 24,
    pagination: {
      el: ".cart-recommend-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".cart-recommend-swiper .swiper-button-next",
      prevEl: ".cart-recommend-swiper .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      576: {
        slidesPerView: 2.1,
      },
      768: {
        slidesPerView: 2.5,
      },
      992: {
        slidesPerView: 3.5,
      },
      1200: {
        slidesPerView: 4.2,
      },
    },
  });
}
