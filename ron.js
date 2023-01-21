const navToggle = document.getElementById("navToggle");
const nav = document.querySelector("nav");
const container = document.querySelector(".container");

navToggle.addEventListener('click', () => {
     nav.classList.toggle('open')
    
})

window.addEventListener("resize", () => {
       nav.classList.remove("open")
})


