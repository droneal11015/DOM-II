// Your code goes here

//Anchor Tag 'Home' gets focus when page loads
const logo = document.querySelector(".main-navigation h1");
window.onload = function() {logo.classList.add("blink")};

//button size scaling up on mouse over
const btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener('mouseover', (event) => btn.classList.add("btn-scaling")));

//button size scaling back to normal on mouse over
btns.forEach(btn => btn.addEventListener('mouseout', (event) => btn.classList.remove("btn-scaling")));

//Change first paragraph to red with single click
const header_p = document.querySelector(".intro > p");
header_p.addEventListener('click', (event) => event.target.style.color = '#17A2B8');

//Change back paragraph to black with double click
header_p.addEventListener('dblclick',(event) => event.target.style.color = 'black');

//keydown alert
const body = document.querySelector("body");
body.addEventListener('keydown', (event) => alert('No Input Fields Available!'));


//Add borders to pictures as we are scrolling down
imgs = document.querySelectorAll("img");
window.addEventListener('scroll', function(event) {
    imgs.forEach(img => img.style.border = "5px solid #17A2B8 "); 
});

//change background to gold when wheeling mouse
window.addEventListener('wheel', function(event) {
    body.style.background = "gold"; 
});


//All anchor tags changed to bold when resizing
///PREVENT DEFAULT
const a = document.querySelectorAll("a");
window.addEventListener('resize', function(event) {
    a.forEach(anchor => anchor.style.fontWeight = "bold");
    event.preventDefault();
});

//will send alert when clicking paragraph
///NESTED///

header_p.addEventListener('click', (event) => {
    alert("you have clicked on a paragraph");
    event.stopPropagation();// stop propagation to the body
});
body.addEventListener('click', (event) => alert("you have clicked on the body"));
