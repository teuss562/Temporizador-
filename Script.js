function atualizarContador() {
  const inicio = new Date('2024-09-11T03:00:00Z');

  const agoraUTC = new Date();

  const agoraBrasilia = new Date(agoraUTC.getTime() - 3 * 60 * 60 * 1000);

  const diff = agoraBrasilia - inicio;

  if (diff <= 0) {
    document.getElementById("timer").textContent = "Ainda não começou.";
    return;
  }

  const segundos = Math.floor(diff / 1000);
  const dias = Math.floor(segundos / 86400);
  const horas = Math.floor((segundos % 86400) / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segs = segundos % 60;

  document.getElementById("timer").textContent =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segs} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
