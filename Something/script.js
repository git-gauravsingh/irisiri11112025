// Floating Hearts
setInterval(()=>{
  const heart=document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML="💖";
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(Math.random()*20+15)+"px";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
},600);

// Fade Navigation
function goTo(page){
  document.body.classList.add("fade-out");
  setTimeout(()=>window.location.href=page,500);
}

// Login
function login(){
  const name=document.getElementById("name").value.toLowerCase();
  const pass=document.getElementById("pass").value;

  if(name==="siri" || name==="iris" && pass==="11112025"){
    localStorage.setItem("loggedIn","true");
    localStorage.setItem("music","play");
    goTo("welcome.html");
  }else{
    alert("Wrong details 🥺");
  }
}

// Check Login
if(localStorage.getItem("loggedIn")!=="true" && !window.location.href.includes("index.html")){
  window.location.href="index.html";
}

// Typing Effect
function typeText(text,id){
  let i=0;
  const interval=setInterval(()=>{
    document.getElementById(id).innerHTML+=text[i];
    i++;
    if(i>=text.length)clearInterval(interval);
  },40);
}

// Confetti
function confetti(){
  for(let i=0;i<100;i++){
    const c=document.createElement("div");
    c.style.position="fixed";
    c.style.width="8px";
    c.style.height="8px";
    c.style.background="hsl("+Math.random()*360+",100%,50%)";
    c.style.left=Math.random()*100+"vw";
    c.style.top="0";
    c.style.animation="fall 3s linear";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3000);
  }
}

// Fireworks
function fireworks(){
  for(let i=0;i<30;i++){
    const f=document.createElement("div");
    f.style.position="fixed";
    f.style.width="6px";
    f.style.height="6px";
    f.style.background="yellow";
    f.style.top="50%";
    f.style.left="50%";
    f.style.setProperty('--x',Math.random()-0.5);
    f.style.setProperty('--y',Math.random()-0.5);
    f.style.animation="explode 1s ease-out";
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),1000);
  }
}

// Angry Mode
function angry(){
  document.body.classList.add("sad-bg");
  const cry=document.createElement("div");
  cry.innerHTML="🥺💔";
  cry.style.fontSize="50px";
  cry.style.animation="shake 1s infinite";
  document.body.appendChild(cry);
  setTimeout(()=>cry.remove(),2000);
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

if(slides.length > 0){
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 2500);
}