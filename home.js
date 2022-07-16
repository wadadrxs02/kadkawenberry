var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      // you can put any JS code here
      alert("RSVP anda berjaya dihantar. Terima Kasih :) ");
      form.reset();
      $("#ModalRSVP").modal("hide");
    });
});

// var audio = document.getElementById("audio");
// function LoadOnce() {
//   window.location.reload();
//   audio.play();
// }

function play() {
  let audio = new Audio("https://bariyyahfahmi.kahwin.me/Salut.mp3");
  audio.play();
}
function hideModal() {
  const modal = document.getElementById("modal-covid");
  modal.classList.add("hide");
  play();
}
// window.onload = function () {
//   audio.play();
// };

let hasPlayed = false;
function handleFirstPlay(event) {
  if (hasPlayed === false) {
    hasPlayed = true;

    let audio = event.target;

    audio.play();

    // Start whatever you need to do after first playback has started
  }
}

$("#kedatangan").change(function () {
  if ($(this).val() == "hadir") {
    $("#jumlahkedatanganform").show();
    $("#namaform").show();
    $("#showcalendar").show();
    $("#waktuform").show();
  } else {
    $("#namaform").hide();
    $("#jumlahkedatanganform").hide();
    $("#showcalendar").hide();
    $("#waktuform").hide();
    $("#ModalRSVP").modal("hide");
  }
});

function updateTimer() {
  future = Date.parse("sept 04, 2022 12:00:00");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  document.getElementById("timer").innerHTML =
    "<div>" +
    d +
    "<span>Days</span></div>" +
    "<div>" +
    h +
    "<span>Hours</span></div>" +
    "<div>" +
    m +
    "<span>Minutes</span></div>" +
    "<div>" +
    s +
    "<span>Seconds</span></div>";
}
setInterval("updateTimer()", 1000);
