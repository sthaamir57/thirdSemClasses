const gdm = document.querySelector(".good-morning");
const ahile = today.getHours();
const tl = gsap.timeline();

// ahile <= 6 && ahile >= 3

if (1) {
  gdm.style.visibility = "visible";

  tl.from(".good-morning svg", 1, {
    y: 200,
    ease: "power4.out",
    delay: 1,
    skewY: 15,
    stagger: {
      amount: 0.4,
    },
  });

  tl.to(
    ".good-morning svg",
    1,
    {
      x: 200,
      opacity: 0,
      ease: "SlowMo.ease.config(0.7, 0.7, false)",
    },
    "+=1.5"
  );
}

tl.from(
  ".day",
  1,
  {
    opacity: 0,
    ease: "SlowMo.ease.config(0.7, 0.7, false)",
    delay: 1,
    scaleX: 0,
  },
  "-=2"
);

tl.from(
  ".fly",
  3.2,
  {
    x: -2200,
    opacity: 0,
    ease: "Expo.easeInOut",
    delay: 0,
    scaleX: 1.7,
  },
  "-=1.2"
);

tl.from(
  ".day .today-is span",
  1.8,
  {
    y: 200,
    ease: "power4.out",
    delay: 0,
    skewY: 15,
    stagger: {
      amount: 0.4,
    },
  },
  "-=2.6"
);

tl.from(
  "li a",
  1.8,
  {
    y: 400,
    ease: "power4.out",
    delay: 0,
    skewY: 15,
    stagger: {
      amount: 0.2,
    },
  },
  "-=1.8"
);

tl.from(
  ".inner-bar-2",
  1.8,
  {
    x: 2000,
    opacity: 0,
    ease: "power4.out",
    delay: 0,
    // scale: 45,
    // skewY: 15,
  },
  "-=1.8"
);
tl.from(
  ".inner-bar-1",
  1.8,
  {
    x: 2000,
    opacity: 0,
    ease: "power4.out",
    delay: 0,
    // scale: 45,
    // skewY: 15,
  },
  "-=0.2"
);
tl.from(
  ".asmt",
  1.8,
  {
    // x: 500,
    opacity: 0,
    ease: "power4.out",
    delay: 0,
    // scale: 45,
    // skewY: 15,
  },
  "-=0.8"
);
tl.from(
  ".sem",
  1.8,
  {
    // x: 500,
    opacity: 0,
    ease: "power4.out",
    delay: 0,
    // scale: 45,
    // skewY: 15,
  },
  "-=3.8"
);
