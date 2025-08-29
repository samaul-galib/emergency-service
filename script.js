let totalHearts = 0;
const heartClickCount = document.getElementById('heart-click-count');
const cardHearts = document.querySelectorAll('.card-heart');

cardHearts.forEach(function(img) {
img.addEventListener('click', function(){
totalHearts++;
  heartClickCount.textContent = totalHearts;
  });
});

let totalCoins = 100;
const navCoinCount = document.getElementById('coin-count');
const cardCoins = document.querySelectorAll('.card-coin');

const historyContainer = document.querySelector(".call-history");
const clearButton = document.getElementById("clear-history");

navCoinCount.textContent = totalCoins;

cardCoins.forEach(function(button) {
  button.onclick = function () {
    if (totalCoins >= 20) {
      totalCoins -= 20;
      navCoinCount.textContent = totalCoins;
    
      const card = button.closest(".card-body");
      const serviceName = card.querySelector("h3").innerText;
      const number = card.querySelector("h2").innerText;
      const time = new Date().toLocaleTimeString();
      
      const item = document.createElement("div");
      item.className =
        "flex justify-between items-center bg-gray-50 px-4 py-3 rounded-xl";
      item.innerHTML = `
        <div>
          <p class="font-medium">${serviceName}</p>
          <p class="text-sm text-gray-500">${number}</p>
        </div>
        <span class="text-sm text-gray-500">${time}</span>
      `;
      historyContainer.appendChild(item);
        alert("📞 Calling " + serviceName + " (" + number + ")");
    } else {
      alert("You don't have enough coins to call!");
    }
  };
});

clearButton.addEventListener("click", function(){
  historyContainer.innerHTML = "";
})


let totalCopy = 0;
const copyCount = document.getElementById('copy-count');
const buttons = document.querySelectorAll('.card-copy');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const number = button.closest('.card-body').querySelector('h2').innerText;
    
    navigator.clipboard.writeText(number);

    totalCopy++;
    copyCount.textContent = totalCopy;

    alert("Copied: " + number);
  });
});

