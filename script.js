const keyParts = ["keys/a3.json", "keys/x9.json", "keys/b7.json"];
const expectedKey = "FITNES-KEY-2025";

async function getKeyPart(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Key fetch failed");
    const data = await res.json();
    return atob(data.part); // Base64 decode
  } catch (err) {
    return null;
  }
}

async function validateKey() {
  const parts = await Promise.all(keyParts.map(getKeyPart));

  if (parts.includes(null)) {
    showPirateMessage();
    return;
  }

  const fullKey = parts.join("");

  if (fullKey === expectedKey) {
    unlockApp();
  } else {
    showPirateMessage();
  }
}

function showPirateMessage() {
  document.getElementById("message").textContent = "🚫 Korsan versiyon tespit edildi!";
  document.getElementById("app").style.display = "none";
}

function unlockApp() {
  document.getElementById("message").style.display = "none";
  document.getElementById("app").style.display = "block";
}

validateKey();
