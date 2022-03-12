//Hamburger Animation event listener
const hamburgerIcon = document.getElementById("hamburger");
const toggleOpenHamburger = () => {
  document.getElementById("hamburger").classList.toggle("open");
  document.getElementById("mobile-nav").classList.toggle("ham-open");
  document.getElementById("mobile-links").classList.toggle("ham-open");
};
hamburgerIcon.addEventListener("click", toggleOpenHamburger);