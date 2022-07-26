var dateTimer = new Date(localStorage.getItem("dateTimer") + " 00:00:00");
var nameTimer = localStorage.getItem("nameTimer");
var picId = localStorage.getItem("picId");

//дата для проверки
//var dateTimer = new Date("2022-07-26" + " 12:16:00");

document.body.style.backgroundImage = `url(${picId})`;
document.querySelector("h1").innerText = nameTimer + " will come in";

function countDown() {
  const currentDate = new Date();
  let msBeforeDay = dateTimer - currentDate;

  const msInSec = 1000;
  const msInMin = 1000 * 60;
  const msInHour = 1000 * 60 * 60;
  const msInDay = 1000 * 60 * 60 * 24;

  let daysBeforeDay = Math.floor(msBeforeDay / msInDay);
  let hoursBeforeDay = Math.floor((msBeforeDay % msInDay) / msInHour);
  let minutesBeforeDay = Math.floor((msBeforeDay % msInHour) / msInMin);
  let secondsBeforeDay = Math.floor((msBeforeDay % msInMin) / msInSec);

  document.querySelector(".timer-days-number").innerText =
    FormNumber(daysBeforeDay);
  document.querySelector(".timer-hours-number").innerText =
    FormNumber(hoursBeforeDay);
  document.querySelector(".timer-minutes-number").innerText =
    FormNumber(minutesBeforeDay);
  document.querySelector(".timer-secundes-number").innerText =
    FormNumber(secondsBeforeDay);

  if (msBeforeDay <= 0) {
    document.querySelector(".timer-days-number").textContent = "00";
    document.querySelector(".timer-hours-number").textContent = "00";
    document.querySelector(".timer-minutes-number").textContent = "00";
    document.querySelector(".timer-secundes-number").textContent = "00";

    clearInterval(timerID);

    document.querySelector("h1").innerHTML = "Congratulations!";
    document.querySelector("h1").style.fontFamily = "RobotoBold";
  }
}

let timerID = setInterval(countDown, 1000);

function FormNumber(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}
