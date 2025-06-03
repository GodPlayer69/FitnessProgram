// widgets/quote.js
const quotes = [
  "Başarı, küçük çabaların tekrar tekrar tekrar edilmesidir.",
  "Sağlık, gerçek zenginliktir.",
  "Vücut senin tapınağın, ona iyi bak.",
  "Hayallerin için ter dök!",
  "Her gün bir adım daha ileri git.",
  "Güçlü olmak için önce inanmalısın."
];

const quoteWidget = document.getElementById("quote-widget");

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteWidget.textContent = quotes[randomIndex];
}

quoteWidget.innerHTML = `<h2>🎵 Motivasyon Sözleri</h2><p id="quoteText" style="margin-top: 10px; font-style: italic;"></p>`;

showRandomQuote();
setInterval(showRandomQuote, 15000);
