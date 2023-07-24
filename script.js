let btnMenu=document.querySelector(".links-icon");
let links=document.querySelector(".links");
btnMenu.addEventListener("click",function(){
    links.classList.toggle("close");
});
let goRight=document.querySelector(".go-right");
let goLeft=document.querySelector(".go-left");
let image=document.querySelector(".main img");
let imagesHome=["./images/catWallpaper.jpg","./images/lionWallpaper.jpg","./images/owlwallpaper.jpg"];
var i=0;
let circles=document.querySelectorAll("#scroll div");
goRight.addEventListener("click",function(){
    for(let i=0;i<circles.length;i++){
        circles[i].className="";
    }
    circles[i=(i+3)%imagesHome.length].classList.add("active-circle");
    image.src=imagesHome[i=(i+1)%imagesHome.length];
    localStorage.setItem("indexImage",i)
});
goLeft.addEventListener("click",function(){
    for(let i=0;i<circles.length;i++){
        circles[i].className="";
    }
    circles[i=(i+1)%imagesHome.length].classList.add("active-circle");
    image.src=imagesHome[i=(i+1)%imagesHome.length];
    localStorage.setItem("indexImage",i);
});
setInterval(function(){
    for(let i=0;i<circles.length;i++){
        circles[i].className="";
    }
    circles[i=(i+3)%imagesHome.length].classList.add("active-circle");
    image.src=imagesHome[i=(i+1)%imagesHome.length];
    localStorage.setItem("indexImage",i)
}, 3000);
image.src=imagesHome[Number(localStorage.getItem("indexImage"))];
let search=document.querySelector(".search-icon");
let searchPage=document.querySelector(".search");
let searchInput=document.querySelector(".search input");
search.addEventListener("click",function(e){
    e.preventDefault();
    searchPage.classList.toggle("close-search")
    searchInput.focus();
});
searchInput.addEventListener("blur",function(){
    searchPage.classList.toggle("close-search")
})
let categories=document.querySelector(".portfolio .categories");
let sec=document.querySelectorAll(".portfolio .categories li");
let secChosen=document.querySelector(".portfolio .categories li");

secChosen.addEventListener("click",function(){
    for(let i=0;i<sec.length;i++){
        sec[i].className="";
    }
    secChosen.classList.add("active-sec");
})
let phone=document.querySelector(".phone");
let skillsAnimation=document.querySelector(".skills ul");
window.onscroll=function(){
    if(scrollY>900){
        phone.style.animationName="animate";
    }
    else{
        phone.style.animationName="";
    }
    if(scrollY>4300){
        skillsAnimation.style.display="flex";
    }
    
}