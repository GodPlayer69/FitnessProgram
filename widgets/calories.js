// widgets/calories.js
document.getElementById("calories-widget").innerHTML = `
  <h2>🍽️ Kalori Takibi</h2>
  <label>Günlük Hedef Kalori:
    <input type="number" id="calorieGoal" placeholder="Örn: 2000">
  </label>
  <label>Yenilen Kalori:
    <input type="number" id="calorieEaten" placeholder="Örn: 1500">
  </label>
  <button onclick="calculateCalories()">Hesapla</button>
  <div id="calorieResult" style="margin-top:10px;"></div>
  <div class="progress-bar">
    <div id="calorieProgress" class="progress-bar-inner"></div>
  </div>
`;

window.calculateCalories = function () {
  const goal = parseInt(document.getElementById("calorieGoal").value) || 0;
  const eaten = parseInt(document.getElementById("calorieEaten").value) || 0;
  const remaining = goal - eaten;
  const percent = goal > 0 ? Math.min((eaten / goal) * 100, 100) : 0;

  document.getElementById("calorieResult").innerHTML = remaining >= 0
    ? `Kalan Kalori: <b>${remaining}</b> kcal`
    : `<b style="color:#f44336;">Hedef aşıldı!</b>`;

  document.getElementById("calorieProgress").style.width = percent + "%";
};
