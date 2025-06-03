// widgets/timer.js
const timerWidget = document.getElementById("timer-widget");

timerWidget.innerHTML = `
  <h2>⏳ Antrenman Geri Sayımı</h2>
  <label>
    Sonraki Antrenman Tarihi ve Saati:
    <input type="datetime-local" id="workoutTime" />
  </label>
  <button id="startTimer">Başlat</button>
  <div id="countdown" style="margin-top: 10px; font-weight: bold; font-size: 1.1em;"></div>
`;

let countdownInterval;

function updateCountdown(targetDate) {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").textContent = "Antrenman zamanı geldi! 🏋️‍♂️";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").textContent =
    `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye kaldı`;
}

document.getElementById("startTimer").addEventListener("click", () => {
  const input = document.getElementById("workoutTime").value;
  if (!input) return alert("Lütfen tarih ve saat seçin!");

  const targetDate = new Date(input).getTime();

  if (countdownInterval) clearInterval(countdownInterval);

  updateCountdown(targetDate);

  countdownInterval = setInterval(() => {
    updateCountdown(targetDate);
  }, 1000);
});
