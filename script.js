window.addEventListener("scroll", () => {
  document.querySelector("header").style.boxShadow =
    window.scrollY > 50 ? "0 2px 10px rgba(0,0,0,0.1)" : "none";
});
