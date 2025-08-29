// Navbar counters
const heartCounter = document.getElementById("heartCount");
const coinCounter = document.getElementById("coinCount");
const copyCounter = document.getElementById("copyCount");

let hearts = 0;
let coins = 100;
let copies = 0;

// History
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistory");

clearBtn.addEventListener("click", function(){
historyList.innerHTML = "";
});

// Loop over cards
document.querySelectorAll(".card").forEach((card) => {
    const heartButton = card.querySelector(".heart-button");
    const callButton = card.querySelector(".call-button");
    const copyButton = card.querySelector(".copy-button");
    const cardNumber = card.querySelector(".card-num").textContent.trim();
    const cardTitle = card.querySelector(".card-title").textContent.trim();

//  Heart Count
    heartButton.addEventListener("click", function(){
    hearts++;
    heartCounter.textContent = hearts;
    });
// Copy button
    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(cardNumber)
        .then(() => {
            alert(`Copied: ${cardNumber}`);
            copies++;
            copyCounter.textContent = copies;
        })
        .catch(() => {
            alert("Failed to copy!");
        });
    });

// Call button
    callButton.addEventListener("click", function(){
      if (coins < 20) {
        alert("Not enough coins! Each call costs 20 coins.");
        return;
      }
      coins -= 20;
      coinCounter.textContent = coins;
      alert(`Calling ${cardTitle} (${cardNumber})...`);

// Add history entry
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const li = document.createElement("li");
    li.className = "card-title justify-between py-2 shadow";
    li.innerHTML = `<span>${cardTitle} - ${cardNumber}</span><span class="text-gray-500">${time}</span>`;
    historyList.prepend(li);
    });
});
  