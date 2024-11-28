var display = document.getElementById("display");
var inc = document.querySelector("#increase");
var dec = document.getElementById("decrease");
var reset = document.getElementById("reset");

console.log(display);
console.log(inc);
console.log(dec);
console.log(reset);
var powerup = () => {
  var audio = new Audio("./Audios/Powerup.mp3");
  audio.play();
};
var coin = () => {
  var audio = new Audio("./Audios/coin_cropped.mp3");
  audio.play();
};
var gameover = () => {
  var audio = new Audio("./Audios/gameover.mp3");
  audio.play();
};
var up = () => {
  var count = Number(display.innerHTML);
  console.log(count);
  count++;
  if (count % 50 == 0 && Number(count / 50) != 0) {
    powerup();
  } else {
    coin();
  }

  display.innerHTML = count;
  console.log(count);
};

var down = () => {
  var count = Number(display.innerHTML);
  console.log(count);
  if (count != 0) {
    count--;
    coin();
  }
  display.innerHTML = count;
  console.log(count);
};

var resetevent = () => {
  var count = Number(display.innerHTML);
  console.log(count);
  count = 0;
  gameover();
  display.innerHTML = count;
  console.log(count);
};

inc.addEventListener("click", up);
dec.addEventListener("click", down);
reset.addEventListener("click", resetevent);
