
window.addEventListener("load", () => {

    setTimeout(() => {

        alert("Welcome to the CyberSecure Portal!\n\nThis project demonstrates a Cybersecurity Policy and Incident Response Plan for a Small Business.");

    }, 500);

});


// =====================
// Hero Typing Animation

const heading = document.querySelector(".hero h1");

const text =
"Cybersecurity Policy & Incident Response Plan";

let i = 0;

heading.innerHTML = "";

function typingEffect(){

    if(i < text.length){

        heading.innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect,60);

    }

}

typingEffect();


// =============================
// Highlight Navigation
// =============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop = section.offsetTop-120;

const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// =============================
// Checklist Counter
// =============================

const checkboxes =
document.querySelectorAll('#checklist input[type="checkbox"]');

const checklist =
document.getElementById("checklist");

const progressText =
document.createElement("h3");

progressText.style.marginTop="25px";
progressText.style.textAlign="center";
progressText.style.color="#00d9ff";

checklist.appendChild(progressText);

function updateChecklist(){

let checked=0;

checkboxes.forEach(box=>{

if(box.checked){

checked++;

}

});

progressText.innerHTML =
"Completed : "
+checked+
" / "
+checkboxes.length+
" Security Tasks";

}

checkboxes.forEach(box=>{

box.addEventListener("change",updateChecklist);

});

updateChecklist();


// =============================
// Animate Progress Bars
// =============================

const bars =
document.querySelectorAll(".bar span");

window.addEventListener("load",()=>{

bars.forEach(bar=>{

let finalWidth = bar.style.width;

bar.style.width="0";

setTimeout(()=>{

bar.style.transition="2s";

bar.style.width=finalWidth;

},300);

});

});


// =============================
// Reveal Animation
// =============================

const revealElements =
document.querySelectorAll(".card,.step,table,.progress,#checklist label");

function reveal(){

revealElements.forEach(el=>{

const windowHeight = window.innerHeight;

const revealTop =
el.getBoundingClientRect().top;

if(revealTop < windowHeight-100){

el.style.opacity="1";

el.style.transform="translateY(0px)";

}

});

}

window.addEventListener("scroll",reveal);

reveal();


// =============================
// Back To Top Button
// =============================

const topBtn =
document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#00d9ff";
topBtn.style.color="black";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 0 15px cyan";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// =============================
// Live Clock
// =============================

const clock =
document.createElement("div");

clock.style.position="fixed";
clock.style.left="20px";
clock.style.bottom="20px";
clock.style.background="#161b22";
clock.style.color="#00d9ff";
clock.style.padding="10px 18px";
clock.style.borderRadius="10px";
clock.style.fontWeight="bold";
clock.style.boxShadow="0 0 10px cyan";

document.body.appendChild(clock);

function updateClock(){

const now = new Date();

clock.innerHTML =
now.toLocaleDateString()+
"<br>"+
now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();


// =============================
// Card Hover Sound (Optional)
// =============================

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});


// =============================
// Console Message
// =============================

console.log("CyberSecure Portal Loaded Successfully");

console.log("Created for Educational Purpose");