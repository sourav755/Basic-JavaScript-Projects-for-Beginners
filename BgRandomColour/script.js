const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const box = document.querySelector(".box");

let intervalId;

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const startInterval = () => {
  intervalId = setInterval(() => {
    box.style.backgroundColor = randomColor();
  }, 1000);
};

const stopInterval = () => {
  clearInterval(intervalId);
  intervalId = null;
};

start.addEventListener("click", startInterval);
stop.addEventListener("click", stopInterval);
