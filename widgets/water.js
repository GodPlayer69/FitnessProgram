// widgets/water.js
const waterWidget = document.getElementById("water-widget");

waterWidget.innerHTML = `
  <h2>💧 Su Takibi</h2>
  <div id="waterDrops" style="display: flex; gap: 6px; flex-wrap: wrap;">
    ${Array(8).fill(0).map((_, i) =>
      `<div class="water-drop" data-index="${i}" style="
        width: 30px; height: 30px; border-radius: 50%; background: #555; cursor: pointer;
        box-shadow: inset 0 0 5px #333;
      "></div>`).join('')}
  </div>
  <button id="resetWater" style="margin-top:10px;">Sıfırla</button>
`;

const waterDrops = waterWidget.querySelectorAll(".water-drop");
let waterCount = 0;

function updateWater() {
  waterDrops.forEach((drop, idx) => {
    if (idx < waterCount) {
      drop.style.background = "#4caf50";
      drop.style.boxShadow = "0 0 8px #4caf50";
    } else {
      drop.style.background = "#555";
      drop.style.boxShadow = "inset 0 0 5px #333";
    }
  });
}

waterDrops.forEach(drop => {
  drop.addEventListener("click", () => {
    const idx = +drop.dataset.index;
    if (idx + 1 === waterCount) {
      waterCount = idx; // bir tane geri al
    } else {
      waterCount = idx + 1;
    }
    updateWater();
  });
});

document.getElementById("resetWater").addEventListener("click", () => {
  waterCount = 0;
  updateWater();
});

updateWater();
