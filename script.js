

// day.js for fun, this works
function updateClock() {
    const now = dayjs();
    const time = now.format('dddd, MMMM D, YYYY, hh:mm:ss');
    document.getElementById('currentDay').innerHTML = time;
  }
  
  setInterval(updateClock, 1000);

  console.log();

fetch('https://api.openweathermap.org/data/3.0/onecall?lat=42.9634&lon=85.6681&exclude=hourly,daily&appid={f0e6ee1a746a465da3532536230801}', {
  headers: {
    'Authorization': 'Bearer f0e6ee1a746a465da3532536230801'
  }
})
//this parses the data
.then(response => response.json())
.then(data => {
// why is this reading as typescript?
    const Temperature: data.current.temp;
    const Feels Like: data.current.feels_like;
// stopping point 1/9
    document.getElementById('displayGrandRapids').innerText = 'Temperature: ${current.temp}';
    document

  })
  .catch(error => {
    console.error(error);
  });