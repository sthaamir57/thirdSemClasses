const gdm = document.querySelector(".good-morning");
const currTime = today.getHours();
const tl = gsap.timeline();
let SCREEN_WIDTH = window.innerWidth;

// const screenSize = window.addEventListener("resize", (e) => {
//   console.log(window.innerWidth);
// });

startAnimation(currTime);

function startAnimation(currTime) {
  if (currTime <= 6 && currTime >= 3) {
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
  }

  if (SCREEN_WIDTH <= 980) {
    tl.from(".day", 1, {
      opacity: 0,
      ease: "SlowMo.ease.config(0.7, 0.7, false)",
      scaleY: 0,
      delay: 1,
    });
  } else {
    tl.from(".day", 1, {
      opacity: 0,
      ease: "SlowMo.ease.config(0.7, 0.7, false)",
      delay: 1,
      scaleX: 0,
    });
  }

  tl.to(
    ".good-morning svg",
    1,
    {
      x: 200,
      opacity: 0,
      ease: "SlowMo.ease.config(0.7, 0.7, false)",
    },
    "-=1"
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
  )
    .from(
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
    )
    .from(
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
    )
    .from(
      ".inner-bar-1",
      1.8,
      {
        x: -2000,
        ease: "power4.out",
        opacity: 0,
        delay: 0,
      },
      "-=1.9"
    )
    .from(
      ".inner-bar-2",
      1.8,
      {
        x: -2000,
        ease: "power4.out",
        opacity: 0,
        delay: 0,
      },
      "-=0.2"
    )
    .from(
      ".sem",
      1.8,
      {
        opacity: 0,
        ease: "power4.out",
        delay: 0,
      },
      "-=0.8"
    )
    .from(
      ".asmt",
      1.8,
      {
        opacity: 0,
        ease: "power4.out",
        delay: 0,
      },
      "-=3.8"
    )
    .from(
      ".border-bottom",
      0.8,
      {
        opacity: 0,
        ease: "power4.out",
        delay: 0,
      },
      "-=0.8"
    )
    .from(
      ".resources a",
      1.2,
      {
        y: -100,
        ease: "power3.out",
        skewY: 15,
        delay: 0,
      },
      "-=0.8"
    );
}
