const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setClockFace() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  let hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // Convert to 12-hour format
  const isPM = hours >= 12;
  hours = hours % 12; // Convert to 12-hour format
  hours = hours ? hours : 12; // Replace 0 with 12

  // Format time to ensure two digits for minutes and seconds
  var time = 
      hours.toString().padStart(2, '0') + ":" + 
      minutes.toString().padStart(2, '0') + ":" + 
      seconds.toString().padStart(2, '0') + 
      (isPM ? ' PM' : ' AM'); // Append AM/PM
  
  const digitalClockFace = document.querySelector('.time');
  digitalClockFace.innerHTML = time;
}

// 1000 milliseconds is one second
setInterval(setClockFace, 1000);