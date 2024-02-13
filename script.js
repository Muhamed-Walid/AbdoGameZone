
//SideBar
let sb = `<div class="menu">
<svg onclick="openSidebar()" width="30" height="20" viewBox="0 0 43 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.467 14.7474L36.1351 0.726804C37.1489 -0.242268 38.7883 -0.242268 39.7914 0.726804L42.2288 3.0567C43.2427 4.02577 43.2427 5.59278 42.2288 6.55155L31.8425 16.5L42.2396 26.4381C43.2535 27.4072 43.2535 28.9742 42.2396 29.933L39.8021 32.2732C38.7883 33.2423 37.1489 33.2423 36.1459 32.2732L21.4778 18.2526C20.4531 17.2835 20.4531 15.7165 21.467 14.7474ZM0.759027 18.2526L15.4272 32.2732C16.441 33.2423 18.0804 33.2423 19.0834 32.2732L21.5209 29.9433C22.5347 28.9742 22.5347 27.4072 21.5209 26.4485L11.1346 16.5L21.5317 6.56186C22.5455 5.59278 22.5455 4.02577 21.5317 3.06701L19.0942 0.726804C18.0804 -0.242268 16.441 -0.242268 15.4379 0.726804L0.769812 14.7474C-0.2548 15.7165 -0.254799 17.2835 0.759027 18.2526Z" fill="white"/>
  </svg>
</div>

<aside id="aside" align="center">

<div>
<img src="imgs/logo.ico" alt="logo" width="150px">
<h2><span>AbdoGameZone</span></h2>
<li><a href="index.html">Home</a></li>
<li><a href="team.html">Our Team</a></li>
<li><a href="games.html">Our Games</a></li>
<li><a href="contact.html">Contact Us</a></li>
</div>

<br><br>
<h3>Our Top Games</h3>
<a href="#"><img src="imgs/game-1.webp" alt="game" width="200px"></a>
<br>
<a href="#"><img src="imgs/game-2.webp" alt="game" width="200px"></a>
</aside>`;
let sbContainer = document.getElementById("sb");

sbContainer.innerHTML = sb;



let aside = document.getElementById('aside');
aside.style.right = "-100%";

// Open The Side Bar If It Is Closed
function openSidebar() {
  if (aside.style.right === "-100%") {
    aside.style.right = "0";
    document.querySelector('.menu').style.marginRight = "230px";
    document.querySelector('.menu').style.transform = "rotateY(180deg)";
  }

  // Close The Side Bar If It Is Open
  else {
    aside.style.right = "-100%";
    document.querySelector('.menu').style.marginRight = "0px";
    document.querySelector('.menu').style.transform = "rotateY(0deg)";
  }
}

