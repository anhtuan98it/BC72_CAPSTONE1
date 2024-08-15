function darkMode() {
  const navbar_input = document.getElementById("navbar-input");
  navbar_input.classList.toggle("dark-mode");

  const search_icon = document.querySelector(".search__icon");
  search_icon.classList.toggle("dark-mode");

  const dinnerContent = document.getElementById("dinner-content");
  dinnerContent.classList.toggle("dark-mode");

  const dinnerCategory = document.getElementById("dinner-category");
  dinnerCategory.classList.toggle("dark-mode");

  const homepageServices = document.getElementById("homepage-services");
  homepageServices.classList.toggle("dark-mode");

  const number = document.querySelector(".number");
  number.classList.toggle("dark-mode");

  const homepageVideo = document.querySelector(".homepage-video");
  homepageVideo.classList.toggle("dark-mode");

  const dinnerBlog = document.querySelector(".dinner-blog");
  dinnerBlog.classList.toggle("dark-mode");
   
  const testimonials = document.getElementById("testimonials");
  testimonials.classList.toggle("dark-mode");
  

  // const box = dinnerContent.querySelector("box");
  // box.classList.toggle("dark-mode");

  const heading = dinnerContent.querySelector("h3");
  heading.classList.toggle("text-white");

  const darkMoonIcon = document.getElementById("dark-m");
  const isDarkMode = darkMoonIcon.classList.contains("fa-sun");

  if (isDarkMode) {
    darkMoonIcon.classList.remove("fa-sun");
    darkMoonIcon.classList.add("fa-moon");
  } else {
    darkMoonIcon.classList.remove("fa-moon");
    darkMoonIcon.classList.add("fa-sun");
  }

}
const navbar = document.querySelector(".mobile-nav-button");
navbar.onclick = function () {
  const overlay = document.querySelector(".overlay-scale");
  overlay.classList.toggle("open");
}

const closeNavBar = document.querySelector(".overlay-close");
closeNavBar.onclick = function () {
  const overlay = document.querySelector(".overlay-scale");
  overlay.classList.remove("open");
}
