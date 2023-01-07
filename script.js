

// day.js for fun
function updateClock() {
    const now = dayjs();
    const time = now.format('dddd, MMMM D, YYYY, hh:mm:ss');
    document.getElementById('currentDay').innerHTML = time;
  }
  
  setInterval(updateClock, 1000);

  console.log();
  