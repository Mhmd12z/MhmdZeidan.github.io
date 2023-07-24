let btnMenu = document.querySelector(".links-icon");
let links = document.querySelector(".links");
btnMenu.addEventListener("click", function () {
  links.classList.toggle("close");
});
let goRight = document.querySelector(".go-right");
let goLeft = document.querySelector(".go-left");
let image = document.querySelector(".main img");
let imagesHome = [
  "./images/catWallpaper.jpg",
  "./images/lionWallpaper.jpg",
  "./images/owlwallpaper.jpg",
];
var i = 0;
let circles = document.querySelectorAll("#scroll div");
goRight.addEventListener("click", function () {
  for (let i = 0; i < circles.length; i++) {
    circles[i].className = "";
  }
  circles[(i = (i + 3) % imagesHome.length)].classList.add("active-circle");
  image.src = imagesHome[(i = (i + 1) % imagesHome.length)];
  localStorage.setItem("indexImage", i);
});
goLeft.addEventListener("click", function () {
  for (let i = 0; i < circles.length; i++) {
    circles[i].className = "";
  }
  circles[(i = (i + 1) % imagesHome.length)].classList.add("active-circle");
  image.src = imagesHome[(i = (i + 1) % imagesHome.length)];
  localStorage.setItem("indexImage", i);
});
setInterval(function () {
  for (let i = 0; i < circles.length; i++) {
    circles[i].className = "";
  }
  circles[(i = (i + 3) % imagesHome.length)].classList.add("active-circle");
  image.src = imagesHome[(i = (i + 1) % imagesHome.length)];
  localStorage.setItem("indexImage", i);
}, 3000);
image.src = imagesHome[Number(localStorage.getItem("indexImage"))];
let search = document.querySelector(".search-icon");
let searchPage = document.querySelector(".search");
let searchInput = document.querySelector(".search input");
search.addEventListener("click", function (e) {
  e.preventDefault();
  searchPage.classList.toggle("close-search");
  searchInput.focus();
});
searchInput.addEventListener("blur", function () {
  searchPage.classList.toggle("close-search");
});
let categories = document.querySelector(".portfolio .categories");
let sec = document.querySelectorAll(".portfolio .categories li");
let secChosen = document.querySelector(".portfolio .categories li");

secChosen.addEventListener("click", function () {
  for (let i = 0; i < sec.length; i++) {
    sec[i].className = "";
  }
  secChosen.classList.add("active-sec");
});
let phone = document.querySelector(".phone");
let skillsAnimation = document.querySelector(".skills ul");
let specs = document.querySelector(".specs");
let skills = document.querySelector(".skills");
window.onscroll = function () {
  if (scrollY >= specs.offsetTop - 600) {
    phone.style.display = "block";
    phone.style.animationName = "animate";
  } else {
    phone.style.display = "none";
    phone.style.animationName = "";
  }
  if (scrollY >= skills.offsetTop - 400) {
    skillsAnimation.style.display = "flex";
  } else {
    skillsAnimation.style.display = "none";
  }
  if (scrollY > home.offsetTop + 300) {
    returnToTop.style.zIndex = 100;
    returnToTop.style.opacity = 1;
  } else {
    returnToTop.style.zIndex = -1;
    returnToTop.style.opacity = 0;
  }
};
let home = document.querySelector(".main");
let returnToTop = document.createElement("button");
let icon = document.createElement("i");
icon.className = "fa-solid fa-arrow-up fa-bounce";
returnToTop.appendChild(icon);
returnToTop.style.cssText = `
width: 50px;
height: 70px;
position: fixed;
right: 20px;
bottom: 20px;
background-color: var(--main-color);
color: var(--primary-color);
border: none;
border-radius: 5px;
font-size: 30px;
cursor: pointer;
opacity: 0;
z-index: -1;
transition: var(--main-transition);
`;
returnToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
document.body.appendChild(returnToTop);
