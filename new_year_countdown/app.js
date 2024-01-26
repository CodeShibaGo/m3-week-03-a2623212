let nextYear = 2030;
const targetDate = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();
const countdown = document.getElementById("countdown");
const loadingSpinner = document.getElementById("loading");

document.getElementById("year").innerText = nextYear;

function newYear() {
  const currentDate = new Date().getTime();
  const remainingTime = targetDate - currentDate;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //get days, hours, minutes, seconds
  const days = Math.floor(remainingTime / day);

  const hours = Math.floor((remainingTime % day) / hour);
  const minutes = Math.floor((remainingTime % hour) / minute);
  const seconds = Math.floor((remainingTime % minute) / second);

  //DOM manipulate
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// when loading in 1000, the spinner will show
setTimeout(() => {
  loadingSpinner.remove();
  countdown.style.display = "flex";
}, 1000);

setInterval(function () {
  newYear();
}, 1000);
