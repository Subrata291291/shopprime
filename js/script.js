const heroSwiper = new Swiper(".hero-swiper", {
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

const brandsSwiper = new Swiper(".brands-swiper", {
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

const popularSwiper = new Swiper(".popular-swiper", {
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

const newArrivalsSwiper = new Swiper(".new-arrivals-swiper", {
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

const bestSellersSwiper = new Swiper(".best-sellers-swiper", {
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

const cartRecommendSwiper = new Swiper(".cart-recommend-swiper", {
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
