// Your code goes here

//Anchor Tag 'Home' gets focus when page loads
const logo = document.querySelector(".main-navigation h1");
window.onload = function() {logo.classList.add("blink")};


//button size scaling up on mouse over
const btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener('mouseover', (event) => btn.classList.add("btn-scaling")));

//button size scaling back to normal on mouse over
btns.forEach(btn => btn.addEventListener('mouseout', (event) => btn.classList.remove("btn-scaling")));

//Change first paragrapg to red with double click
const header_p = document.querySelector(".intro > p");
header_p.addEventListener('click', (event) => event.target.style.color = 'red');

//Change back paragraph to black with single click
header_p.addEventListener('dblclick',(event) => event.target.style.color = 'black');

//keydown alert
const body = document.querySelector("body");
body.addEventListener('keydown', (event) => alert('No Input Fields Available!'));


//Add borders to pictures as we are scrolling down
imgs = document.querySelectorAll("img");
window.addEventListener('scroll', function(event) {
    imgs.forEach(img => img.style.border = "5px solid #17A2B8 "); 
});
