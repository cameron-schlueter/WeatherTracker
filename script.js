

// day.js for fun, this works
function updateClock() {
    const now = dayjs();
    const time = now.format('dddd, MMMM D, YYYY, hh:mm:ss');
    document.getElementById('currentDay').innerHTML = time;
  }
  
  setInterval(updateClock, 1000);

  console.log();


  

// fetch, less broken now, trying to call the temp

fetch('https://www.weatherapi.com/my/fields.aspx')
  .then(response => response.json())
  .then(data => {
    document.getElementById('displayGrandRapids').innerHTML = 
    '<p>Temperature: ${temp_f}</p>';
  })
  .catch(error => {
    console.error(error);
  });

// 

//what does this do
const https = require('https://www.weatherapi.com/my/fields.aspx');

const options = {
  hostname: 'https://www.weatherapi.com/',
  path: '/endpoint',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer f0e6ee1a746a465da3532536230801',
    // location for weather
    body: JSON.stringify({
    q: 'Grand Rapids,US',
    appid: 'f0e6ee1a746a465da3532536230801'
    })
  }
}
