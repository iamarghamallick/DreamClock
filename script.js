var audio = new Audio('alarm_music.mp3');
audio.loop = true;

let current_time = document.getElementById("current-time");
let set_time = document.getElementById("set-time")

function addZero(time) {
  return (time < 10) ? "0" + time : time;
}

function hoursMenu() {
  var select = document.getElementById('alarm-hrs');
  var hrs = 12
  for (i = 1; i <= hrs; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
hoursMenu();

function minMenu() {
  var select = document.getElementById('alarm-min');
  var min = 59;
  for (i = 0; i <= min; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
minMenu();

function secMenu() {
  var select = document.getElementById('alarm-sec');
  var sec = 59;
  for (i = 0; i <= sec; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
secMenu();

let currentTime = setInterval(() => {
  let d = new Date();
  let hrs = (d.getHours()) <= 12 ? (((d.getHours()) == 0) ? '12' : d.getHours()) : Math.abs(Number(12 - (d.getHours())));
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let ampm = (d.getHours()) < 12 ? 'AM' : 'PM';
  current_time.textContent = addZero(hrs) + ":" + addZero(min) + ":" + addZero(sec) + "" + ampm;
}, 1000)



function alarmSet() {
  var hr = document.getElementById('alarm-hrs');
  var min = document.getElementById('alarm-min');
  var sec = document.getElementById('alarm-sec');
  var ap = document.getElementById('alarm-ampm');

  var selectedHour = hr.options[hr.selectedIndex].value;
  var selectedMin = min.options[min.selectedIndex].value;
  var selectedSec = sec.options[sec.selectedIndex].value;
  var selectedAP = ap.options[ap.selectedIndex].value;

  var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;

  hr.disabled = true;
  min.disabled = true;
  sec.disabled = true;
  ap.disabled = true;

  var current_time = document.getElementById('current-time');

  set_time.innerText = "Alarm Saved";

  setInterval(function() {
    var date = new Date();
    let hours = (date.getHours()) <= 12 ? (((date.getHours()) == 0) ? '12' : date.getHours()) : Math.abs(Number(12 - (date.getHours())));
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';

    var currentTime = current_time.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;

    if (alarmTime == currentTime) {
      audio.play();
      set_time.innerText = "Time Up";
    }
  }, 1000);
}

function clearAlarm() {
  var hr = document.getElementById('alarm-hrs');
  var min = document.getElementById('alarm-min');
  var sec = document.getElementById('alarm-sec');
  var ap = document.getElementById('alarm-ampm');

  hr.disabled = false;
  min.disabled = false;
  sec.disabled = false;
  ap.disabled = false;

  audio.pause();

  set_time.innerText = "Set Time"
}