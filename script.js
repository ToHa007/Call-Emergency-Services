// heart icon click counts
document.addEventListener("DOMContentLoaded", function () {
  let heartCount = 0;
  const heartIcons = document.querySelectorAll(".heart-btn");
  const heartCounter = document.getElementById("heart-count");

  heartIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      if (!icon.classList.contains("active")) {
        heartCount++;
        icon.classList.add("active");
      } else {
        heartCount--;
        icon.classList.remove("active");
      }

      heartCounter.textContent = heartCount;
    });
  });
});




// creating coin calculation and  call history and copied number system 


// coin counter 
let coins = 100;
let copyCount = 0; 

const coinCounter = document.getElementById("coin-counter");
coinCounter.textContent = coins;

const callButtons = document.querySelectorAll(".card_parent .buttons button.bg-green-500");
const copyButtons = document.querySelectorAll(".card_parent .buttons button.text-gray-500"); 
const copyCounterBtn = document.querySelector(".parent_right button:nth-child(3)"); 


const historyContainer = document.querySelector(".history_box");


const clearBtn = document.querySelector(".history_box_top button");


callButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return; 
    }

    
    coins -= 20;
    coinCounter.textContent = coins;

    
    const card = button.closest(".card_parent");
    const serviceName = card.querySelector(".p_div h1").textContent;
    const serviceNumber = card.querySelector(".p_div h2").textContent;

    alert("Calling " + serviceName + " at " + serviceNumber);

    
    const now = new Date();
    const timeStr = now.toLocaleTimeString(); 
    

    const entry = document.createElement("p");
    entry.textContent = timeStr + " - " + serviceName + ": " + serviceNumber;
    entry.className = "history-entry text-2xl text-center w-2/3 font-semibold bg-[#e3e6e5] rounded-xl p-3 my-2 mx-auto"; 


    historyContainer.appendChild(entry);
  });
});


clearBtn.addEventListener("click", function () {
  const entries = historyContainer.querySelectorAll(".history-entry");
  entries.forEach(function(entry) {
    entry.remove();
  });
});

// copied numbers calculation and copying to the clipboard 

copyButtons.forEach(function(button) {
  button.addEventListener("click", async function() {
    const card = button.closest(".card_parent");
    const serviceName = card.querySelector(".p_div h1").textContent;
    const serviceNumber = card.querySelector(".p_div h2").textContent;

    await navigator.clipboard.writeText(serviceNumber); 
    // copy to clipboard

    alert("Copied " + serviceName + " (" + serviceNumber + ") to clipboard! ✅");

    copyCount++;
    copyCounterBtn.querySelector("span")?.remove(); 
    copyCounterBtn.innerHTML = `<span>${copyCount}</span> Copy`;
  });
});
