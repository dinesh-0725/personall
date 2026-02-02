/* ===============================
   ELEMENTS
================================ */
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

/* ===============================
   😈 NO BUTTON (MIDDLE-ONLY RUN)
================================ */
const moveNoButton = () => {
  const containerRect = questionContainer.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Safe padding so it never touches edges
  const padding = 40;

  // Define middle movement area
  const minX = containerRect.left + padding;
  const maxX =
    containerRect.right - btnRect.width - padding;

  const minY = containerRect.top + padding;
  const maxY =
    containerRect.bottom - btnRect.height - padding;

  const randomX = Math.random() * (maxX - minX) + minX;
  const randomY = Math.random() * (maxY - minY) + minY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
};

// Desktop + Mobile
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

/* ===============================
   💖 YES BUTTON FUNCTION
================================ */
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
    startCelebration();
  }, 3000);
});

/* ===============================
   💕 MINI FLOATING HEARTS
================================ */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "mini-heart";
  heart.innerHTML = Math.random() > 0.5 ? "💗" : "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);

/* ===============================
   🌸 FALLING PETALS
================================ */
setInterval(() => {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.innerHTML = "🌸";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 5 + Math.random() * 3 + "s";
  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 8000);
}, 900);

/* ===============================
   ✨ SPARKLES ON BUTTON HOVER
================================ */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    for (let i = 0; i < 6; i++) {
      const sparkle = document.createElement("span");
      sparkle.className = "sparkle";
      sparkle.style.left = Math.random() * 40 + "px";
      sparkle.style.top = Math.random() * 20 + "px";
      btn.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 800);
    }
  });
});

/* ===============================
   🎉 CELEBRATION AFTER YES
================================ */
function startCelebration() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const emoji = document.createElement("div");
      emoji.innerHTML = ["❤️", "💖", "💘", "🥰"][Math.floor(Math.random() * 4)];
      emoji.style.position = "fixed";
      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.top = "100vh";
      emoji.style.fontSize = "24px";
      emoji.style.animation = "floatUp 4s linear forwards";
      emoji.style.pointerEvents = "none";
      document.body.appendChild(emoji);

      setTimeout(() => emoji.remove(), 4000);
    }, i * 120);
  }
}

/* ===============================
   💓 BUTTON CLICK POP
================================ */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(1.25)";
    setTimeout(() => {
      btn.style.transform = "scale(1.05)";
    }, 150);
  });
});
