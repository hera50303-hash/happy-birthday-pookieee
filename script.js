function nextScreen(id){

  document
    .querySelector(".screen.active")
    .classList.remove("active");

  document
    .getElementById(id)
    .classList.add("active");

  confetti({
    particleCount:100,
    spread:80
  });

  if(id==="game"){
    spawnHeart();
  }
}

const slides =
document.querySelectorAll(".slide");

let current = 0;

document
.getElementById("next")
.onclick = () => {

  slides[current]
  .classList.remove("active");

  current =
  (current + 1)
  % slides.length;

  slides[current]
  .classList.add("active");
};

document
.getElementById("prev")
.onclick = () => {

  slides[current]
  .classList.remove("active");

  current =
  (current - 1 + slides.length)
  % slides.length;

  slides[current]
  .classList.add("active");
};

let count = 0;

function spawnHeart(){

  const area =
  document.getElementById("gameArea");

  const heart =
  document.createElement("div");

  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left =
    Math.random()*80 + "%";

  heart.style.top =
    Math.random()*80 + "%";

  area.appendChild(heart);

  heart.onclick = () => {

    count++;

    document
    .getElementById("score")
    .innerText =
    `Hearts Collected: ${count}/10 ❤️`;

    heart.remove();

    if(count < 10){
      spawnHeart();
    }
    else{
      confetti({
        particleCount:250,
        spread:120
      });

      setTimeout(() => {
        nextScreen("letters");
      },1500);
    }
  };
}

document
.getElementById("cakeEmoji")
.onclick = () => {

  document
  .getElementById("wish")
  .innerHTML =
  "✨ Wish delivered successfully. Universe notified. ⭐";

  confetti({
    particleCount:300,
    spread:160
  });
};

const song =
document.getElementById("song");

document
.getElementById("musicBtn")
.onclick = () => {

  if(song.paused){
    song.play();
    musicBtn.innerText =
    "⏸ Pause Our Song";
  }
  else{
    song.pause();
    musicBtn.innerText =
    "🎵 Play Our Song";
  }
};

document
.getElementById("hugBtn")
.onclick = () => {

  document
  .getElementById("hug")
  .innerHTML =
  `
  Yayyyyy! 🥺💙
  <br><br>
  Sending infinite hugs...
  <br>
  🫂🫂🫂🫂🫂
  `;

  confetti({
    particleCount:200,
    spread:100
  });
};