function updateTimer() {
  const startDate = new Date('2024-09-11T00:00:00');
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();

  if (hours < 0) {
    hours += 24;
    days -= 1;
  }

  if (days < 0) {
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  const totalMonths = years * 12 + months;

  document.getElementById('months').textContent = totalMonths;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
}

updateTimer();
setInterval(updateTimer, 60 * 60 * 1000); // Atualiza a cada hora
