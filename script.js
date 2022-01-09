const birthDate = "20 July 2022";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secEl = document.getElementById("seconds");

function countdown() {
  const myBirthDate = new Date(birthDate);
  const currDate = new Date();

  let millisec = myBirthDate - currDate;
  const sec = millisec / 1000;

  const days = Math.floor(sec / (3600 * 24));
  const hours = Math.floor((sec / 3600) % 24);
  const min = Math.floor(sec / 60) % 60;
  const seconds = Math.floor(sec) % 60;

  //   console.log(myBirthDate - currDate);
  //   console.log(seconds, min, hours, days);
  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minEl.innerHTML = formatTime(min);
  secEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
