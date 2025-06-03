// widgets/steps.js
document.getElementById("steps-widget").innerHTML = `
  <h2>🧍 Günlük Aktivite</h2>
  <label>Adım Sayısı:
    <input type="number" id="stepCount" placeholder="Örn: 4000">
  </label>
  <button onclick="calculateSteps()">Hesapla</button>
  <div id="stepResult" style="margin-top: 10px;"></div>
`;

window.calculateSteps = function () {
  const steps = parseInt(document.getElementById("stepCount").value) || 0;
  const calories = Math.round(steps * 0.04);
  const minutes = Math.round(steps / 100);
  document.getElementById("stepResult").innerHTML = `
    🔥 Yakılan Kalori: <b>${calories} kcal</b><br>
    ⏱️ Süre: <b>${minutes} dakika</b>
  `;
};
