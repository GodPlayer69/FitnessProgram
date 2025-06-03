// widgets/schedule.js
const days = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
const scheduleWidget = document.getElementById("schedule-widget");

scheduleWidget.innerHTML = `
  <h2>📅 Haftalık Antrenman Planı</h2>
  <div class="checklist">
    ${days.map(day => `
      <label>
        <input type="checkbox" data-day="${day}">
        ${day}
      </label>
    `).join("")}
  </div>
  <button id="saveSchedule">Kaydet</button>
  <div id="scheduleMessage" style="margin-top:10px;"></div>
`;

const checkboxes = scheduleWidget.querySelectorAll("input[type=checkbox]");
const scheduleMessage = document.getElementById("scheduleMessage");

// Kaydetmeden önce localStorage varsa yükle
function loadSchedule() {
  const saved = localStorage.getItem("fitnessSchedule");
  if (saved) {
    const daysChecked = JSON.parse(saved);
    checkboxes.forEach(cb => {
      cb.checked = daysChecked.includes(cb.dataset.day);
    });
  }
}

function saveSchedule() {
  const checkedDays = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.dataset.day);
  localStorage.setItem("fitnessSchedule", JSON.stringify(checkedDays));
  scheduleMessage.textContent = "Plan kaydedildi!";
  setTimeout(() => scheduleMessage.textContent = "", 2000);
}

document.getElementById("saveSchedule").addEventListener("click", saveSchedule);
loadSchedule();
