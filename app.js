const Head = document.querySelector("home");
window.addEventListener("scroll", function () {
  Head.classList.toggle("sticky", window.scrollY > 0);
});

const sr = ScrollReveal({
  distance: "25px",
  duration: 2500,
  reset: true,
});

sr.reveal(".head", { delay: 190 }, { origin: "top" });
sr.reveal(".head-about", { delay: 190 }, { origin: "bottom" });
