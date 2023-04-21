var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

// Menu
const menuOpen = document.querySelector(".menu-open");
const closeMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuOpen.addEventListener("click", () => {
  mobileMenu.style.left = "0px";
});

closeMenu.addEventListener("click", () => {
  mobileMenu.style.left = "-100%";
});

const nav = document.getElementById("nav");
var waypoint = new Waypoint({
  element: document.getElementById("about"),
  handler: function (direction) {
    if (direction === "down") {
      nav.classList.add(
        "sticky",
        "top-0",
        "animate__fadeInDown",
        "bg-black",
        "shadow-lg"
      );
    } else {
      nav.classList.remove(
        "sticky",
        "top-0",
        "animate__fadeInDown",
        "bg-black",
        "shadow-lg"
      );
    }
  },
  offset: "20%",
});
