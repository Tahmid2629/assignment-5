document.addEventListener("DOMContentLoaded", () => {
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

  clearBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
  });

  // Loop over cards
  document.querySelectorAll(".card").forEach((card) => {
    const heartButton = card.querySelector(".heart-button");
    const callButton = card.querySelector(".call-button");
    const copyButton = card.querySelector(".copy-button");
    const cardNumber = card.querySelector(".card-num").textContent.trim();
    const cardTitle = card.querySelector(".card-title").textContent.trim();

     // ❤️ Heart toggle
    heartButton.addEventListener("click", function(){
      if (heartButton.classList.contains("fa-regular")) {
        heartButton.classList.remove("fa-regular", "text-base");
        heartButton.classList.add("fa-solid", "text-red-500", "text-2xl");
        hearts++;
      } else {
        heartButton.classList.remove("fa-solid", "text-red-500", "text-2xl");
        heartButton.classList.add("fa-regular", "text-base");
        hearts--;
      }
      heartCounter.textContent = hearts;
    });
    // 📋 Copy button
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(cardNumber);
        alert(`Copied: ${cardNumber}`);
        copies++;
        copyCounter.textContent = copies;
      } catch (err) {
        alert("Failed to copy!");
      }
    });

    // 📞 Call button
    callButton.addEventListener("click", function(){
      if (coins < 20) {
        alert("Not enough coins! Each call costs 20 coins.");
        return;
      }
      coins -= 20;
      coinCounter.textContent = coins;
      alert(`Calling ${cardTitle} (${cardNumber})...`);

      // Add history entry
      const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const li = document.createElement("li");
      li.className = "flex justify-between bg-gray-50 px-3 py-2 rounded-lg shadow-sm";
      li.innerHTML = `<span>${cardTitle} - ${cardNumber}</span><span class="text-gray-500">${time}</span>`;
      historyList.prepend(li);
    });
  });
  

});