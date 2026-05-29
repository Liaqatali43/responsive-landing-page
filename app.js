// const navbar = document.querySelector(".header-section");

// window.addEventListener((scroll) => {
//   if (window.scroll > 50) {
//     navbar.classList.add("header-scroll");
//   }
// });

const navbar = document.querySelector(".header-container");

window.addEventListener("scroll", () => {
  if (window.scrollY) {
    navbar.classList.add("header-scroll");
  } else {
    navbar.classList.remove("header-scroll");
  }
});
