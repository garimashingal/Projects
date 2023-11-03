window.addEventListener("load", (e) => {
  const timer_el = document.querySelector("#time");

  const button_start = document.querySelector("#start");
  const button_stop = document.querySelector("#stop");
  const button_reset = document.querySelector("#reset");

  let seconds = 0;
  let interval = null;

  //Event Listners

  button_start.addEventListener("click", start);
  button_stop.addEventListener("click", stop);
  button_reset.addEventListener("click", reset);

  //Update the timer
  function timer() {
    seconds++;

    //Format out time

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - hrs * 3600) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    timer_el.innerText = `${hrs}:${mins}:${secs}`;
  }

  function start() {
    if (interval) {
      return;
    }
    interval = setInterval(timer, 1000);
  }

  function stop() {
    clearInterval(interval);
    interval = null;
  }

  function reset() {
    stop();
    seconds = 0;
    timer_el.innerText = "00:00:00";
  }
});
