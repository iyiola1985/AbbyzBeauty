export default function initAnimations() {
  if (typeof window === "undefined") return;

  const init = () => {
    const $ = (window as Window & { jQuery?: JQueryStatic; $?: JQueryStatic }).jQuery ?? (window as Window & { $?: JQueryStatic }).$;
    if (!$) return;

    // Hero text fade-in
    $(".hero-content").css({ opacity: 0 }).animate({ opacity: 1 }, 1200);

    // Button hover glow (CSS handles most; jQuery adds extra class for emphasis)
    $(".hero-btn-primary").on("mouseenter", function () {
      $(this).addClass("shadow-[0_0_30px_rgba(233,30,140,0.6)]");
    });
    $(".hero-btn-primary").on("mouseleave", function () {
      $(this).removeClass("shadow-[0_0_30px_rgba(233,30,140,0.6)]");
    });

    // Scroll reveal
    const revealElements = ".scroll-reveal";
    $(revealElements).css({ opacity: 0, transform: "translateY(30px)" });

    const revealOnScroll = () => {
      $(revealElements).each(function () {
        const el = $(this);
        const top = el.offset()?.top ?? 0;
        const bottom = top + (el.outerHeight() ?? 0);
        const viewportTop = $(window).scrollTop() ?? 0;
        const viewportBottom = viewportTop + ($(window).height() ?? 0);

        if (bottom > viewportTop && top < viewportBottom - 80) {
          el.css({ opacity: 0, transform: "translateY(30px)" });
          el.animate(
            { opacity: 1 },
            { duration: 800, queue: false }
          );
          el.css("transform", "translateY(0)");
        }
      });
    };

    const revealOnScrollRAF = () => {
      requestAnimationFrame(() => {
        $(revealElements).each(function () {
          const el = this as HTMLElement;
          const rect = el.getBoundingClientRect();
          const inView = rect.top < window.innerHeight - 80;
          if (inView && el.style.opacity !== "1") {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        });
      });
    };

    $(window).on("scroll", revealOnScrollRAF);
    revealOnScrollRAF();

    // Service card hover lift (enhanced via jQuery)
    $(".service-card").on("mouseenter", function () {
      $(this).stop(true).animate(
        { marginTop: -8 },
        { duration: 300, easing: "swing" }
      );
    });
    $(".service-card").on("mouseleave", function () {
      $(this).stop(true).animate({ marginTop: 0 }, { duration: 300 });
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on("click", function (e) {
      const href = $(this).attr("href");
      if (href && href !== "#") {
        const target = $(href);
        if (target.length) {
          e.preventDefault();
          target[0].scrollIntoView({ behavior: "smooth" });
        }
      }
    });

    // Gallery hover zoom
    $(".gallery-item").on("mouseenter", function () {
      $(this).find("img").stop(true).animate({ zoom: 1.1 }, 400);
    });
    $(".gallery-item").on("mouseleave", function () {
      $(this).find("img").stop(true).animate({ zoom: 1 }, 400);
    });

    // Use CSS transform for zoom (jQuery animate doesn't support scale well)
    $(".gallery-item").on("mouseenter", function () {
      $(this).find("img").css("transform", "scale(1.1)");
    });
    $(".gallery-item").on("mouseleave", function () {
      $(this).find("img").css("transform", "scale(1)");
    });

    // Booking success animation
    $(".booking-success").each(function () {
      $(this).hide().css({ opacity: 0 }).show().animate({ opacity: 1 }, 600);
    });

    // Testimonial slider
    const slides = $(".testimonial-slide");
    if (slides.length > 1) {
      let current = 0;
      const total = slides.length;
      const track = $(".testimonial-track");
      const container = $(".testimonial-slider");

      const updateSlider = () => {
        const slideWidth = slides.first().outerWidth() ?? container.outerWidth() ?? 400;
        const offset = current * slideWidth;
        track.css("transform", `translateX(-${offset}px)`);
        $(".testimonial-dots .dot")
          .removeClass("active")
          .css("background", "")
          .eq(current)
          .addClass("active")
          .css("background", "#E91E8C");
      };

      const goTo = (i: number) => {
        current = ((i % total) + total) % total;
        updateSlider();
      };

      const dotsContainer = $(".testimonial-dots");
      dotsContainer.empty();
      for (let i = 0; i < total; i++) {
        dotsContainer.append(
          $(
            '<button class="dot w-2 h-2 rounded-full mx-1 bg-[#E91E8C]/30 hover:bg-[#E91E8C] transition-colors" data-index="' +
              i +
              '" type="button"></button>'
          )
        );
      }
      $(".testimonial-dots .dot").first().addClass("active").css("background", "#E91E8C");

      $(".testimonial-dots").on("click", ".dot", function () {
        goTo(parseInt(String($(this).attr("data-index") ?? "0"), 10));
      });

      $(window).on("resize", updateSlider);
      updateSlider();
      setInterval(() => goTo(current + 1), 5000);
    }
  };

  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(init, 100);
  } else {
    window.addEventListener("load", () => setTimeout(init, 100));
  }
}
