let startDate = new Date();

function updateTimer() {
  let now = new Date();
  let diff = now - startDate;

  let seconds = Math.floor(diff / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30); // Aproximação

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;
  days = days % 30;

  document.getElementById('months').textContent = String(months).padStart(2, '0');
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateTimer, 1000);
