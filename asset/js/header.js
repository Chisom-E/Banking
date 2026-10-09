const navbar = document.querySelector(".navbar");
const navtogglebtn = document.querySelector(".navtogglebtn");
console.log(navbar.classList);
console.log(navbar);
const icon = document.querySelector(".navtogglebtn .fas");
navtogglebtn.addEventListener("click",
  function()  {
    if (navbar.classList.contains("showNav")){
        navbar.classList.remove("showNav");
        icon.classList.remove('fa-times')
        icon.classList.add('fa-bars')
    }else {
        navbar.classList.add("showNav");
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-times')
    }
  });